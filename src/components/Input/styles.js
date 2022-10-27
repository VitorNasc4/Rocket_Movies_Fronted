import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.GREY_100};

    margin-bottom: 8px;
    border-radius: 10px;

    > SVG {
        margin-left: 16px;
        color: ${({ theme }) => theme.COLORS.GREY_100};
    }
   > input {
        height: 48px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GREY_100};
        }
    }

`