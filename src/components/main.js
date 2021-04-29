import React from 'react';
import HornedBeast from './HornedBeast';
import jsonData from '../assets/data.json';
import CardColumns from 'react-bootstrap/CardColumns';



class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: jsonData,

    };

  }
  render() {

    return (
      <CardColumns>

        {this.state.data.map(entity => {
          return (

            <div>

              < HornedBeast title={entity.title}
                image_url={entity.image_url}
                description={entity.description}
                keyword={entity.keyword}
                horns={entity.horns} />

            </div>


          );
        })}
      </CardColumns>
    );
  }
}
export default Main;
