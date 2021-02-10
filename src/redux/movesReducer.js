import { CREATE_MOVE } from "./types";

const initialState ={
    moves:[],
};

export const movesReducer = (state = initialState,action) =>{
    switch(action.type){
        case CREATE_MOVE:
            return {...state, moves: state.moves.concat([action.payload])}
        default: return state;
    }
};