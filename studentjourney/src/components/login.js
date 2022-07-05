import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios";

const LoginDiv = styled.div`
    margin: auto;
    margin-top: 100px;
    height: 500px;
    width: 500px;
    background-color: #F1EFED;
    border-radius: 10px;
    box-shadow: 2px 2px #DBDAD9;
`

const InputDiv = styled.div`
    margin-top: 10px;
    padding: 15px;
`;

const TitleDiv = styled.div`
    margin-top: 40px;
    text-align: center;
    font-size: 60px;
`;

const SignInButtonDiv = styled.div`
    text-align: center;
`

const Login = () => {
    const [userinfo, setUserInfo] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const _username = e.target.username.value;
        const _userpass = e.target.userpass.value;
        const resp = await axios.post("http://localhost:8000/api/login", {
            username: _username, password: _userpass
        })
        console.log(resp)
        setUserInfo(true)
    }

    if (userinfo === false) {
        return (
            <LoginDiv>
                <form onSubmit={handleSubmit} >
                    <TitleDiv>
                        <p>Student Journey</p>
                    </TitleDiv>
                    <InputDiv>
                        <input className="input is-primary" name="username" type="text" placeholder="Username" />
                    </InputDiv>
                    <InputDiv>
                        <input className="input is-primary" name="userpass" type="password" placeholder="Password" />
                    </InputDiv>
                    <SignInButtonDiv>
                        <input className="button is-text is-large" type="submit" value="Sign In" />
                    </SignInButtonDiv>
                </form>
            </LoginDiv>
        )
    } else {
        return (
            <LoginDiv>
                <TitleDiv>Login Success</TitleDiv>
            </LoginDiv>
        )
    }
}

export default Login;