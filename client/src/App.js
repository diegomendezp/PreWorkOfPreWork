import React, { Component } from 'react';
import './App.css';
import { Variables } from './Components/variables';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import contents from './contents.json'
import { Intro } from './Components/intro';
import { NumbersAndExpressions } from './Components/numbersAndExpresions';
import { Strings } from './Components/strings';


export default class App extends Component{

displayLinks(){
  return contents.map((e, i) => <Link key={i} to={`/${e.content.replace(/\s/g, "")}`}>{`${e.content}`}</Link>
  )
}


 render(){
    return (

      <Router>
        <div>
          <div>
            {this.displayLinks()}
          </div>
          <div>
            <Switch>
              <Route exact path={`/`} component={Intro} />
              <Route path={`/Introduction`} component={Intro} />
              <Route path={`/Variables`} component={Variables} />
              <Route path={`/NumbersExpressionsandEvaluations`} component={NumbersAndExpressions} />
              <Route path={`/Strings`} component={Strings} />
            </Switch>
          </div>
        </div>
      </Router>
    
    );
    }
}


