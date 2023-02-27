import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: () => "/product",
        }),
    }),
});