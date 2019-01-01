import React, { Component } from 'react';
import MyDropzone from './components/MyDropzone.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <hr />

        <h2><b>Who Looks More Alike?</b></h2>
        <h3><em>Load up some of your photos to find out!</em></h3>
        <p><em>No worries, you can load photos with multiple faces.</em></p>

        <hr />

        <div className="row">
          <div className="col">
            <MyDropzone />  
          </div>
        </div>

        <hr />
        
        <p style={{fontSize:10 + 'px'}}><em>Disclaimer: This is for demo for fun only. I don't keep a copy of the images that you load, it stays on your browser. The results shown are all calculated based on AWS Rekognition software and should not be used in any legal or serious matters.</em></p>
        <hr />
      </div>
    );
  }
}

export default App;
