import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  .username {
    font-weight: 700;
    color: #f8eb62;
  }
`;
export const Btn = styled.button`
  padding: 5px 5px;
  font-size: 18px;
  letter-spacing: 0.0275rem;
  background: none;
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
