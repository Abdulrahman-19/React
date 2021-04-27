import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card'

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    incCount = () => {
        this.setState(
            {

                count: this.state.count + 1
            }
        );
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} title={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        keyword : {this.props.keyword}
                        </Card.Text>
                        <Card.Text>
                        Horns : {this.props.horns} Horns
                        </Card.Text>
                        <Card.Text>
                        ❤️{this.state.count}
                        </Card.Text>
                        <Button variant="primary" onClick={this.incCount}>Vote</Button>
                    </Card.Body>
                </Card>
                {/* <section>
                    <h2>{this.props.title}</h2>
                    <img onClick={this.incCount} src={this.props.image_url} alt={this.props.title} title={this.props.title}></img>
                    <p>{this.props.description}<br></br>
                    keyword : {this.props.keyword}
                        <br></br>
                    Horns : {this.props.horns} Horns</p>
                    <span>❤️{this.state.count}</span>
                </section> */}



            </div>


        )
    }
}

export default HornedBeast;