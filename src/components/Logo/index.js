import React from 'react'
import * as S from './style'
import LogoImg from '../../assets/img/Logo.png';

const Logo = () => {
    return (
        <a href="/">
            <S.Logo src={LogoImg} alt="CoursesFlix logo"></S.Logo>
        </a>
    )
}

export default Logo;
