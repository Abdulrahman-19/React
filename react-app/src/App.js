import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import HornedBeast from './components/HornedBeast';


class App extends React.Component {
  render(){
    return(
    <div>
      <Header/>
      
      <HornedBeast/>
      <Footer/>
    </div>
    )
  };
}

export default App;
