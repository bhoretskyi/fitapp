import logo from "../../img/launch_1.png";
import { LaunchScreenContainer, AppHeroText, GreenText, LaunchText, LaunchStartBtn } from "./LaunchcreenStyled";

export const LaunchScreen = () => {
  return (
    <LaunchScreenContainer className="container">
      <img src={logo} alt="img" width={217} hidden />
      <img src={logo} alt="img" width={313} />
      <AppHeroText>
        PRO <GreenText>FITNESS</GreenText>
      </AppHeroText>
      <LaunchText>We train your body to be great and fit.</LaunchText>
      <LaunchStartBtn type="button">Let’s Start</LaunchStartBtn>
    </LaunchScreenContainer>
  );
};
