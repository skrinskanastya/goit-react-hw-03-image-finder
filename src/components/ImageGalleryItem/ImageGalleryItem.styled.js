import styled from 'styled-components';
export const StyledItem = styled.li`
  width: calc((100% - 10px) / 4);
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  image {
    width: 100%;
    height: 260px;
    object-fit: cover;
  }
`;
