import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface offer {
  offer: {
    english: string;
    arabic: string;
  };
  discount: {
    before: 
    {
      english: string;
      arabic: string;
    };
    after: {
      english: string;
      arabic: string;
    }
  };
}

interface Package {
  _id: string;
  title: {
    english: string;
    arabic: string;
  }
  price: {
    english: string;
    arabic: string;
  }
  details: {
    english: string;
    arabic: string;
  }[];
  offers?: offer[];
}
// Define types
interface PackageState {
  packages: Package[];
  selectedPackage: Package | null;
  loading: boolean;
  error: string | null;
}

const initialState: PackageState = {
  packages: [],
  selectedPackage: null,
  loading: false,
  error: null,
};

// Async thunks
export const fetchPackages = createAsyncThunk(
  "packages/fetchPackages",
  async () => {
    const response = await axios.get("/api/packages");
    console.log(response.data.data);

    return response.data;
  }
);

export const fetchSinglePackage = createAsyncThunk(
  "packages/fetchSinglePackage",
  async (id: string) => {
    console.log(id);

    const response = await axios.get(`/api/packages/${id}`);
    console.log(response.data);

    return response.data;
  }
);

// Slice
const packagesSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    clearSelectedPackage: (state) => {
      state.selectedPackage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all packages
      .addCase(fetchPackages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchPackages.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = false;
          state.packages = action.payload;
        }
      )
      .addCase(fetchPackages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch packages";
      })
      // Fetch single package
      .addCase(fetchSinglePackage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSinglePackage.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.selectedPackage = action.payload;
        }
      )
      .addCase(fetchSinglePackage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch package";
      });
  },
});

export const { clearSelectedPackage } = packagesSlice.actions;
export default packagesSlice.reducer;
