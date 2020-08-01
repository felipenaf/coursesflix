import React from 'react'
import * as S from './style'

const FormTextArea = (props) => {
    return (
        <S.FormTextArea>
            <label>
                {props.label}:
            </label>

            <textarea
                name={props.name}
                onChange={props.onChange}
                value={props.value}
            ></textarea>
        </S.FormTextArea>
    )
}

export default FormTextArea;
