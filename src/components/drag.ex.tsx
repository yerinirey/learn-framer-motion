import styled from "styled-components";
import { TranslucentBox } from "../routes/home";
import { useRef } from "react";
import { motion } from "framer-motion";
const DragBox = styled(motion.div)`
  width: 90px;
  height: 90px;
  border-radius: 25px;
  background-color: white;
`;
export default function DragEx() {
  const dragBoxRef = useRef<HTMLDivElement>(null);
  return (
    <TranslucentBox ref={dragBoxRef}>
      <DragBox
        drag
        // dragSnapToOrigin
        dragElastic={0.5}
        dragConstraints={dragBoxRef}
        whileTap="click"
      />
    </TranslucentBox>
  );
}
