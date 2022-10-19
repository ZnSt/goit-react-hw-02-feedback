import styled from "@emotion/styled";

export const TitleFd = styled.h2`
  color: black;
  font-size: 25px;
`;

export const ListFd = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ItemFd = styled.li``;

export const BtnFd = styled.button`
  background-color: transparent;

  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  padding: 5px;
  width: 60px;

  &:hover {
    background: black;
    color: white;
  }
`;
