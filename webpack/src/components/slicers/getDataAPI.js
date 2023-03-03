import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create a new createApi function
export const getDataAPI = createApi({
  // Sets the reducerPath name to "getDataAPI"
  reducerPath: "getDataAPI",

  //  Data fetching method 
  baseQuery: fetchBaseQuery({
    // Sets the url for for the API
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  // Created an endpoint object
  endpoints: (builder) => ({
    // Sets the endpoint object function name to getAllUser
    getAllUser: builder.query({
      query: () => ({
        // Adds the endpoint "posts" to the baseUrl where it will get the data from.
        url: "posts",
        // Sets the method to GET, signifying it will be getting a data from the url
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUserQuery } = getDataAPI;