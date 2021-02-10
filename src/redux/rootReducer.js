import { combineReducers } from "redux";
import { movesReducer } from "./movesReducer";

export const rootReducer = combineReducers({
    moves:movesReducer,
});
