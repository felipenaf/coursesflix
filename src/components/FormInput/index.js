import React from 'react'
import * as S from './style'

const FormInput = (props) => {
    return (
        <S.FormInput>
            <label>
                {props.label}:
            </label>

            <input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            />
        </S.FormInput>
    )
}

export default FormInput;
