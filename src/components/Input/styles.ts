/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFielled: boolean;
  isErrored: boolean;
  isSize?: number | string;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 4px 11px;
  color: #f4ede8;
  background-color: #fff;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  border-radius: 7px;
  height: 45px;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      border-width: 1.8px;
    `}
  ${props =>
    props.isFocused &&
    css`
      border-color: #0c359c;
    `}
  ${props =>
    props.isFielled &&
    css`
      border-color: #a945ae;
      svg {
        color: #a945ae;
      }
    `}
    ${props =>
    props.isSize &&
    css`
      height: ${props.isSize};
    `}
  input {
    background: transparent;
    border: 0;
    flex: 1;
    color: #0c359c;
    height: 45px;
    ${props =>
    props.isSize &&
    css`
        height: 35px;
      `}
    &::placeholder {
      color: #0c359c;
    }
  }
  svg {
    margin-right: 18px;
    font-size: 15px;
    color: #000;
    ${props =>
    props.isFielled &&
    css`
     color: #a945ae;
    `}
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;