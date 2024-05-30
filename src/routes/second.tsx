import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Grid = styled.div`
  display: grid;
  width: 50vw;
  height: 50vh;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);

  div:first-child {
    grid-column: span 2;
  }
  div:nth-child(3) {
    grid-row: span 2;
  }
  div:last-child {
    grid-column: span 2;
  }
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
export default function Second() {
  const [id, setId] = useState<null | string>(null);
  console.log(id);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4", "5"].map((n) => (
          <Box className={n} onClick={() => setId(n)} key={n} layoutId={n} />
        ))}
      </Grid>
      {id && (
        <AnimatePresence>
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.8)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Box
              id="layout"
              layoutId={id}
              style={{ width: 400, height: 400 }}
            />
          </Overlay>
        </AnimatePresence>
      )}
    </Wrapper>
  );
}
