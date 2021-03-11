/* eslint-disable @typescript-eslint/ban-ts-comment */
import styled from 'styled-components';
import { shade } from 'polished';
// @ts-ignore
import signImage from '../../../assets/sign-image.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #a945ae;
    }
    /* input {
      background-color: #a945ae;
      border-radius: 10px;
      border: 2px solid #a945ae;
      padding: 16px;
      width: 100%;
      color: #fff;
      ::placeholder {
        color: #fff;
      }
      & + input {
        margin-top: 8px;
      }
    } */
    /* button {
      background: #b6ed7e;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      margin-top: 10px;
    } */
    a {
      color: #000;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#000')};
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signImage}) no-repeat;
  background-size: cover;
`;
