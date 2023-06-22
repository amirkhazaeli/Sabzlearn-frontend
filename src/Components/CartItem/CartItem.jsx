import {React,useState} from 'react'
import './CartItem.css'
import courseImage from '../../Assets/images/courses/image8.png'
import {Col, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function CartItem() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div className='cart-item'>
      <Row className='cart-item-row'>
        <Col>
        <img src={courseImage} alt="" />
        </Col>
        <Col>
        <div className='cart-item-left'>
          <h1>نام محصول</h1>
          <h3>60000 تومان</h3>
          <button onClick={handleShowModal} >حذف</button>
        </div>
        </Col>
      </Row>
      {/*Delete Item  Modal*/}
      <Modal show={showModal} onHide={handleCloseModal} className='cart-item-modal'>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>آیا از حذف دوره از سبد خرید مطمین هستید؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            خیر
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            بله
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
