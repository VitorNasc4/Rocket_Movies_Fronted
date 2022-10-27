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
    padding: 20px 80px 0;

    grid-area: content;
    overflow-y: scroll;
    

    >.newFilm {
      div {
        justify-content: flex-start;
      }

      h1 {
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin: 20px 0 30px;
      }

      section {
        display: flex;
        flex-direction: row;
        gap: 30px
      }

    }
    
    .tags {
      h2 {
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    
        margin: 30px 0 24px;
      }

      .Tagbackground {
        width: 100%;
        height: 56px;
        padding: 12px;

        background-color: ${({ theme }) => theme.COLORS.BLACK};

        border-radius: 8px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 24px;
      }
    }

    .buttons {
      margin: 30px 0 90px;

      display: flex;
      flex-direction: row;
      gap: 30px
    }

    #buttonOne {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`