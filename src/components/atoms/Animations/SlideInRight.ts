import { keyframes } from "styled-components";

const animation = keyframes`
    0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const timingFunction = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";

export default { animation, timingFunction };
