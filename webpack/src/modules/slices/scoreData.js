import { createSlice } from "@reduxjs/toolkit";
import { findIndex } from "lodash";

//Creates a new slice
export const playerDataSlice = createSlice({
    //Sets the slice name to "player"
    name: "player",
    //Creates an initial state
    initialState: {
        //State array for holding the score and player
        players: [],
    },

    //The reducer function
    reducers: {
        //A reducer function for pushing the data from the dispatched data from the Form component of the dashboard folder
        //and the PopularPlayer's GetPlayerData function component
        addPlayers: (state, action) => {
            //Pushes the payload data to the data state 
            state.players.push(action.payload);
        },
        addScores: (state, action)=>{
            const {name} = action.payload;
            const {score} = action.payload;


            const index = findIndex(state.players, function(player){
                return player.Pnm == name;
            });

            let newScore = parseInt(state.players[index].Scrs)+ parseInt(score);
            state.players[index] = {...state.players[index], Scrs: newScore}
        },
    },
})

//Add the addUsers reducer to the playerDataSlice's actions
export const { addPlayers, addScores } = playerDataSlice.actions;

export default playerDataSlice.reducer;