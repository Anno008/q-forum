import { ArrowUp } from "react-feather";
import styled, { useTheme } from "styled-components";
import { RoundButton } from "../atoms";
import { RollInBlurredRight } from "~/components/atoms/Animations";
import { setTestId } from "~/testUtils/setTestId";
import { useState, useEffect } from "react";
import withConsoleLog from "~/decorators/withConsoleLog";

const AnimationContainer = styled.div`
  position: fixed;
  animation: ${RollInBlurredRight.animation} 0.65s ${RollInBlurredRight.timingFunction} 1 both;
  right: 20px;
  bottom: 20px;
`;

type Props = {
  testId?: string;
};

const ScrollToTopButton: React.FC<Props> = ({ testId }) => {
  const theme = useTheme();
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return showButton ? (
    <AnimationContainer>
      <RoundButton {...setTestId(testId)} onClick={scrollToTop}>
        <ArrowUp size={30} color={theme.primaryTextColor} />
      </RoundButton>
    </AnimationContainer>
  ) : null;
};

export default withConsoleLog(ScrollToTopButton);
