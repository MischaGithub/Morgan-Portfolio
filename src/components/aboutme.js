import React, { Component } from "react";

import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import morgan from "../assets/about_morgan.jpg";

class AboutMe extends Component {
  render() {
    return (
      <div className="about-container">
        <Grid className="about-grid">
          <Cell col={6}>
            <h2>Morgan Achmat</h2>
            <img
              src={morgan}
              alt="avatar"
              style={{ minWidth: "300px", height: "400px" }}
            />
            <p>
              I am Morgan Achmat. I'm 15 years old, I'm a grade 10 student. I am
              very artistic and creative. I am also a ballroom and Latin
              American dancer. i Love doing sketch art and I also have a passion
              for special effect makeup.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Connect with me</h2>
            <hr />
            <div className="about-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "1.5em",
                      fontFamily: "Anton",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-instagram aria-hidden" />
                    photo.graphybymorgan
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "1.5em",
                      fontFamily: "Anton",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-whatsapp aria-hidden" />
                    060 415 0135
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "1.5em",
                      fontFamily: "Anton",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-facebook-square aria-hidden" />
                    Morgan Achmat
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "1.5em",
                      fontFamily: "Anton",
                      color: "white",
                    }}
                  >
                    <i className="fa fa-envelope aria-hidden" />
                    morganachmat5@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
