import { createSlice, createAsyncThunk, PayloadAction, createSelector } from "@reduxjs/toolkit";
import axios from 'axios';
import BaseURL from "../../utils/BaseURL";

// Define the type for your event object
interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    max_players: number;
    location: {
        address: string;
    };
    image?: string;
    price: number;
    created_at: string;
    modified_at: string;
    selected_game: string;
    game: string;
}

// Define the type for the state
interface EventState {
    events: Event[]; // Array of events
    status: 'idle' | 'loading' | 'succeeded' | 'failed'; // API call status
    error: string | null; // Error message if the API call fails
}

const initialState: EventState = {
    events: [],
    status: 'idle',
    error: null
};

// Define  thunk action to fetch all events
export const getAllEvents = createAsyncThunk(
    "events/all",
    async () => {
        try {
            const response = await axios.get<Event[]>(`${BaseURL}/events`);
            console.log('Check Response Thunk');
            return response.data;
        } catch (error) {
            console.log("API Get All", error);
            throw error;
        }
    }
);
// End Here

// Create Slicer
const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllEvents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllEvents.fulfilled, (state, action: PayloadAction<Event[]>) => {
                state.status = 'succeeded';
                state.events = action.payload;
            })
            .addCase(getAllEvents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Unknown error';
            });
    },
});
// End Here

// Export the reducer
export const { reducer: eventReducer } = eventSlice;

export default eventSlice;




// Selector to get all events
export const selectAllEvents = createSelector(
    (state) => state.event.events, // Assuming the events slice is named 'events' and it contains 'events' array
    (events) => events
  );

