import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import Main from "./components/main";

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ height: "100vh", position: "relative" }}>
          <Layout
            style={{
              background:
                "url(https://images.wallpaperscraft.com/image/camera_photographer_smoke_126548_1280x1024.jpg) center / cover",
            }}
          >
            <Header transparent title="Morgan" style={{ color: "white" }}>
              <Navigation>
                <Link to="/Morgan-Portfolio">Portfolio</Link>
                <Link to="/collection">Collection</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contactme">Contact Me</Link>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/collection">Collection</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contactme">Contact Me</Link>
              </Navigation>
            </Drawer>

            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
