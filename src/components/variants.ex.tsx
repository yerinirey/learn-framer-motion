import styled from "styled-components";
import { TranslucentBox } from "../routes/home";
import { motion } from "framer-motion";

const Circle = styled(motion.div)`
  background-color: white;
  place-self: center;
  height: 54px;
  width: 54px;
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

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
export default function VariantsEx() {
  return (
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
  );
}
