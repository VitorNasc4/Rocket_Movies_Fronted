import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    height: 48px;
    border: 0;
    border-radius: 10px;
    font-weight: 500;

    margin-top: 16px;

    & :disabled {
        opacity: 0.5;
    }
`