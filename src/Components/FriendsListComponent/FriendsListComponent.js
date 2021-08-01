import React from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import "./FriendsListComponent.css";
import { deleteFriend, addFavourite } from "../../state/actions";
import Pagination from "react-js-pagination";
import Search from "../SearchComponent/SearchComponent";
import ModalComponent from "../ModalComponent/ModalComponent";

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      dataLimit: 4,
      showModal: false,
      currentIndex: 0,
    };
  }

  //grabbing the current index on which the delete button was clicked and setting the currentIndex
  onShowModal = (i) => {
    this.setState({ showModal: true });
    console.log(i);
    this.setState({ currentIndex: i });
  };

  //Calling the delteFriend action creator and hiding the modal
  ondeleteFriend = (i) => {
    this.props.deleteFriend(i);
    this.setState({ showModal: false });
  };


  //Calling the addFavourite action creator with the index on which it was clicked
  onaddFavourite = (i) => {
    this.props.addFavourite(i);
  };


  //Changing the activePage 
  handlePageChange = (pageNumber) => {
    this.setState({
      activePage: pageNumber,
    });
  };

  //Hiding the modal on clicking the close button in the modal component
  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    //console.log(this.props.friendsList);
    //Setting the startIndex to the list per page based on the current page number and limit per page(4)
    //Let's say currentPage = 2, startIndex = (2 * 4) - 4 = 4
    const startIndex =
      this.state.activePage * this.state.dataLimit - this.state.dataLimit;
    //EndIndex = 4 + 4 = 8, so the list to be shown on second page is from index 4 to 8
    const endIndex = startIndex + this.state.dataLimit;
    //console.log(startIndex, endIndex);
    //Slicing the actual list as per the indexes to show on the appropriate page
    const slicedFriends = this.props.friendsList.slice(startIndex, endIndex);
    //console.log(slicedFriends);
    //If all items on current page are deleted then change the active page to previous one
    if (slicedFriends.length === 0)
      this.setState({ activePage: this.state.activePage - 1 });
    return (
      <div>
        <Card>
          <Card.Header>Friends List</Card.Header>
          <Search />
          {slicedFriends.map((friend, i) => (
            <Card.Text key={i} className="friendGroup">
              <div className="friendName">
                <h4>{friend.name}</h4>
                <p>is your friend</p>
              </div>
              <div className="iconsGroup">
                <button
                  type="button"
                  onClick={() =>
                    this.onaddFavourite(
                      this.props.friendsList.findIndex(
                        (friends) => friends.name === friend.name
                      )
                    )
                  }
                >
                  <ion-icon
                    name={friend.favourite ? "star" : "star-outline"}
                  ></ion-icon>
                </button>
                <button type="button" onClick={() => this.onShowModal(i)}>
                  <ion-icon name="trash-outline"></ion-icon>
                </button>
              </div>
              {/*passing the appropriate props into the Modal Component to delete a record or close the modal */}
              <ModalComponent
                showModal={this.state.showModal}
                name={
                  slicedFriends.length > 0
                    ? slicedFriends[this.state.currentIndex].name
                    : ""
                }
                clickModalButton={() =>
                  this.ondeleteFriend(this.state.currentIndex)
                }
                hideModal={this.hideModal}
              />
            </Card.Text>
          ))}

          {this.props.friendsList.length >= 4 ? (
            <Card.Footer>
              {" "}
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={4}
                totalItemsCount={this.props.friendsList.length}
                pageRangeDisplayed={this.state.activePage + 1}
                onChange={this.handlePageChange}
              />
            </Card.Footer>
          ) : (
            ""
          )}
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    friendsList: state.friendReducer.friendsList,
  };
};

export default connect(mapStateToProps, { deleteFriend, addFavourite })(
  FriendsList
);
