import React, { Component } from "react";
import "./App.css";
import { Variables } from "./Components/variables";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import contents from "./contents.json";
import { Intro } from "./Components/intro";
import { NumbersAndExpressions } from "./Components/numbersAndExpresions";
import { Strings } from "./Components/strings";
import { Booleans } from "./Components/boolean";
import { arrays } from "./Components/arrays";
import { loops } from "./Components/loops";
import { objects } from "./Components/objects";

import { elastic as Menu } from "react-burger-menu";
import { areYouReady } from "./Components/areYouReady";

export default class App extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  scrollUp() {
    window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  }

  displayLinks() {
    return contents.map((e, i) => (
      <li>
        <Link
          onClick={() => this.scrollUp()}
          key={i}
          to={`/${e.content.replace(/\s/g, "")}`}
        >{`${e.content}`}</Link>
      </li>
    ));
  }

  render() {
    return (
      <Router>
        <div id="outer-container">
          <Menu
            right
            isOpen={false}
            customBurgerIcon={<img src="./img/if_menu-alt_134216.png" />}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          >
            {this.displayLinks()}
          </Menu>
          <div id="page-wrap">
            <div className="list">{this.displayLinks()}</div>
            <div>
              <Switch>
                <Route exact path={`/`} component={Intro} />
                <Route path={`/Introduction`} component={Intro} />
                <Route path={`/Variables`} component={Variables} />
                <Route
                  path={`/NumbersExpressionsandEvaluations`}
                  component={NumbersAndExpressions}
                />
                <Route path={`/Strings`} component={Strings} />
                <Route
                  path={`/BooleansandConditionalStatements`}
                  component={Booleans}
                />
                <Route path={`/arrays`} component={arrays} />
                <Route path={`/loops`} component={loops} />
                <Route path={`/objects`} component={objects} />
                <Route path={`/areyouready`} component={areYouReady} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
