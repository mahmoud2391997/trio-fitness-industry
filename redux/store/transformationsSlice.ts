import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// Define types
interface Transformation {
  id: string;
  transformationImgUrl: string;
  transformationPeriod: string;
}

interface TransformationsState {
  transformations: Transformation[];
  loading: boolean;
  error: string | null;
}

const initialState: TransformationsState = {
  transformations: [],
  loading: false,
  error: null,
};

// Async thunks
export const fetchTransformations = createAsyncThunk(
  "transformations/fetchTransformations",
  async () => {
    const response = await axios.get("/api/transformations");
    console.log(response.data);
    return response.data;
    
  }
);


// Slice
const transformationsSlice = createSlice({
  name: "transformations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch transformations
      .addCase(fetchTransformations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransformations.fulfilled, (state, action: PayloadAction<Transformation[]>) => {
        state.loading = false;
        state.transformations = action.payload;
      })
      .addCase(fetchTransformations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch transformations";
      })
    
  },
});

export default transformationsSlice.reducer;
