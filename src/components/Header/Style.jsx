import styled from 'styled-components';

const SHeader = styled.header`
  position: sticky;
  top: 0px;
  font-family: var(--hFont);
  text-align: center;
  padding: 0.3rem;
  box-shadow: 0px 6px 21px 0px rgb(105, 1, 1);
  background: rgb(139, 0, 0);
  background: radial-gradient(
    circle,
    rgba(139, 0, 0, 1) 8%,
    rgba(0, 0, 0, 1) 100%
  );

  h1 {
    color: var(--hColor);
    width: 200px;
    font-size: 3rem;
    margin: auto;
  }
  .link {
  }

  img {
    background: #f5f5f5;
    width: 30px;
    border-radius: 50%;
  }
`;

export default SHeader;
