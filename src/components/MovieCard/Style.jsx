import styled from 'styled-components';

const SMovieCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  margin: 1rem;
  padding: 0.9rem;
  background: #0c0b0b;
  font-family: var(--hFont);
  border-radius: 10px;
  box-shadow: 0px 0px 20px 1px rgba(138, 133, 133, 0.86);

  &:hover {
    transition: 0.3s;
    box-shadow: 1px 5px 10px 0px rgba(138, 133, 133, 0.5);
  }

  a {
    text-decoration: none;
  }

  .titleAttach {
    height: 85%;

    h2 {
      width: 100%;
      text-overflow: ellipsis;
      color: var(--hColor);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 2.5rem;
    }

    img {
      border-radius: 7px;
      width: 100%;
      height: 100%;
    }
  }

  .infos {
    display: flex;
    justify-content: space-around;
    align-items: center;

    h3 {
      width: 50%;
      font-size: 1.5rem;
      color: var(--hColor);

      span {
        color: var(--pColor);
        font-size: 1rem;
        font-family: var(--pFont);
      }
    }

    button {
      cursor: pointer;
      border: none;
      border-radius: 50%;
      width: 60px;
      height: 50px;

      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export default SMovieCard;
