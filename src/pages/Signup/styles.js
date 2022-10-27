import styled from "styled-components";

import backgroundImg from '../../assets/background.jpg'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  
  >div {
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    
    padding: 100px;

    h1 {
      font-weight: 700;
      font-size: 48px;
      line-height: 63px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE}; 
    }

    h2 {
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      color: ${({ theme }) => theme.COLORS.WHITE};

      margin: 48px 0 48px 0;
    }
    
    button {
      margin-bottom: 42px;
    }

    a {
      justify-content: center;
      align-items: center;
    }
  }

`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`