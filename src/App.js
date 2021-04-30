import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import SelectedBeast from './components/selectedBeast';
import jsonData from './assets/data.json';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        data: jsonData,
        show: false,
        details: {}
      };

  }
  viewBeast = (beast) => {
    this.setState({
      show: true,
      details: beast
    });
  };
  closeModel = () => {
    this.setState({
      show: false,
      details: {}
    });
  };


  render() {
    return (
      <div>
        < Header />
        <SelectedBeast
          show={this.state.show}
          details={this.state.details}
          close={this.closeModel}
        />
        < Main data={this.state.data} view={this.viewBeast} />
        < Footer />
      </div>
    );
  }
}

export default App;
