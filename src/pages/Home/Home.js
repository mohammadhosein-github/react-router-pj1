import React, { Component } from "react";
import BgVideo from "../../media/homepage_background.mp4";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Loading from "../Loading/Loading";

function demoAsyncCall() {
  return new Promise(resolve => setTimeout(() => resolve(), 1500));
}

export class Home extends Component {
  state = {
    play_video: false,
    transition: false,
    loading: true
  };
  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }

  handle_video = () => {
    this.refs.bgv.play();
    this.setState({
      transition: true
    });
    setTimeout(() => {
      this.setState({
        play_video: !this.state.play_video
      });
    }, 1200);
  };
  render() {
    const { loading } = this.state;

    if (loading) {
      return <Loading />;
    }
    return (
      <div className="home-page">
        <Navbar />
        <video
          ref="bgv"
          src={BgVideo}
          className={
            this.state.play_video === false
              ? "homepage-video right"
              : "homepage-video left"
          }
        ></video>
        <div
          className={
            this.state.transition === false
              ? "text-area1"
              : "text-area1 hidden-area"
          }
        >
          <h1>LDABP</h1>
          <p>Limitless Development of Artificial Body Parts</p>
          <div className="what-we-do-btn">
            <button onClick={this.handle_video}>what we do</button>
          </div>
        </div>
        <div
          className={
            this.state.transition === false
              ? "text-area2"
              : "text-area2 show-area"
          }
        >
          <h3>we're trying to build a bright future for human kind</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            laudantium facere aliquam fugit, asperiores tempore culpa
            voluptatum. Nobis, enim illum! Minus quaerat illo ratione amet
            delectus eius in atque! Nisi nemo hic enim iure harum voluptatum
            magnam. Vitae, quibusdam sint voluptatem laboriosam temporibus ea
            repellat.
          </p>
          <Link to="/achievements" className="my-link achievements-btn">
            our achievements so far ...
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
