import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 20px;
`;

export const Title = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;

  cursor: pointer;
  color: #000000;
  text-decoration: none;

  &:hover {
    color: grey;
  }
`;
export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
