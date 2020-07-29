import React from 'react';
import Menu from '../../Menu';
import Footer from '../../Footer';
import * as S from './style'

function Template({ children }) {
  return (
    <>
      <Menu />
        <S.Main>
          {children}
        </S.Main>
      <Footer />
    </>
  );
}

export default Template;