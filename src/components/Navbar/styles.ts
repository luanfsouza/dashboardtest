import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  padding: 2rem;
  color: #525f7f;
  background-color: white;
  > div.navLogo {
    width: 120px;
    height: 50px;

    margin: auto;
    margin-bottom: 2rem;
    img {
      height: 100%;
      width: 100%;
    }
  }
  > ul {
    > li {
      margin-bottom: 1.5rem;
      cursor: pointer;
    }
    border-bottom: 3px solid lightgray;
  }
  > div.documentation {
    margin-top: 2rem;
  }
`;
