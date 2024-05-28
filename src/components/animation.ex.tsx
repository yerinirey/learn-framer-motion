import { Box } from "../routes/home";

const AnimationVars = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 90,
    transition: { type: "spring", bounce: 0.4, delay: 0.3 },
  },
};

export default function AnimationEx() {
  return <Box variants={AnimationVars} initial="start" animate={"end"} />;
}
