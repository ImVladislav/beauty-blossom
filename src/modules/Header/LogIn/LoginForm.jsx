import React, { useState } from 'react'
import { FormLavelBloks, Input, Label, ModalText } from '../../../pages/SaleProgramPage/SaleProgramPageStyled';
import { FormLogin, LoginModalText } from './login.styled';
import Button from '../../../shared/components/Button/Button';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/auth/operation';

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isLogined, setIsLogined] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

  const dispatch = useDispatch();
  
  const registerDispatch = () => {
    dispatch(login({ email, password}))
      .then(response => {
        console.log(response);

        if (response.type === "auth/login/fulfilled") {
          
          setIsLogined(true);
        } else {
          setIsLogined(false);
        }
      })
      .catch(error => {
        setIsLogined(false);
      });
  };




    const isPasswordValid = (password) => {
        const trimmedPassword = password.trim();
        return trimmedPassword.length;
    };

    const isEmailValid = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };
    
    const handleSubmit =(e) =>  {
 
    e.preventDefault();

    registerDispatch();
  }; 
    



    return (
        <FormLogin>
          
            <FormLavelBloks>
                <LoginModalText>
                    Пошта
                </LoginModalText>
                <Input
                    type="email"
                    name="email"
                    placeholder="Пошта"
                    className={email.trim() === "" ? "error" : ""}
                    onChange={(e) => {
                        const inputEmail = e.target.value;
                        if (isEmailValid(inputEmail)) {
                            setEmail(inputEmail);
                        }
                    }}
                    required
                />
            </FormLavelBloks>
            <FormLavelBloks>
                <LoginModalText>
                    Пароль
                </LoginModalText>
                <Input 
                    type="password"
                    placeholder="Пароль"
                    className={password.trim() === "" & password.trim().length > 6 ? "error" : ""}
                    onChange={(e) => {
                        const inputPassword = e.target.value;
                        if (isPasswordValid(inputPassword) & inputPassword.length > 6) {
                            setPassword(inputPassword);
                        }
                    }}
                    required
                />
                <LoginModalText
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: "pointer", position: 'absolute', right: '20px'  }}
                >
                    {showPassword ? "🙈" : "👁️"}
                </LoginModalText>

            </FormLavelBloks>
            <Button text={"Увійти"} onSubmit={handleSubmit} />
        </FormLogin>
    );
}

export default LoginForm
