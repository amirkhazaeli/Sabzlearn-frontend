import React from 'react'
import { Container } from 'react-bootstrap'
import Input from '../../Components/Input/Input'
import Header from '../../Layout/Header/Header'
import './Register.css'
import { requiredValueValidator, minValueValidator, maxValueValidator, emailValueValidator } from '../../Validator/Rules';
import {useForm} from '../../Hooks/useForm'
import { Link } from 'react-router-dom'
export default function Regeister() {
  const [formState, onInputHandler] = useForm({
    userName: {
      value: '',
      isValid: false
    },
    email: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    },
  }, false)
  console.log(formState);
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
                <button> 
                <Link to='/login'>
                 وارد شوید
                </Link>
              </button>
              </div>
            </div>
            <div className='register-box-form'>
              <Input element='Input' id='userName' placeholder='نام کاربری   ' className='register-input' type='text' validitation=
                {
                  [
                    requiredValueValidator(),
                    minValueValidator(8),
                    maxValueValidator(18)
                  ]
                }
                onInputHandler={onInputHandler}
              />
              <Input element='Input' id='email' placeholder='آدرس ایمیل' className='register-input' type='text' validitation=
                {
                  [
                    requiredValueValidator(),
                    minValueValidator(10),
                    maxValueValidator(18),
                    emailValueValidator()
                  ]
                } 
                onInputHandler={onInputHandler}
                />
              <Input element='Input' id='password' placeholder='رمز عبور' className='register-input' type='password' validitation=
                {
                  [
                    requiredValueValidator(),
                    minValueValidator(4),
                    maxValueValidator(10)
                  ]
                }
                onInputHandler={onInputHandler}
                />
              <button
              disabled={!formState.isFormValid}
              className={formState.isFormValid ? 'succes' : 'error'}
              >عضویت</button>
            </div>
            <div className='register-box-footer'>

            </div>
          </div>

        </div>
      </Container>
    </>
  )
}
