import { actionTypes } from "./types"

export const addFriend = (friendName) => {
    return {
        type: actionTypes.ADD_FRIEND,
        payload: friendName
    }
}

export const deleteFriend = (index) => {
    return {
        type: actionTypes.DELETE_FRIEND,
        payload: index
    }
}

export const addFavourite = (index) => {
    return {
        type: actionTypes.ADD_FAVOURITE,
        payload: index
    }
}

export const searchFriend = (name) => {
    return {
        type: actionTypes.SEARCH_FRIEND,
        payload: name
    }
}
