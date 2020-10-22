import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/header'
import Footer from './components/footer'
import RedirectComponent from './components/redirect'

const Routing = () => {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/:id" component={RedirectComponent} />
      </Switch>
      <Footer/>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

