import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import Main from "./components/main";

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
                <a href="/">Portfolio</a>
                <a href="/">Collection</a>
                <a href="/">About Me</a>
                <a href="/">Contact Me</a>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="/">Portfolio</a>
                <a href="/">Skills</a>
                <a href="/">About Me</a>
                <a href="/">Contact Me</a>
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
