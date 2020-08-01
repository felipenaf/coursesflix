import React from 'react'
import * as S from './style'
import LogoImg from '../../assets/img/Logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/'>
            <S.Logo src={LogoImg} alt="CoursesFlix logo"></S.Logo>
        </Link>
    )
}

export default Logo;
