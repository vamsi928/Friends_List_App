import { actionTypes } from "./types";
import {
  deleteFriendFromList,
  addFavFriend,
  searchFriendsFromList,
} from "./friendUtil";

const initialState = {
  friendsList: [],
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FRIEND:
      return {
        ...state,
        friendsList: [
          ...state.friendsList,
          { name: action.payload, favourite: false, searched: false },
        ],
      };
    case actionTypes.DELETE_FRIEND:
      return {
        ...state,
        friendsList: deleteFriendFromList(state.friendsList, action.payload),
      };
    case actionTypes.ADD_FAVOURITE:
      return {
        ...state,
        friendsList: addFavFriend(state.friendsList, action.payload),
      };
    case actionTypes.SEARCH_FRIEND:
      return {
        ...state,
        friendsList: searchFriendsFromList(state.friendsList, action.payload),
      };
    default:
      return state;
  }
};

export default friendReducer;
