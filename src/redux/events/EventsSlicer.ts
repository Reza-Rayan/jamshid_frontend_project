import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.jamshid.app/",
  }),
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => "events", //Get All Events
    }),
    getOneEventById: builder.query({
      query: (id) => `events/${id}`, // Get One Event By ID
    }),
  }),
});

export const { useGetAllEventsQuery, useGetOneEventByIdQuery } = eventsApi;
