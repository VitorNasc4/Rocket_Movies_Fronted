import styled from "styled-components";

export const Container = styled.textarea`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: none;
  border-radius: 10px;

  padding: 19px 16px;

  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({theme}) => theme.COLORS.WHITE};

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GREY_100};
  }

`