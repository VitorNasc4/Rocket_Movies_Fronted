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
 
  >header {
    margin: 20px 80px 0;

    h1 {
      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
      color: ${({ theme }) => theme.COLORS.WHITE};

      margin: 24px 0;
    }

    .title {
      display: flex;
      align-items: center;
      gap: 10px;

      h1 {
        margin-right: 20px;
      }

      svg {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    footer {
      display: flex;
      align-items: center;
      gap: 8px;

      color: ${({ theme }) => theme.COLORS.WHITE};

      img {
        width: 16px;
        height: 16px;

        border-radius: 50px;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
      }

      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }

  section {
    margin: 40px 80px;

    .tags {
      display: flex;
      align-items: center;
      gap: 8px;

      margin: 40px 0;
    }
    
    p {
      font-size: 14px;
      line-height: 20px;
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > footer {
    margin: 40px 80px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    > button {
      width: 25%;
    }
  }

}
`