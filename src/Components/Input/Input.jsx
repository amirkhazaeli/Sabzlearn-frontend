import React from 'react'
import { useReducer,useEffect } from 'react'
import validator from '../../Validator/Validator'

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.value,
                isValid: validator(action.value, action.validitation)
            }
        default: {
            return state
        }
    }
}

export default function Input(props) {
    const [mainInput, Dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false,
    })

    useEffect(()=>{
        props.onInputHandler(props.id , mainInput.value , mainInput.isValid)
    }, [mainInput.value,props])

    const onChangeHandler = (e) => Dispatch({
            type: 'CHANGE',
            value: e.target.value,
            validitation: props.validitation
        })
    
    return (
        <>
            {
                props.element === 'Input' ? (
                    <input type={props.type}
                        placeholder={props.placeholder}
                        className={`${props.className} ${mainInput.isValid ? 'valid' : 'notValid'}`}
                        onChange={onChangeHandler}
                    />
                ) : (
                    <textarea rows="2" cols="2"></textarea>
                )
            }

        </>

    )
}
