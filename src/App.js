import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import Main from "./components/main";

import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div style={{ height: "100vh", position: "relative" }}>
          <Layout
            style={{
              color: "white",
              background:
                "url(https://png.pngtree.com/thumb_back/fw800/back_pic/03/57/23/1657a053bfefb43.jpg) center / cover",
            }}
          >
            <Header transparent title="Morgan">
              <Navigation>
                <Link to="/Morgan-Portfolio">Portfolio</Link>
                <Link to="/Morgan-Portfolio/collection">Gallery</Link>
                <Link to="/Morgan-Portfolio/aboutme">About Me</Link>
                <Link to="/Morgan-Portfolio/contactme">Contact Me</Link>
              </Navigation>
            </Header>
            <Drawer title="Morgan" style={{ color: "black" }}>
              <Navigation>
                <Link to="/Morgan-Portfolio">Portfolio</Link>
                <Link to="/Morgan-Portfolio/collection">Gallery</Link>
                <Link to="/Morgan-Portfolio/aboutme">About Me</Link>
                <Link to="/Morgan-Portfolio/contactme">Contact Me</Link>
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
