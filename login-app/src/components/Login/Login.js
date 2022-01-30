import React, { useEffect, useReducer, useState, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/AuthContext';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes('@')
    }
  }
  else if (action.type === "INPUT_BLUR") {
    return {
      value: state.value, isValid: state.value.includes('@')
    }
  }
  return {
    value: '',
    isValid: false
  }
}

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6
    }
  } else if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6
    }
  }
  return { value: '', isValid: false }
}

const Login = (props) => {
  const { onLogin } = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null
  })
  const { isValid: emailIsvalid } = emailState;
  const { isValid: passwordIsvalid } = passwordState;

  useEffect(() => {
    setFormIsValid(
      emailIsvalid & passwordIsvalid
    );
  }, [emailIsvalid, passwordIsvalid])

  const emailChangeHandler = (event) => {

    dispatchEmail({ type: "USER_INPUT", val: event.target.value })

  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value })

  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      onLogin(emailState.value, passwordState.value);
    } else if (!emailIsvalid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }

  };



  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>

        <Input
          ref={emailInputRef}
          type='email'
          id='email'
          label='email'
          value={emailState.value}
          isValid={emailIsvalid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler} />

        <Input
          ref={passwordInputRef}
          type='password'
          id='password'
          label='password'
          value={passwordState.value}
          isValid={passwordIsvalid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler} />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
