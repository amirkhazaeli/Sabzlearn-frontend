import React from 'react'
import { Container } from 'react-bootstrap'
import Input from '../../Components/Input/Input'
import Header from '../../Layout/Header/Header'
import './Login.css'
export default function Login() {
  return (
    <>
    <Header />
    <Container fluid='lg'>
       <div className='login-box'>
        <div className='login-wrapper'>
        <div className='login-box-header'>
            <h1>ورود حساب کاربری</h1>
            <h3>خوشحالیم دوباره میبینیمت (:</h3>
            <div>
              <span>کاربر جدید هستید؟</span>
              <button>ثبت نام</button>
            </div>
          </div>
          <div className='login-box-form'>
            <Input placeholder='نام کاربری یا آدرس ایمیل' className='login-input' type='text'/>
            <Input placeholder='رمز عبور'  className='login-input' type='text'/>
            <button>ورود</button>
            <h3>رمز عبور را فراموش کرده اید؟</h3>
          </div>
          <div className='login-box-footer'>
            
          </div>
        </div>
       
       </div>
    </Container>
    </>
  )
}
