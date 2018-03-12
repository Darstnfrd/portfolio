import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/home';
import About from './components/pages/about';
import Features from './components/pages/features';
import Contact from './components/pages/contact';

//Includes
import './App.css';

class App extends Component {
  render() {

    return (

      <Router>
          <div className="App">

            <Header />

              <Route exact path='/' component={Home} />
              <Route exact path='/About' component={About} />
              <Route exact path='/Features' component={Features} />
              <Route exact path='/Contact' component={Contact} />
            
            <Footer />


          </div>
      </Router>
    );
  }
}

export default App;
