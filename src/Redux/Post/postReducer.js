import {ADD_POST, DELETE_POST} from "./postTypes";

const initialSate = {
    listPost: [],
};

export function PostReducer(state = initialSate, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                listPost: [...state.listPost, action.payload],
            };
        case DELETE_POST:
            return {
                ...state,
                listPost: state.listPost.filter(
                    (val) => val.id !== action.payload
                ),
            };
        default:
            return state;
    }
}
