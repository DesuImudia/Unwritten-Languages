import React from 'react';
import logo from './logo.svg';
import Form from './form.jsx';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      thePronunciation: 'hi',
      theTranslation: 'hi',
      theLanguage: 'hi',
      theCountry: 'hi'
    };

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });


  }
  handleSubmit(event) {
    alert("you submitted you bitch!!!");
    event.preventDefault();
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
}


render() {

  return (
    <div className="container">
      <Form formResponse={this.state.thePronunciation, this.state.theTranslation, this.state.theLanguage, this.state.theCountry}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit} />
    </div>
  );
}
}

export default App;
