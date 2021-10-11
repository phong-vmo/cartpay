import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;

  .content {
    flex: 2;
  }

  h3 {
    margin: 0;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
  }

  .image {
    flex: 1;
    margin-left: 20px;

    img {
      max-width: 100%;
      object-fit: cover;
    }
  }
`;
