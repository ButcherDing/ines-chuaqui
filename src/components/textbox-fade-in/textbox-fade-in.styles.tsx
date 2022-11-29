import styled, { keyframes } from "styled-components";

const an = keyframes`
  100% { opacity: 1; transform: translate3d(0, 0, 0) }
`;

export const TextSection = styled.section`
  /* width: 70vw; */
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
`;

export const TextStyle = styled.span<{ color: string; delay: number }>`
  animation: ${an} 0.5s ease-out forwards;
  animation-delay: ${(props) => props.delay}ms;
  color: ${(props) => props.color};
  font-size: 2rem;
  line-height: 1.3;
  opacity: 0;
  transform-style: perspective(500px);
  transform: translate3d(-35px, -40px, -150px) rotate3d(1, -1, 0, 35deg);
`;
