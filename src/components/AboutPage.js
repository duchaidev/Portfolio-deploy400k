import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

import { DarkTheme, mediaQueries } from "./Themes";
import godzillaright from "../assets/Images/godzillaright.png";
import Loading from "../subComponents/Loading";
//Components
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticlesComponent = lazy(() =>
  import("../subComponents/ParticlesComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`;

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 20%;
  right: 0;
  width: 30vw;
  // z-index: 9;
  img {
    width: 100%;
    height: auto;
  }
  ${mediaQueries(50)`
        top: 50%;  
        width: 60vw;
  `};
  ${mediaQueries(30)`
        top: 50%;  
        width: 80vw;
        opacity: 0.5;
  `};
`;
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 48vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  text-align: justify;

  position: absolute;
  left: calc(7rem + 5vw);
  top: 5.5rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  ${mediaQueries(50)`
          width: 60vw;
          height: 60vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
          font-size: calc(0.8rem + 1vw);

  `};
  ${mediaQueries(30)`
          width: 55vw;
          height: 70vh;
          backdrop-filter: none;
          margin-top:2rem;
          text-align: unset;
          transform:translate(-50%,-50%);
          font-size: calc(0.6rem + 1vw);

  `};

  ${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};
`;
const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="dark" />
          <PowerButton />
          <SocialIcons theme="dark" />
          <ParticlesComponent theme="dark" />

          <SpaceMan>
            <img src={godzillaright} alt="godzilla" />
          </SpaceMan>
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
            In the boundless digital world of Base chain. Godzilla $GOJIRA was
            born, inspired by the movie that is currently famous around the
            world, $GOJIRA is nicknamed "The King of Monsters", has become a
            popular culture icon worldwide gender. $GOJIRA an ancient giant sea
            creature, possessing destructive powers, awakened and enhanced by
            radiation with its beautiful design, has become the official
            Godzilla coin, mesmerizing traders and enthusiasts.
            <br />
            Pioneering innovation, Godzilla $GOJIRA symbolizes progress in the
            cryptocurrency space, forging new paths with every transaction. Its
            legend is tied to the history of Base Chain, offering traders
            endless opportunities in the cryptocurrency world.
          </Main>
          <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default AboutPage;
