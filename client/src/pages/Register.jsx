import styled from "styled-components";
import { useState } from "react";
import { mobile } from "../responsive";
import { register } from "../redux/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userSelector } from "../redux/selectors/userSelector";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Success = styled.p`
  color: green;
  padding: 5px 10px;
  text-align: center;
`;

const Error = styled.p`
  color: red;
  padding: 5px 10px;
  text-align: center;
`;

const Text = styled.p`
  color: green;
  text-align: center;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {registrationStatus, error} = useSelector(userSelector)

  const onRegistration = (e) => {
    e.preventDefault()
    register(dispatch, {username, email, password})
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={onRegistration}>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
        {registrationStatus === 201 && <Success>New Account has been created!</Success>}
        {registrationStatus === 201 && <Link to="/"><Text>Homepage</Text></Link>}
        {error && <Error>Something went wrong...</Error>}
      </Wrapper>
    </Container>
  );
};

export default Register;
