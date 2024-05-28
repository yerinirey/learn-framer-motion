import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 340px));
  justify-content: center;
  align-content: center;
  gap: 40px;
`;
const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 300px;
  height: 300px;
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
const Box = styled(motion.div)`
  width: 160px;
  height: 160px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const TranslucentBox = styled(Box)`
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
const Circle = styled(motion.div)`
  background-color: white;
  place-self: center;
  height: 54px;
  width: 54px;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const DragBox = styled(Box)`
  width: 90px;
  height: 90px;
  border-radius: 25px;
`;
const Scroll = styled.div`
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
`;
const ScrollBox = styled(Box)`
  position: fixed;
`;
const Svg = styled.svg`
  width: 134px;
  height: 134px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;
const AnimationVars = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 90,
    transition: { type: "spring", bounce: 0.4, delay: 0.3 },
  },
};
const variantsVars = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};
const circleVars = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};
const gestureVars = {
  hover: { scale: 1.1, rotateZ: 90 },
  click: { scale: 1, borderRadius: "50%" },
};
const svgVars = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  end: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      default: {
        duration: 3,
      },
      fill: {
        duration: 0.5,
        delay: 1.5,
      },
    },
  },
};

export default function Home() {
  const dragBoxRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);
  const scrollScale = useTransform(scrollY, [0, 100], [0.8, 1.1]);
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
  return (
    <Wrapper>
      <Container>
        <Box variants={AnimationVars} initial="start" animate={"end"} />
      </Container>
      <Container>
        <TranslucentBox
          className={"variant"}
          variants={variantsVars}
          initial="start"
          animate="end"
        >
          {Array.from({ length: 4 }).map((_, idx) => (
            <Circle key={idx} variants={circleVars} />
          ))}
        </TranslucentBox>
      </Container>
      <Container>
        <Box variants={gestureVars} whileHover="hover" whileTap="click" />
      </Container>
      <Container>
        <TranslucentBox ref={dragBoxRef}>
          <DragBox
            drag
            // dragSnapToOrigin
            dragElastic={0.5}
            dragConstraints={dragBoxRef}
            whileTap="click"
          />
        </TranslucentBox>
      </Container>
      {/*  */}
      <Container onScroll={onScroll} style={{ background: scrollBg }}>
        <Scroll>
          <ScrollBox style={{ scale: scrollScale }} />
        </Scroll>
      </Container>
      <Container>
        <TranslucentBox>
          <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <motion.path
              variants={svgVars}
              initial="start"
              animate="end"
              d="M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"
            />
          </Svg>
        </TranslucentBox>
      </Container>
    </Wrapper>
  );
}
