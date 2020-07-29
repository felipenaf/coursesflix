import React from 'react'
import * as S from './style'
import { Link } from 'react-router-dom';

const Button = () => {
    return (
        <S.Button as={Link} to='/cadastro/categoria'>
            Novo Vídeo
        </S.Button>
    )
}

export default Button;
