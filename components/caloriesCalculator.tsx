import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLanguage } from "@/context/LanguageContext";
import arabicContent from "@/content/arabic";
import englishContent from "@/content/english";

// Validation Schema with Yup
const schema = yup.object().shape({
  age: yup.number()
  .transform((value, originalValue) => (originalValue === "" ? null : value))
    .min(10, "Age must be at least 10")
    .max(100, "Age must be below 100")
    .required("Age is required"),
  height: yup.number()
  .transform((value, originalValue) => (originalValue === "" ? null : value))
    .min(50, "Height must be at least 140 cm")
    .max(250, "Height must be realistic")
    .required("Height is required"),
  weight: yup.number()
  .transform((value, originalValue) => (originalValue === "" ? null : value))
    .min(30, "Weight must be at least 30 kg")
    .max(300, "Weight must be realistic")
    .required("Weight is required"),
  sex: yup.string()
    .oneOf(["male", "female"], "Invalid selection")
    .required("Gender is required"),
  activity: yup.string().required("Activity level is required"),
});
// Type for input fields
type InputField = {
  label: string;
  name: "age" | "height" | "weight";
  placeholder: string;
};


export default function CalorieCalculator() {
  // Use react-hook-form and yup resolver for validation
  const {language} = useLanguage();
  const content = language === "arabic" ? arabicContent : englishContent;
  const inputFields: InputField[] = [
    { label: content.age, name: "age", placeholder: "Years" },
    { label: content.height, name: "height", placeholder: "cm" },
    { label: content.weight, name: "weight", placeholder: "kg" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger, // Add trigger function
  } = useForm({ resolver: yupResolver(schema), mode: "onBlur" });

  const [calories, setCalories] = useState<number | null>(null);

  // Function to calculate daily calories based on BMR and activity level
const calculateCalories = async (data: {
    age: number;
    height: number;
    weight: number;
    sex: "male" | "female";
    activity: string;
}) => {
    // Trigger validation for all fields
    const isValid = await trigger();

    // If form is not valid, stop submission
    if (!isValid) {
        return;
    }

    const { age, height, weight, sex, activity } = data;

    const activityMultiplier: Record<string, number> = {
        inactive: 1.2,
        "somewhat-active": 1.375,
        active: 1.55,
        "very-active": 1.725,
    };

    let bmr;
    if (sex === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const dailyCalories = Math.round(bmr * activityMultiplier[activity]);
    setCalories(dailyCalories);
};

  return (
    <div className="py-4 flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6" style={{ background: "url(/aboutbg.jpeg)", backgroundSize: "cover" }}>
      <h2 className="md:text-6xl text-3xl py-3 font-bold text-[#928c6b] text-center">{content.calorieCalculator}</h2>
      <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit(calculateCalories)} className="space-y-6">
        <div className={`flex gap-6 text-black flex-col md:flex-row ${language == "arabic" ? 'md:flex-row-reverse rtl:flex-row-reverse' : ''}`}>
        {/* Personal Information */}
            <div className=" space-y-4 m-auto">
              <h3 className={(language == "arabic" ? 'text-right flex-row-reverse rtl:flex-row-reverse ' : '') +  "text-lg w-auto font-semibold text-gray-800"}>
                {content.personalInfo}
              </h3>
              {inputFields.map((input) => (
                  <div className="w-auto"  key={input.name}> 
    <div key={input.name} className={`flex flex-row w-auto justify-start items-center ${language == "arabic" ? 'text-right flex-row-reverse rtl:flex-row-reverse' : ''}`}>

                  <label className="text-black w-[80px] font-medium">{input.label}</label>
                  <input
                    type="number"
                    min={10}
                    {...register(input.name)}
                    className="w-[100px] p-2 border placeholder:text-gray-700 border-black rounded-lg focus:ring focus:ring-blue-300"
                    placeholder={input.placeholder}
                    />
                      </div>
                  {errors[input.name as keyof typeof errors] && (
                      <p className="text-red-500 text-sm">{errors[input.name]?.message}</p>
                    )}
                </div>
              ))}

              <div className={"flex flex-col items-start gap-4 " +  (language == "arabic" ? 'text-right flex-row-reverse rtl:flex-row-reverse items-end ' : '')}><div className={"flex gap-4 " + (language == "arabic" ? 'text-right flex-row-reverse rtl:flex-row-reverse  ' : '')}>
                <label className={"text-black  font-medium " + (language == "arabic" ? 'text-right  ' : '')}>{content.gender}</label>
                <div className={(language == "arabic" ? 'text-right flex-row-reverse rtl:flex-row-reverse ' : '') + "flex items-center gap-3"}>
                  <label className={"flex items-center "  +  (language == "arabic" ? 'text-right flex-row-reverse rtl:flex-row-reverse items-end ' : '')}>
                    <input type="radio" {...register("sex")} value="male" className="accent-[#928c6b]" />
                    <span className="mx-2">{content.male}</span>
                  </label>
                  <label className={"flex items-center " +  (language == "arabic" ? 'text-right flex-row-reverse rtl:flex-row-reverse items-end ' : '')}>
                    <input type="radio" {...register("sex")} value="female" className="accent-[#928c6b]" />
                    <span className="mx-2">{content.female}</span>
                  </label>
                </div>
                </div>
                {errors.sex && (
                  <p className="text-red-500 text-sm text-start">{errors.sex.message}</p>
                )}
              </div>
            </div>

            {/* Activity Level */}
            <div className="space-y-4 h-full">
              <h3 className={(language == "arabic" ? 'text-right flex-row-reverse rtl:flex-row-reverse' : '' )+" text-lg font-semibold text-gray-800"}>{content.activityLevel}</h3>
              <div className="flex flex-col h-full justify-between gap-3">
                {content.activities.map((option) => (
                  <label key={option.value} className={(language == "arabic" ? 'text-right flex-row-reverse rtl:flex-row-reverse' : '' )+ " flex items-center  cursor-pointer"}>
                    <input type="radio" {...register("activity")} value={option.value} className="accent-[#928c6b]" />
                    <span className="mx-3">
                      <span className="font-semibold text-gray-800">{option.label}:</span>
                      <span className="text-gray-900"> {option.description}</span>
                    </span>
                  </label>
                ))}
                {errors.activity && (
                  <p className="text-red-500 text-sm">{errors.activity.message}</p>
                )}
              </div>
            </div>
          </div>

          <button type="submit" className="w-full bg-[#928c6b] text-white py-2 rounded-lg  transition">
            Calculate
          </button>

          {/* Show Calories Result */}
          {calories !== null && (
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mt-4">Your estimated daily calorie needs:</h3>
              <p className="text-2xl font-bold text-[#928c6b]">{calories} kcal/day</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}