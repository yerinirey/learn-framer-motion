import styled from "styled-components";
import { motion, spring } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
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
function App() {
  const dragBoxRef = useRef<HTMLDivElement>(null);
  console.log(dragBoxRef);
  return (
    <Wrapper>
      {/* <Box variants={AnimationVars} initial="start" animate="end" /> */}
      {/* <VariantsBox variants={VariantsboxVars} initial="start" animate="end">
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
      </VariantsBox> */}
      {/* <Box variants={gestureVars} whileHover="hover" whileTap="click" /> */}
      <DragBox ref={dragBoxRef}>
        <Box
          drag
          // dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={dragBoxRef}
          variants={dragVars}
          whileTap="click"
        />
      </DragBox>
      <span>.</span>
    </Wrapper>
  );
}

export default App;
