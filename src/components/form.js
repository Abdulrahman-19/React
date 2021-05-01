import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class MyForm extends React.Component {
  update = horns => this.props.updateHorns(horns);
  submitForm = (event) => {
    event.preventDefault();
    this.props.filterData(event);
  }

  render() {
    return (
      <Form onSubmit={this.submitForm}>
        <Form.Group controlId="filterHorns">
          <Form.Label> How Many Horns ? </Form.Label>
          <br />
          <Form.Control onChange={this.update} name="horns" as="select" defaultValue={'All'}>
            <option value="All">All</option>
            <option value="1">One horn</option>
            <option value="2">Two horns</option>
            <option value="3">Three horns</option>
            <option value="100">a Hundred horns</option>
          </Form.Control>
          <br />
          <br />
          <Button variant="primary" type="submit">
            Filter By HornsNumber
          </Button>
        </Form.Group>
      </Form>

    );
  }
}

export default MyForm;
