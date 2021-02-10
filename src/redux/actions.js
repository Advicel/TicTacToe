import { CREATE_MOVE } from "./types";

export function createMove(move) {
    return {
        type: CREATE_MOVE,
        payload:move,
    };
}