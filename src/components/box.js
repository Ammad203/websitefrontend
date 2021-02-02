import { Modal, Button, ToggleButton } from 'react-bootstrap';
import { useState } from 'react';
import Login from '../containers/Login';
import Register from '../containers/Register';

function Example() {
      
      const [show, setShow] = useState(true);
    
      const handleClose = () => setShow(false);
      
    
      return (
        <div>
          <Modal show={show} onHide={handleClose}>
           
            <Register />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
    
export default Example;