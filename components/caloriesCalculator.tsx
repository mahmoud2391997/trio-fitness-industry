import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const inputFields: InputField[] = [
  { label: "Age", name: "age", placeholder: "Years" },
  { label: "Height", name: "height", placeholder: "cm" },
  { label: "Weight", name: "weight", placeholder: "kg" },
];

export default function CalorieCalculator() {
  // Use react-hook-form and yup resolver for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger, // Add trigger function
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

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
      <h2 className="md:text-6xl text-3xl py-3 font-bold text-[#928c6b] text-center">Calorie Calculator</h2>
      <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit(calculateCalories)} className="space-y-6">
          <div className="flex flex-wrap md:flex-nowrap gap-6">
            {/* Personal Information */}
            <div className="w-[250px] space-y-4 m-auto">
              <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
              {inputFields.map((input) => (
                  <div className="w-full" key={input.name}> 
    <div key={input.name} className="flex flex-row w-full justify-start items-center ">

                  <label className="text-gray-700 w-[80px] font-medium">{input.label}</label>
                  <input
                    type="number"
                    {...register(input.name)}
                    className="w-[100px] p-2 border rounded-lg focus:ring focus:ring-blue-300"
                    placeholder={input.placeholder}
                    />
                      </div>
                  {errors[input.name as keyof typeof errors] && (
                      <p className="text-red-500 text-sm">{errors[input.name]?.message}</p>
                    )}
                </div>
              ))}

              <div className="flex flex-col items-start gap-4 "><div className="flex">
                <label className="text-gray-700 mr-3 font-medium">Gender</label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center space-x-2">
                    <input type="radio" {...register("sex")} value="male" className="accent-[#928c6b]" />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" {...register("sex")} value="female" className="accent-[#928c6b]" />
                    <span>Female</span>
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
              <h3 className="text-lg font-semibold text-gray-800">Activity Level</h3>
              <div className="flex flex-col h-full justify-between gap-3">
                {[{ label: "Inactive", value: "inactive", description: "Never or rarely include physical activity in your day." },
                  { label: "Somewhat active", value: "somewhat-active", description: "Include light or moderate activity about 2-3 times a week." },
                  { label: "Active", value: "active", description: "Include at least 30 min of moderate activity most days or 20 min of vigorous activity 3 times a week." },
                  { label: "Very active", value: "very-active", description: "Include large amounts of moderate or vigorous activity in your day." }].map((option) => (
                  <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" {...register("activity")} value={option.value} className="accent-[#928c6b]" />
                    <span>
                      <span className="font-semibold text-gray-800">{option.label}:</span>
                      <span className="text-gray-600"> {option.description}</span>
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