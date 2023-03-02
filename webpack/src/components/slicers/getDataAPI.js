import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getDataAPI = createApi({
     reducerPath: "getDataAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    getUserById: builder.query({
      query: (id) => {
        console.log("ID", id);
        return {
          url: `posts/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllUserQuery, useGetUserByIdQuery } = getDataAPI;