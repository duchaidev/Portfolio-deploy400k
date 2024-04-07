import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import {useEffect, useState} from "react";
import { lightTheme, mediaQueries } from "./Themes";

import { Design, Develope } from "./AllSvgs";
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
  width: 80vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  ${mediaQueries(50)`
            flex-direction:column;  
            padding:8rem 0;
            height: 20vh;
            &>*:nth-child(5){
              margin-bottom:5rem;
            }
           
  `};
  ${mediaQueries(30)`
           
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
           
  `};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  margin-top: 3rem;

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: 40vh;

  `};

  font-family: "Ubuntu Mono", monospace;

  display: flex;
  flex-direction: column;
  // justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  // justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  --text-color: ${(props) => props.theme.text};
  color: var(--text-color);
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    --text-color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
    font-size: calc(0.8em + 1vw);
  `};

  ${mediaQueries(30)`
    font-size: calc(0.7em + 1vw);
  `};

  ${mediaQueries(25)`
    font-size: calc(0.5em + 1vw);
  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }

  a {
    color: var(--text-color);
  }

  a:hover {
    color: ${(props) => props.theme.body};
  }

  li {
    overflow-wrap: break-word;
  }
`;


const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="light" />
          <PowerButton />
          <SocialIcons theme="light" />
          <ParticlesComponent theme="light" />

          <Main>
            <Title>
              <Design width={40} height={40} /> HOW TO BUY $GOJIRA
            </Title>
            <Description>
              <strong>ADD BASE NETWORK</strong> <br />
              <ul>
                <li>Network Name: Base Mainnet New RPC</li>
                <li>
                  URL:
                  <a href="https://base.llamarpc.com">
                    https://base.llamarpc.com
                  </a>
                </li>
                <li>Chain ID: 8453 Currency </li>
                <li>Symbol: ETH Block explorer </li>
                <li>
                  URL: <a href="https://basescan.org">https://basescan.org</a>
                </li>
              </ul>
            </Description>
          </Main>
          <Main>
            <Title>
              <Develope width={40} height={40} /> Bridge to Base Network
            </Title>
            <Description>
              <ul>
                <li>
                  CEX wallet: Coinbase, Binance or Kraken Official Base Bridge: <br/>
                  <a href="https://bridge.base.org/deposit ">
                    https://bridge.base.org/deposit
                  </a>
                </li>
                <li>
                  Orbiter:
                  <a href="https://www.orbiter.finance/">
                    https://www.orbiter.finance/
                  </a>
                </li>
                <li>
                  Stargate:
                  <a href="https://stargate.finance">
                    https://stargate.finance
                  </a>
                </li>
                <li>LayerSwap: <a href="https://www.layerswap.io/app">https://www.layerswap.io/app</a></li>
              </ul>
            </Description>
          </Main>
          <BigTitle text="How to buy" top="80%" right="20%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default MySkillsPage;
