import React from "react";
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  Card,
} from "react-bootstrap";
import { connect } from "react-redux";
import { addFriend } from "../../state/actions";
import "./FormInputComponent.css";

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendName: "",
    };
  }

  //setting the entered value
  handleChange = (e) => {
    this.setState({
      friendName: e.target.value,
    });
  };

  //Calling the addFriend action creator only if we have a friend name
  addFriend = (e) => {
    e.preventDefault();
    if (this.state.friendName) {
      this.props.addFriend(this.state.friendName);
    }
    //setting the input field to blank after the name is added to the list
    this.setState({
      friendName: "",
    });
  };

  render() {
    return (
      <Card className="formCard">
        <Card.Header>
          Please enter the friend name you wish to add to your friends list
        </Card.Header>
        <Card.Text>
          <Form onSubmit={this.addFriend}>
            <FormGroup className="formGroup">
              <FormControl
                type="text"
                value={this.state.friendName}
                placeholder="Enter the name"
                required
                onChange={this.handleChange}
              />
            </FormGroup>
          </Form>
        </Card.Text>
        <Card.Footer>
          <Button
            type="button"
            className="formButton"
            variant="primary"
            onClick={this.addFriend}
          >
            Add Friend
          </Button>
        </Card.Footer>
      </Card>
    );
  }
}

export default connect(null, { addFriend })(FormInput);
