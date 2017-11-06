import React, { Component } from 'react';
import TeamMembers from './components/TeamMembers.js';
import firebase from 'firebase'
import DisplayData from './components/DisplayData.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
      var config = {
          apiKey: "AIzaSyDD2hYj-aDxcsBxEXMJOCeNuip1VQ2Dx9k",
          authDomain: "cse110firebase-e4ff6.firebaseapp.com",
          databaseURL: "https://cse110firebase-e4ff6.firebaseio.com",
          projectId: "cse110firebase-e4ff6",
          storageBucket: "cse110firebase-e4ff6.appspot.com",
          messagingSenderId: "718666261042"
      };
      firebase.initializeApp(config);
  }
  render() {
    return (
      <div>
        <TeamMembers db={firebase}/>
        <DisplayData db={firebase}/>
      </div>
    );
  }
}

export default App;
