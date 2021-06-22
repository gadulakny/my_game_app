import React from "react";

class GamePage extends React.Component {
  state = {};

  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/home");
    }
  }
  render() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      return (
        <div
          id="DetailPage"
          className="text-white pt-16 container mx-auto px-4 bg-center"
          style={{ backgroundImage: `url(${state.image})` }}
        >
          <div className="">
            <div>{state.name}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default GamePage;
