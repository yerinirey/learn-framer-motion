import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import AnimationEx from "../components/animation.ex";
import VariantsEx from "../components/variants.ex";
import GesturesEx from "../components/gestures.ex";
import DragEx from "../components/drag.ex";
import ScrollEx from "../components/scroll.ex";
import PathEx from "../components/path.ex";
import React, { useState } from "react";
import { Refresh } from "../components/refresh";

const Wrapper = styled(motion.div)`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 340px));
  justify-content: center;
  align-content: center;
  gap: 100px;
`;

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 300px;
  height: 300px;
  position: relative;
  &:nth-child(1) {
    background: linear-gradient(135deg, #fd0b8c, #df00e7);
  }
  &:nth-child(2) {
    background: linear-gradient(135deg, #df00e7, #9c11fb);
  }
  &:nth-child(3) {
    background: linear-gradient(135deg, #9c11fb, #6f0ab3);
  }
  &:nth-child(4) {
    background: linear-gradient(135deg, #003dc2c0, #0279a8);
  }
  &:nth-child(5) {
    overflow: auto;
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: white;
      border-radius: 5px;
      min-height: 20px;
    }
  }
  &:nth-child(6) {
    background: linear-gradient(135deg, #00a79e, #009b2e);
  }
`;

export const Box = styled(motion.div)`
  width: 160px;
  height: 160px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
export const TranslucentBox = styled(Box)`
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &.variant {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function Home() {
  const componentsArray = [
    <AnimationEx />,
    <VariantsEx />,
    <GesturesEx />,
    <DragEx />,
    <ScrollEx />,
    <PathEx />,
  ];
  const scrollY = useMotionValue(0);
  const scrollBg = useTransform(
    scrollY,
    [0, 100],
    [
      "linear-gradient(135deg, #0279a8, #086e80)",
      "linear-gradient(135deg, #086e80, #00a79e",
    ]
  );
  const onScroll = (event: any) => {
    const scrollTop = event.target.scrollTop; // 현재 스크롤 위치
    const scrollHeight = event.target.scrollHeight; // 스크롤 가능한 (화면상) 전체 높이
    const clientHeight = event.target.clientHeight; // 요소의 가시영역 높이
    const y = (scrollTop / (scrollHeight - clientHeight)) * 100;
    scrollY.set(y);
  };
  const tmp = Array.from(
    { length: componentsArray.length },
    (_, idx) => idx + 1
  );
  const [refresh, setRefresh] = useState(tmp);
  const onClick = (index: number) => {
    const copy = [...refresh];
    console.log(copy);
    copy[index] *= 1.1;
    setRefresh(copy);
  };
  return (
    <Wrapper>
      {componentsArray.map((component, index) =>
        index !== 4 ? (
          <Container key={refresh[index]}>
            {component}
            {index === 0 || index === 1 || index === 5 ? (
              <Refresh onClick={() => onClick(index)} />
            ) : (
              ""
            )}
          </Container>
        ) : (
          <Container
            key={refresh[index]}
            onScroll={onScroll}
            style={{ background: scrollBg }}
          >
            {React.cloneElement(component, {
              scrollY,
            })}
          </Container>
        )
      )}
    </Wrapper>
  );
}
