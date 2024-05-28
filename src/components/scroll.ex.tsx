import styled from "styled-components";
// import { Box } from "../routes/home";
import { motion, useTransform } from "framer-motion";

const Scroll = styled.div`
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
`;
const ScrollBox = styled(motion.div)`
  position: fixed;

  width: 160px;
  height: 160px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default function ScrollEx({ scrollY }: any) {
  const scrollScale = useTransform(scrollY, [0, 100], [0.8, 1.1]);
  return (
    <Scroll>
      <ScrollBox style={{ scale: scrollScale }} />
    </Scroll>
  );
}
