import {React,useState} from 'react'
import { Container } from 'react-bootstrap'
import Input from '../../Components/Input/Input'
import Header from '../../Layout/Header/Header'
import './Login.css'
import { requiredValueValidator, minValueValidator, maxValueValidator } from '../../Validator/Rules'
import { useForm } from '../../Hooks/useForm'
import { Link } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
export default function Login() {
  const [formState, onInputHandler] = useForm({
    userName: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    },
  }, false)
  const [isGoogleRecaptchaVerify, setIsGoogleRecaptchaVerify] = useState(false)

  const onChangeHandler = () => {
    setIsGoogleRecaptchaVerify(true)
  }
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
                <button>
                  <Link to='/register'>
                    ثبت نام
                  </Link>
                </button>
              </div>
            </div>
            <div className='login-box-form'>
              <Input element='Input' id='userName' placeholder='نام کاربری یا آدرس ایمیل' className='login-input' type='text' validitation=
                {
                  [
                    requiredValueValidator(),
                    minValueValidator(8),
                    maxValueValidator(18)
                  ]
                }
                onInputHandler={onInputHandler}
              />
              <Input element='Input' id='password' placeholder='رمز عبور' className='login-input' type='text' validitation=
                {
                  [
                    requiredValueValidator(),
                    minValueValidator(8),
                    maxValueValidator(18)
                  ]
                }
                onInputHandler={onInputHandler}
              />
              <ReCAPTCHA sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' onChange={onChangeHandler} />
              <button
                disabled={(!formState.isFormValid || isGoogleRecaptchaVerify)}
                className={(formState.isFormValid && isGoogleRecaptchaVerify) ? 'succes' : 'error'}>ورود</button>
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
