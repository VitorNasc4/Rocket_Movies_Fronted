import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BLACK};

    margin-bottom: 8px;
    border-radius: 10px;

    > SVG {
        margin-left: 16px;
        color: ${({ theme }) => theme.COLORS.BLACK};
    }
   > button {
        height: 48px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.BLACK};
        background: transparent;

        border: 0;
    }

`