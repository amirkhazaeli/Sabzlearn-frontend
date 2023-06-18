import React from 'react'
import { Container } from 'react-bootstrap'
import Input from '../../Components/Input/Input'
import Header from '../../Layout/Header/Header'
import './Register.css'
import { requiredValueValidator, minValueValidator, maxValueValidator, emailValueValidator } from '../../Validator/Rules'
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
                <button>وارد شوید</button>
              </div>
            </div>
            <div className='register-box-form'>
              <Input element='Input' placeholder='نام کاربری   ' className='login-input' type='text' validitation=
                {
                  [
                    requiredValueValidator(),
                    minValueValidator(8),
                    maxValueValidator(18)
                  ]
                }
              />
              <Input element='Input' placeholder='آدرس ایمیل' className='login-input' type='text' validitation=
                {
                  [
                    requiredValueValidator(),
                    minValueValidator(10),
                    maxValueValidator(18),
                    emailValueValidator()
                  ]
                }/>
              <Input element='Input' placeholder='رمز عبور' className='login-input' type='password' validitation=
                {
                  [
                    requiredValueValidator(),
                    minValueValidator(4),
                    maxValueValidator(10)
                  ]
                }/>
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
