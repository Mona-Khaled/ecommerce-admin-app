import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import Input from '../../components/UI/input';
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
/**
* @author
* @function Signin
**/

const Signin = (props) => {

  /* useState() is a hook function used to create the state in functional component
  it returns an arr with 2 values 1st is actual value and 2nd is function by 
  which we can set a value */

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);  //get store value using useSelector

  const dispatch = useDispatch();  // hook importd from react-redux



  const userLogin = (e) => {
    /* avoid default behavior of browser.. when click submit instead of reloading 
     the whole page it will execute this login function */

    e.preventDefault();

    const user = {
      email, password
    }
    dispatch(login(user));
  }

  if (auth.authenticate) {   //which is defined in reducers file
    return <Redirect to={'/'} />  //navigate to home page once authenticate is true 

  }
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: '50px' }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin} style={{ marginTop: '80px' }}>
              <Input
                // label="Email"
                placeholder="Enter email"
                value={email}
                type="email"
                // errorMessage="We'll never share your email with anyone else."
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                // label="Password"
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="d-grid gap-2">
                <Button type="submit" variant="outline-info">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )

}
export default Signin