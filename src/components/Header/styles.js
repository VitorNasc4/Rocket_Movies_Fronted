import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  width: 100%;
  height: 124px;

  padding: 0 70px;

  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  >a {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  width: 180px;
  height: 70px;

  display: flex;
  justify-content: center;
  gap: 9px;

  >div {
    width: 160px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    a:nth-child(1) {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
    }

    a:nth-child(2) {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 14px;
      line-height: 18px;
    }

  }
  >img {
    width: 64px;
    height: 64px;

    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 35px;
  }
`