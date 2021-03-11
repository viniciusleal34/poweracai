import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #a945ae;
  height: 56px;
  border-radius: 10px;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: ${shade(0.1, '#a945ae')};
  }
`;
