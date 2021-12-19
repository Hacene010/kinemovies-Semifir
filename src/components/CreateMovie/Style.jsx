import styled from 'styled-components';

const SCreateMovie = styled.form`
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    margin: auto; 

    h2 {
      margin-bottom: 10vh;
    }

    section {
      display: flex;
      justify-content: center;
      width: 100%;

    }

    .firstPart,
    .secondPart {
      display: flex;
      flex-direction: column;
    }

    label {
      width: 30vw;
      display: flex;
      flex-direction: column;
      text-align: left;
      margin: 0.7rem;
      padding: .3rem;
      
      input {
        width: 100%;
        margin: 0.2rem;
        border-radius: 10px;
      }

      span {
        font-size: 1.5rem;
      }
      
      textarea {
        padding:0.4rem;
        height: 6rem;
        border-radius: 10px;
        
      }
    }
  }
  
  input {
      border:none;
      height:2.5rem;
      border-radius:8px;
    }

    .button {
      width: 100px;
      cursor: pointer;

     
      
      &:hover {
        background: #aca9a9;
        transition: .3s;
      }
    }

    @media screen and (max-width: 400px) {
      width: 90vw;

      section {
        flex-direction: column;

        label{
          width: 90%;
        }
      }
       }
  
`;

export default SCreateMovie;
