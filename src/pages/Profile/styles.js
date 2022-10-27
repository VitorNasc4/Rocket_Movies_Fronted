import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  > div:nth-child(1) {
    padding: 0 120px;
    width: 100%;
    height: 124px;
    background: rgba(255, 133, 155, 0.05);
    display: flex;
    div {
      justify-content: flex-start;
    }
  }
`

export const Avatar = styled.div`
    position: relative;
    margin: -124px auto 32px;
    
    width: 186px;
    height: 186px;
    display: flex;
    justify-content: center;
    > img {
        border-radius: 50%;
        width: 170px;
        height: 170px;
        margin-top: 10px;
    }
    > label {
        width: 48px;
        height: 48px;
        
        background: ${({theme}) => theme.COLORS.PINK};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        cursor: pointer;
        input {
            display:none;
        }
        svg {
            width: 20px;
            height: 20px;
            color: ${({theme}) => theme.COLORS.BACKGROUND_800};;
        }
    }
`

export const Form = styled.form`
  width: 340px;
  
  margin: auto;
  
  >div:nth-child(2) {
    margin-bottom: 24px;
  }
`