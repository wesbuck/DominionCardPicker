import React, {Component} from 'react';

import Contacts from './components/contacts';

class App extends Component {

  state = {
    contacts: []
  }


  componentDidMount() {
    fetch('http://api.gameofboards.com/cardset')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

    render() {
      return (
        <Contacts contacts={this.state.contacts} />
      )
    }


/*
  componentDidMount() {
    fetch('http://api.gameofboards.com/cardset/', {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Token 3c62d611c03971498299ca55fb5e6cfc2884d263'
      })
    })
    .then(res => res.json())
    .then((data) => this.setState({ cards: data }))
    .catch(console.log);
  }
*/

}

export default App;
