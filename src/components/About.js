import { Component } from "react";
import User from "./User";
import UserClass from "./Userclass";
import UserContext from "../utils/UserContext";

// const About = () => {
//   return (
//     <div>
//       <h1>Hellllooooo Aakanksha Hereeeeeeeeeeeeee</h1>
//       <h2>I am a Software developer heheheee</h2>
//       <User name={"Aakanksha hehe"} />

//       <UserClass name={"thokare"} location={"mehkar"} />
//     </div>
//   );
// };

// Class Based about compo

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent contructor is called");
  }

  componentDidMount() {
    console.log("parent did mount called");
  }
  render() {
    console.log("parent rendered called");
    return (
      <div>
        <h1>Hellllooooo Aakanksha Hereeeeeeeeeeeeee</h1>

        {/**way of accessing the context in the class based component */}
        <div>
          LoggedIn User:{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>I am a Software developer heheheee</h2>
        <UserClass name={"thokare"} location={"mehkar"} />
      </div>
    );
  }
}

export default About;
