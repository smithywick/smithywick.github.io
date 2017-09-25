import React, { Component } from 'react';
import ListItem from './listitem';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class App extends Component {
  constructor() {
    super();
    this.updateData = this.updateData.bind(this);

    this.state = {
      data: false
    }
  }
  updateData() {
    const url = 'something';
    fetch(
      url, {
        url: url,
        headers: {
          Accept: 'application/json;odata=verbose',
        },
        dataType: 'json',
        contentType: 'application/json;odata=verbose',
        method: 'GET',
        credentials: 'same-origin',
      },
    ).then((response) => {
      if (response.status < 200 || response.status >= 300) {
        const error = new Error(response.statusText);
        error.status = response.status;
        console.log(error);
      }
      return response.json();
    })
      .then((data) => {
        this.setState({
          data: data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App" >
        <div className="list">
          <div className="button" onclick={this.updateData}>button </div>
          <div className="list">
            {
              this.state.data
              &&
              this.state.data.map(
                (item) =>
                  <ListItem key={item.id} className="listItem " data={item} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
