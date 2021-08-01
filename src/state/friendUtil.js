export const deleteFriendFromList = (friendsList, index) => {
  return friendsList.filter((friend, i) => i !== index);
};

//mapping through the friendsList and checking if a index of a name matched the index of the fav clicked item and settign the fav field
//to true and sorting on true, if already favourited anf clicked again we unfavourite it
export const addFavFriend = (friendsList, index) => {
  const favList = friendsList.map((friend, i) =>
    i === index ? { ...friend, favourite: !friend.favourite } : friend
  );
  return favList.sort((a, b) => b.favourite - a.favourite);
};


//mapping through the friendsList and checking if a name includes the entered input in search field and if true setting the searched value
//to true and sorting on true
export const searchFriendsFromList = (friendsList, name) => {
  return friendsList
    .sort((a, b) => b.searched - a.searched)
    .map((friend) =>
      friend.name.toLowerCase().includes(name)
        ? { ...friend, searched: true }
        : { ...friend, searched: false }
    );
  //return friendsList.sort((a, b) => b.searched - a.searched);
};
