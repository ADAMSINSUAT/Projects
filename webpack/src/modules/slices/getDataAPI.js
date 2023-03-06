import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create a new createApi function
export const getDataAPI = createApi({
    // Sets the reducerPath name to "getDataAPI"
    reducerPath: "getDataAPI",

    //  Data fetching method 
    baseQuery: fetchBaseQuery({
        // Sets the url for for the API
        baseUrl: "https://livescore6.p.rapidapi.com/",
    }),

    // Created an endpoint object
    endpoints: (builder) => ({
        // Sets the endpoint object function name to getPlayerData
        getPlayerData: builder.query({
            query: () => ({
                headers: {
                    "X-RapidAPI-Key": "6ec69adaa4mshdaa2841ca7fcfadp1668c0jsnca13e2b6bf06",
                    "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
                    "useQueryString": true
                },
                port: null,
                // Adds the endpoint "players/data?player_id=12994" to the baseUrl where it will get the data from.
                url: "/teams/get-player-stats?ID=3339&CompId=65&Stype=cm",
                // Sets the method to GET, signifying it will be getting a data from the url
                method: "GET",
            }),
        }),

        // Sets the endpoint object function name to getPlayerData
        getPlayerPhoto: builder.query({
            query: () => ({
                headers: {
                    'X-RapidAPI-Key': '6ec69adaa4mshdaa2841ca7fcfadp1668c0jsnca13e2b6bf06',
                    'X-RapidAPI-Host': 'sofascores.p.rapidapi.com',
                    "useQueryString": true
                },
                port: null,
                // Adds the endpoint "players/photo?player_id=12994" to the baseUrl where it will get the player's photo from.
                url: "players/photo?player_id=12994",
                // Sets the method to GET, signifying it will be getting a data from the url
                method: "GET",
            }),
        }),
    }),

});

export const { useGetPlayerDataQuery, useGetPlayerPhotoQuery } = getDataAPI;