import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  entry: (back: boolean) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: { duration: 1 },
  }),
};

export default function Second() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlz = async () => {
    await setBack(false);
    setVisible((p) => (p === 10 ? 10 : p + 1));
  };
  const prevPlz = async () => {
    await setBack(true);
    setVisible((p) => (p === 1 ? 1 : p - 1));
  };
  console.log(visible);
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={box}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlz}>Next</button>
      <button onClick={prevPlz}>Prev</button>
    </Wrapper>
  );
}
