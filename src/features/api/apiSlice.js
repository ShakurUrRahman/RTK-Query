import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000",
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/product"
            }),
        }),
        addProduct: builder.mutation({
            query: (data) => ({
                url: "/product",
                method: "POST",
                body: data
            })
        })
    }),
});

export const { useGetProductsQuery, useAddProductMutation } = productApi;


// the useGetProductsQuery returns an object with many things
// const { data, isError, isLoading, isSuccess } = useGetProductsQuery();

// and useAddProductMutation returns an array with two things
// const [postProduct, result] = useAddProductMutation();
// here postProduct is a function which is will be called at product posting time and result is an object which is same as above one

// const [postProduct, { isError, isSuccess }] = useAddProductMutation();

