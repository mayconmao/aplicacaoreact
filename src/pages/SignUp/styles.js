import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  width: 100%;  

  img {
    width: 100px;
    height: 100px;
  }
  
  form {
    
    width: 340px;
    text-align: center;    

    h1 {
      margin-bottom: 24px;
    }

    input {
      color: #ddd;
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;     
      padding: 16px;
      width: 100%;
      max-width: 340px;

      & + input {
        margin-top: 8px;
      }
    }
    
    button {
      background: #ff9000;
      height: 46px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      width: 100%;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }
  }
  > a {
    color: #ff9000;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
