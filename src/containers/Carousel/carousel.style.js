import styled from "styled-components";

export const StyledFrames = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-color: transparent transparent;
  scrollbar-width: none;
  transition: transform 0.5s;
  transform: translateX(${(props) => -(props.currentPage * 100)}vw);
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  &::-webkit-scrollbar-track {
    display: none;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
    background: transparent;
    border: none;
  }
`;
