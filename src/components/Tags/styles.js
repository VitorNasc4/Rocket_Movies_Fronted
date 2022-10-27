import styled from "styled-components"

export const Container = styled.div`
  padding: 8px 12px;
  font-size: 12px;
  line-height: 14px;
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  border-radius: 10px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  align-items: center;
  
  > button {
    background-color: transparent;
    border: none;
    margin-left: 8px;
    
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  
`