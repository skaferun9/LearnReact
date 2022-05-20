import { useState, useReducer } from 'react';


const initialTnputState = {
    value: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched }
    }
    if (action.type === 'BLUR') {
        return { isTouched: true, value: state.value }
    }
    if (action.type === 'RESET') {
        return { isTouched: false, value: '' }
    }
    return inputStateReducer;
}

const useForm = (validator) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialTnputState)

    const validatedValue = validator(inputState.value);

    const hasError = !validatedValue && inputState.isTouched

    const onBlurHandler = (event) => {
        dispatch({ type: 'BLUR' })
    }

    const onValueChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value })
    }


    const reset = () => {
        dispatch({ type: 'RESET' })
    }

    return {
        value: inputState.value,
        isValid: validatedValue,
        hasError,
        onBlurHandler,
        onValueChangeHandler,
        reset

    }
}


export default useForm;