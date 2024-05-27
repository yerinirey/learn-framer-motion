import styled from "styled-components";
import {
  motion,
  spring,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  /* height: 200vh; */
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* example for Animation */
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 20%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
// const AnimationVars = {
//   start: { scale: 0 },
//   end: {
//     scale: 1,
//     rotateZ: 90,
//     transition: { type: "spring", bounce: 0.4, delay: 0.3 },
//   },
// };

/* example for Variants */
// const VariantsBox = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   width: 200px;
//   height: 200px;
//   background-color: rgba(255, 255, 255, 0.2);
//   border-radius: 20%;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;
// const Circle = styled(motion.div)`
//   background-color: white;
//   place-self: center;
//   height: 70px;
//   width: 70px;
//   border-radius: 50%;
//   box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
// `;
// const VariantsboxVars = {
//   start: {
//     opacity: 0,
//     scale: 0.5,
//   },
//   end: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       type: "spring",
//       duration: 0.5,
//       bounce: 0.5,
//       delayChildren: 0.2,
//       staggerChildren: 0.1,
//     },
//   },
// };
// const circleVars = {
//   start: {
//     opacity: 0,
//     y: 10,
//   },
//   end: {
//     opacity: 1,
//     y: 0,
//   },
// };

/* example for Gestures */
const gestureVars = {
  hover: { scale: 1.2, rotateZ: 90 },
  click: { scale: 1, borderRadius: "50%" },
};
const DragBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const dragVars = {
  click: { borderRadius: "50%" },
  drag: {},
};

const Svg = styled.svg`
  width: 300px;
  height: 300px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;

function App() {
  // const dragBoxRef = useRef<HTMLDivElement>(null);
  // console.log(dragBoxRef);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-400, 400], [-360, 360]);
  const gradient = useTransform(
    x,
    [-400, 0, 400],
    [
      "linear-gradient(135deg, rgb(0,210,238), rgb(0,83,238))",
      "linear-gradient(135deg, rgb(238,0,153), rgb(221,0,238)",
      "linear-gradient(135deg, rgb(0,238,155), rgb(238,178,0)",
    ]
  );
  const { scrollYProgress } = useScroll();
  const svg = {
    start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
    end: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <Wrapper style={{ background: gradient }}>
      {/* <Box variants={AnimationVars} initial="start" animate="end" /> */}
      {/* <VariantsBox variants={VariantsboxVars} initial="start" animate="end">
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
      </VariantsBox> */}
      {/* <Box variants={gestureVars} whileHover="hover" whileTap="click" /> */}
      {/* <DragBox ref={dragBoxRef}>
        <Box
          drag
          // dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={dragBoxRef}
          variants={dragVars}
          whileTap="click"
        />
      </DragBox> */}
      {/* <Box style={{ x, rotateZ }} drag="x" dragSnapToOrigin /> */}
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <motion.path
          variants={svg}
          initial="start"
          animate="end"
          transition={{
            default: {
              duration: 3,
            },
            fill: {
              duration: 0.5,
              delay: 1.5,
            },
          }}
          d="M320 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L280 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1c-17.5-2.2-30-18.2-27.8-35.7s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C357.3 164 352 146.6 352 128v0V32 12 10.7C352 4.8 356.7 .1 362.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L384 21.3l27.2 36.3L416 64h64l4.8-6.4L512 21.3 524.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C539.3 .1 544 4.8 544 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM432 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"
        />
      </Svg>
    </Wrapper>
  );
}

export default App;
