import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 124px auto;
  grid-template-areas: 
  "header"
  "content";

  main {
    grid-area: content;
    overflow-y: scroll;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 20px 80px 0;

      h1 {
        font-size: 32px;
        line-height: 42px;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      a {
        width: 200px;
        height: 48px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 10px;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BLACK};

        border-radius: 8px;

        font-size: 16px;
        line-height: 21px;
      }
    }

    section {
      padding: 20px 80px 0;

      
    }
  }
`