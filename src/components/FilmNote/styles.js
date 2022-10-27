import styled from "styled-components"

import {Link} from "react-router-dom"

export const Container = styled(Link)`
article {
  width: 100%;
  padding: 20px;

  background: rgba(255, 133, 155, 0.05);
  border-radius: 16px;

  margin: 24px 0;

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .grade {
    margin: 8px 0;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  p {
    font-size: 16px;
    line-height: 19px;

    margin: 15px 0;
    max-width: 1000ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  footer {
    display: flex;
    gap: 8px;
    height: 24px;
  }
}
`