import { React, useState, useContext } from 'react'
import './CartItemComponent.css'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import formatNumber from '../../Assets/Utils/formatNumber';
import CartContext from '../../Context/CartContext';
import Swal from 'sweetalert';
export default function CartItemComponent({ cartItemData }) {
  const { CartItems, setCartItems } = useContext(CartContext)
  const [showModal, setShowModal] = useState(false);

  const handleSubmitModal = () => { // Delete item from CartContex
    let CartItemsFilter = CartItems.filter((CartItem) => {
      return CartItem.id !== cartItemData.id
    })
    setCartItems(CartItemsFilter)
    handleCloseModal(false)
    Swal({
      title: "محصول از سبد خرید حذف شد",
      icon: "success",
      buttons: {
        confirm: {
          text: "OK",
          value: true,
          visible: true,
          className: "btn btn-primary",
          closeModal: true
        }
      }
    });
  }
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div className='cart-item'>
      <Row className='cart-item-row'>
        <Col>
          <img src={cartItemData.image} alt="" />
        </Col>
        <Col>
          <div className='cart-item-left'>
            <h1>{cartItemData.title}</h1>
            <h3>{formatNumber(cartItemData.price)}</h3>
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
          <Button variant="primary" onClick={handleSubmitModal}>
            بله
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
