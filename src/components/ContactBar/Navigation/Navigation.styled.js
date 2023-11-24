import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  padding: 5px 5px;
  font-size: 18px;
  letter-spacing: 0.0275rem;

  text-align: center;
  text-decoration: none;
  outline: none;
  color: ${p => p.theme.colors.white};

  border: none;
  border-radius: 15px;

  width: 80px;
  height: 40px;

  &:hover {
    color: #f8eb62;
  }
`;
