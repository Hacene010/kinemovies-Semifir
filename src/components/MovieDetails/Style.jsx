import styled from 'styled-components';

const SMovieDetails = styled.article`
  font-family: var(--hFont);
  padding: 1rem;
  background: rgb(121, 0, 0);
  background: radial-gradient(
    circle,
    rgba(121, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 78%
  );

  .title {
    color: var(--hColor);
    font-size: 2.5rem;
  }

  .container {
    width: 60vw;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    .attach {
      width: 100%;

      img {
        width: 75%;
        border-radius: 8px;
        box-shadow: 0px 0px 20px 1px rgb(129, 61, 61);
      }
    }

    .infosContainer {
      margin: 2rem;
      width: 70vw;

      h3 {
        display: flex;
        flex-direction: column;
        color: var(--hColor);
        font-size: 2rem;

        span {
          padding: 0.5rem;
          color: var(--pColor);
          font-family: var(--pFont);
          font-size: 1.2rem;
        }
      }

      li {
        margin: 0.3rem;
        list-style-type: none;
      }
    }
  }

  @media screen and (max-width: 500px) {
    padding: 0;

    .container {
      width: 90vw;
      padding: 0;
      flex-direction: column;

      .infosContainer {
        margin: 0;
      }
    }
  }
`;

export default SMovieDetails;
