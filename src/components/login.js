import React, { useState } from 'react'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "../App.css"
import  Axios  from 'axios';
import {
  useNavigate
} from "react-router-dom";

function LoginPage() {
    let navigate = useNavigate();
    const[usernameReg,setUsernameReg] = useState('')
    const[passwordReg,setPasswordReg] = useState('')

    const[username,setUsername] = useState('')
    const[password,setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState('');

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg,   
    }).then((response)=> {
        console.log(response);
    });
    };

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,   
    }).then((response)=> {
        if(response.data[0].password === password) {
            navigate('/AdminPanel')
        }else{
            setErrorMessage('Example error message!');
        };
        // if(response === username & response === password){
        //     navigate('/AdminPanel')
        // }else{
            // setLoginStatus(response.data[0].username);
        // }
    });
    };

    return (
        <ThemeProvider
                breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                minBreakpoint="xxs"
                >
            <Container>
                <Row>
                <Col></Col>
                <Col>
                    <h1 className='ms-5'></h1>
                    
                </Col>
                <Col></Col>
                </Row>
                <Row>
                <img src="https://www.mintyfi.com/img/images1.jpg" alt="minty" />
                </Row>
            </Container>

            {/* Login part */}
            <Container>
                <Row className='mt-1'>
                    <Col className='sm-2'></Col>
                    <Col className='sm-8'>
                            <h1>Login</h1>
                            <div className="login mb-3 ms-5 me-5 mt-3" >
                                <h5>Email address</h5>
                                <input className='box' type="text" placeholder="Enter email" onChange={(e)=>{setUsername(e.target.value)}}/>
                            </div>
                        
                    </Col>
                    <Col className='sm-2'></Col>
                </Row>
                <Row>
                    <Col className='sm-2'></Col>
                    <Col className='sm-8'> 
                        <div className="mb-3 ms-5 me-5" >
                                    <h5>Password</h5>
                                    <input className='box1' type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>         
                    </Col>
                    <Col className='sm-2'></Col>  
                </Row>
                <Row className=''> 
                        <Col className='sm-5 pe-5 me-5 buttons'> 
                            <Button onClick={login}>Login</Button>
                        </Col> 
                    </Row>
                    <h1>{errorMessage}</h1>
            </Container>

            {/* Login part end */}

            {/* Register starts Here */}
            <Container>
                <Row className='mt-5'>
                    <Col className='sm-2'></Col>
                    <Col className='sm-8'>
                    <h1>Register Here</h1>
                            <div className="login mb-3 ms-5 me-5 mt-3" >
                                <h5>Email address</h5>
                                <input className='box' type="text" placeholder="Enter email" onChange={(e)=>{setUsernameReg(e.target.value)}}/>
                            </div>
                        
                    </Col>
                    <Col className='sm-2'></Col>
                </Row>
                <Row>
                    <Col className='sm-2'></Col>
                    <Col className='sm-8'> 
                        <div className="mb-3 ms-5 me-5" >
                                    <h5>Password</h5>
                                    <input className='box1' type="password" placeholder="Password" onChange={(e)=>{setPasswordReg(e.target.value)}}/>
                        </div>         
                    </Col>
                    <Col className='sm-2'></Col>  
                </Row>
                <Row className=''> 
                        <Col className='sm-5 pe-5 me-5 buttons'> 
                            <Button onClick={register}>Register</Button>
                        </Col> 
                    </Row>
            </Container>
            <br /><br /><br /> <br />
       </ThemeProvider>
      );
}

export default LoginPage