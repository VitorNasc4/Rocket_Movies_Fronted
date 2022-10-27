import styled from "styled-components"

export const Container = styled.div`
  padding: 8px 12px;

  border-radius: 10px;

  display: flex;
  align-items: center;

  background: transparent;
  border-radius: 10px;
  border: 2px dashed;

  > input {
    background-color: transparent;
    border: none;

    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    width: 100px;
  }

  > button {
        margin-left: 8px;
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
  
`