import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  padding: 26px;
  
  >button {    
    background: #ff9000;      
    border-radius: 10px;
    border: 0;
    padding: 16px;
    color: #312e38;
    width: 100px;
    font-weight: 500;
    margin-left: auto;
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Content = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  
  
  form {
    text-align: center;    

    h1 {
      margin-bottom: 24px;
      color: #ddd;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129; 
      margin-top: 40px;    
      padding: 16px;
      color: #ddd; 

      & + input {
        margin-left: 8px;
      }
    }
    
    button {
      background: #00ED6B;      
      border-radius: 10px;
      border: 0;
      padding: 16px;
      color: #312e38;
      width: 100px;
      font-weight: 500;
      margin-left: 25px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#00ED6B')};
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
}
`;

export const Albums = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 60px;

  table {
    border-collapse: collapse;
    width: 100%;

    tr, td {
      padding: 8px;
      text-align: center;
      color: #656466;
      border-bottom: 1px solid #ddd;
    }

    > tbody img {
      border-radius: 10px;
    }
  }

`;

export const Button = styled.div`
       
    transition: background-color 0.2s;

    color: #ff0000;
    font-size: 35px;
 
    &:hover {
      color: ${shade(0.2, '#ff0000')};
    }
`;