import React from "react";
import { FormControl, FormGroup, Form } from "react-bootstrap";
import "./SearchComponent.css";
import { connect } from "react-redux";
import { searchFriend } from "../../state/actions";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendToSearch: "",
    };
  }

  handleSearch = async (e) => {
    await this.setState({ friendToSearch: e.target.value });
    //calling the searchFriend action creator with the input entered in the search field by converting to lowercase
    return this.state.friendToSearch
      ? this.props.searchFriend(this.state.friendToSearch.toLowerCase())
      : "";
  };

  render() {
    return (
      <Form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Search your friends list"
            onChange={this.handleSearch}
          ></FormControl>
        </FormGroup>
      </Form>
    );
  }
}

export default connect(null, { searchFriend })(Search);
