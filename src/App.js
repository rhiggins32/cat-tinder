import React, { Component } from 'react';
import Header from './Header'
import Cats from './Cats'
import NewCat from './NewCat'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        }
      ]
    }
  }

  render() {
    return (
      <div>
              <Header />
              <Router>
                  <Switch>
                      <Route exact path='/cats' render={(props) => <Cats cats={this.state.cats}/>}/>
                      <Route exact path='/' component={NewCat} />
                  </Switch>
              </Router>
          </div>
    );
  }
}

export default App;