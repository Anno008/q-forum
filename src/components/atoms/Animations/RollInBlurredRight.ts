import { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    -webkit-transform: translateX(1000px) rotate(720deg);
            transform: translateX(1000px) rotate(720deg);
    -webkit-filter: blur(50px);
            filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
`;

const timingFunction = "cubic-bezier(0.230, 1.000, 0.320, 1.000)";

export default { animation, timingFunction };
