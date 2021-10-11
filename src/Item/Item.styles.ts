import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-height: 250px;
    object-fit: cover;
  }

  & > div {
    padding: 0 10px;

    @media screen and (min-width: 640px) {
      padding: 0;
    }
  }

  button {
    width: 100%;
  }
`;
