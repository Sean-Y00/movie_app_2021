import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="about__container">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <br></br>

          <span>{location.state.summary}</span>
          <span>{location.state.title}</span>
        </div>
      );
      //      <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;
