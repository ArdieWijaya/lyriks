import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set(
                "X-RapidAPI-Key",
                "66042d2c38msh9bbdc5c37ed3870p19627cjsn497ce2a81f7a"
            );

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => "/charts/world" }),
        getSongDetails: builder.query({
            query: ({ songid }) => `/tracks/details?track_id=${songid}`,
        }),
        getRelatedSong: builder.query({
            query: ({ songid }) => `/tracks/related?track_id=${songid}`,
        }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetRelatedSongQuery,
} = shazamCoreApi;
