import { Link } from "react-router-dom";
import styled from "styled-components";
const Headers = styled.div`
  background-color: indigo;
  color: white;
`;
export const Header = () => {
  return (
    <Headers>
      <nav>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/eba">Cart</Link>
        </ul>
      </nav>
    </Headers>
  );
};
