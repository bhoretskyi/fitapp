import styled from "styled-components";
export const LaunchScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 241px;
  padding-right: 73px;
  padding-left: 73px;
  padding-bottom: 315px;
  background: linear-gradient(
    to bottom right,
    rgb(253, 253, 141),
    rgb(255, 255, 255),
    rgb(223, 241, 134)
  );
  height: 100%;
`;

export const AppHeroText = styled.h1`
font-family: "Bebas Neue";
font-size: 48px;
font-weight: 400;
line-height: 58px;
letter-spacing: -0.5px;
text-align: center;

`
export const GreenText = styled.span`
color: var(--primary-color);
`

export const LaunchText = styled.p`
font-family: "DM Sans";
font-size: 16px;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.5px;
text-align: center;
`

export const LaunchStartBtn = styled.button`
border-radius: 5px;
padding:  16px 50px ;

background: rgb(25, 25, 25);
color: rgb(255, 255, 255);
font-family: "Bebas Neue";
font-size: 20px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.5px;
text-align: center;
`