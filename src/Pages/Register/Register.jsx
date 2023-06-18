import React from 'react'
import { Container } from 'react-bootstrap'
import Input from '../../Components/Input/Input'
import Header from '../../Layout/Header/Header'
import './Register.css'
export default function Regeister() {
  return (
    <>
    <Header />
    <Container fluid='lg'>
       <div className='register-box'>
        <div className='register-wrapper'>
        <div className='register-box-header'>
            <h1>ساخت حساب کاربری </h1>
            <h3>خوشحالیم به جمع ما میپیوندی </h3>
            <div>
              <span>قبلا ثبت نام کرده اید؟</span>
              <button>وارد شوبد</button>
            </div>
          </div>
          <div className='register-box-form'>
            <Input placeholder='نام کاربری   ' className='login-input' type='text'/>
            <Input placeholder='آدرس ایمیل' className='login-input' type='text'/>
            <Input placeholder='رمز عبور'  className='login-input' type='text'/>
            <button>عضویت</button>
          </div>
          <div className='register-box-footer'>
            
          </div>
        </div>
       
       </div>
    </Container>
    </>
  )
}
