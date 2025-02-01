import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Review {
    id: number;
    reviewImgUrl: string;
}

interface ReviewsState {
    reviews: Review[];
    loading: boolean;
    error: string | null;
}

const initialState: ReviewsState = {
    reviews: [],
    loading: false,
    error: null,
};

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
    const response = await axios.get<Review[]>('/api/reviews');
    console.log(response.data);
    
    return response.data;
});

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.reviews = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch reviews';
            });
    },
});

export default reviewsSlice.reducer;