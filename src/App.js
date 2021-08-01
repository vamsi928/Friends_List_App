import "./App.css";
import FormInput from "./Components/FormInputComponent/FormInputComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container, Card } from "react-bootstrap";
import FriendsList from "./Components/FriendsListComponent/FriendsListComponent";
import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <FormInput />
            {/*Show the Friends list only if we have one */}
            {props.Friends.length > 0 ? (
              <FriendsList />
            ) : (
              <Card className="noFriendCard">
                <Card.Header>
                  <Card.Text>
                    <p>Please add a friend to see the list</p>
                  </Card.Text>
                </Card.Header>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Friends: state.friendReducer.friendsList,
  };
};

export default connect(mapStateToProps, null)(App);
