import { Link, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding: 20px 100px;
`;
const Button = styled(Link)`
  font-size: 26px;
  color: whitesmoke;
  padding: 8px 10px;
  border-radius: 10px;
  &.active {
    background-color: #a7912f;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
export default function Header() {
  const location = useLocation();
  return (
    <>
      <Container>
        <Button to="/" className={location.pathname === "/" ? "active" : ""}>
          Motions Example
        </Button>
        <Button to="/2" className={location.pathname === "/2" ? "active" : ""}>
          Sliding
        </Button>
      </Container>
      <Outlet />
    </>
  );
}
