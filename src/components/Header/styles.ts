import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: max-content;
  background-color: #232d4d;
  /* background-color: #26304f; */
  color: white;
  > nav > ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1rem 3rem;
    > li {
      display: flex;
      align-items: center;
      > img {
        margin-right: 1rem;
      }
    }
  }
  > div.containerFluid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding: 6rem 2rem;
    > div.bodyCard {
      color: black;
      min-width: 300px;
      background-color: white;
      padding: 1.5rem;
      border-radius: 8px;
    }
    @media (max-width: 1640px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  }
`;
