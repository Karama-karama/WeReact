import React from 'react'; 
import {ButtonToolbar} from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import { Modal} from 'react-bootstrap';
import './modal.styles.scss'; 



class Demo extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        show: false, 
        membres : [ 
            { "name" :" Karama" , 
                "id" : "k"}, 
            { "name" : "Sourour" ,
            "id" : "S"}, 
            { "name" : "Mariem ", 
            "id" : "M"},
            { "name" : "Seif ", 
            "id" : "Se"} 
        ]
      };
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
     }
    
     close() {
      this.setState({ show: false });
     }
     open(size) {
      this.setState({ show: true });
     }
     render() {  
      return (
        
        <div className="modal-container"  role="dialog">
             <Button onClick={this.open} variant="outline-secondary"> {' '}
                liste membre
              </Button>
          
          <Modal full show={this.state.show} onHide={this.close}>
          <ButtonToolbar>
         
            <Modal.Header>
              <Modal.Title ><h1 className = "h1">La liste</h1></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            { this.state.membres.map(membre => 
            <p key ={ membre.id}> { membre.name} </p>) }
             </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close} appearance="secondary">
                Ok
              </Button>
              <Button onClick={this.close} appearance="subtle">
                Cancel
              </Button>
            </Modal.Footer>
            </ButtonToolbar>
          </Modal>

          
        </div>
      );
    }
  }
  export default Demo ; 