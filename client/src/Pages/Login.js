import { Col,Row,Form,Input } from 'antd'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom"
import {useDispatch} from 'react-redux'
import { userLogin } from '../redux/actions/useraction'

function Login() {
  const dispatch = useDispatch()
  function onFinish(values){
    dispatch(userLogin(values))
    console.log(values)
  }



  return (
    <div className='login'>
      <Row gutter={16} className="d-flex align-items-center">

        <Col lg={16} style={{position:'relative'}}>
          <img 
         data-aos="slide-Right"
         data-aos-duration='1500'
          src='https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'/>  
          <h1 className='login-logo'>AKCARS</h1>        

         </Col>
        <Col lg={8} className='text-left p-5'>

          <Form layout='vertical' className='Login-form p-5'onFinish={onFinish}>
            <h1>Login</h1>
            <hr/>
            <Form.Item name='username' label='Username' rules={[{required: true}]}>
              <Input/>
            </Form.Item>
            <Form.Item name='password' label='Password' rules={[{required: true}]}>
              <Input/>
            </Form.Item>

            <button className='btn1 mt-2 mb=3'>Login</button>
            <hr/>
            <Link to='/register'>Click Here to Register</Link>
        

            </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login