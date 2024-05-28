import { Box } from "../routes/home";

const gestureVars = {
  hover: { scale: 1.1, rotateZ: 90 },
  click: { scale: 1, borderRadius: "50%" },
};

export default function GesturesEx() {
  return <Box variants={gestureVars} whileHover="hover" whileTap="click" />;
}
