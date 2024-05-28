import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 0.2rem;
  background-color: #2E4053;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
  font-family: Arial, sans-serif; 
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Uniminuto - Esp. Desarrollo de Software</p>
      <p>Desarrollo A.Web Por Felipe Arias</p>
    </FooterContainer>
  );
};

export default Footer;
