import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
class SelectedBeast extends React.Component {

  render() {
    console.log(this.props);
    return (
      <>

        <Modal show = {this.props.show} onHide={this.props.close} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.details.title}</Modal.Title>
          </Modal.Header>
          <Card.Img variant="top" src={this.props.details.image_url} />
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.close}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.close}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default SelectedBeast;
