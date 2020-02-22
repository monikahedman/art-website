import React from 'react';
import '../css/App.scss';
import Header from './Header';

export default class App extends React.Component {
  
  render(){
  return (
    <div className="app">
      <Header/>
    </div>
  );
  }
}
