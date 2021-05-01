import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Main from './components/main';
import SelectedBeast from './components/selectedBeast';
import jsonData from './assets/data.json';
import MyForm from './components/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =
      {
        data: jsonData,
        show: false,
        details: {},
        numOfHorns: ''
      };

  }
  filterData = (event) => {
    if (this.state.numOfHorns !== 'All') {
      this.setState({
        data: jsonData.filter(animal => animal.horns === Number(this.state.numOfHorns))});
    }
    else{
      this.setState({
        data: jsonData.filter(animal => animal.horns> 0)});
    }
  }
  updateHorns = horns => this.setState({ numOfHorns: horns.target.value });
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
        <MyForm filterData={this.filterData}
          numOfHorns={this.state.numOfHorns}
          updateHorns={this.updateHorns}
          data={this.state.data}
        />
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
