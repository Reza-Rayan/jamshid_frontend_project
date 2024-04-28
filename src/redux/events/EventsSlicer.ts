import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.jamshid.app/",
  }),
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => "events",
    }),
  }),
});

export const { useGetAllEventsQuery } = eventsApi;
