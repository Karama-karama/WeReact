import React from 'react'; 
import {ButtonToolbar, } from 'react-bootstrap';
import { Button} from 'react-bootstrap';
import { Modal} from 'react-bootstrap';
import './ajout-membre.styles.scss'; 
import FormInput from '../form-input/form-input-component';
import Dropdown from '../drop-down-button/drop-down-btn-component';




class AjoutMembre extends React.Component {
     constructor(props) {
      super(props);
      this.state = {
        show: false, 
       
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
                Ajouter un membre
              </Button>
          
          <Modal full show={this.state.show} onHide={this.close}>
          <ButtonToolbar>
           
            <Modal.Header>
              <Modal.Title ><h1 className = "h1">Ajouter un membre</h1></Modal.Title>
            </Modal.Header>
                
               <Modal.Body>
               <FormInput 
               name ='name'
               type= 'text'
               value= { this.state.text}
               handleChange={this.handleChange}
               label = "Nom & Prénom"
               required
               />
               <FormInput 
               name ='email'
               type= 'email'
               value= { this.state.email}
               handleChange={this.handleChange}
               label = "Email"
               required
               />
               <FormInput 
               name ='email'
               type= 'email'
               value= { this.state.email}
               handleChange={this.handleChange}
               label = "Confirmation email"
               required
               />
               <FormInput 
               name ='pseudo'
               type= 'text'
               value= { this.state.text}
               handleChange={this.handleChange}
               label = "Pseudo"
               required
               />


              <Dropdown  
                  title="Selectionner une équipe"
                  list={this.state.team}
                  toggleItem={this.toggleSelected} 
                  />

            
               </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.close} appearance="secondary">
                Ajouter
              </Button>
            </Modal.Footer>
            </ButtonToolbar>
          </Modal>

          
        </div>
      );
    }
  }
  export default AjoutMembre ; 