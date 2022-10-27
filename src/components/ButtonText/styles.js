import styled from "styled-components";

import {Link} from "react-router-dom"

export const Container = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: ${({ theme }) => theme.COLORS.PINK};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`