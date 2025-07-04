import { Link } from "react-router-dom";
import styled from "styled-components";

const Headers = styled.div`
  background-color: rgb(92 0 159 / 35%);
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 20px;
`;

const HeaderUl = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const HeaderNav = styled.nav`
  display: flex;
`;

const HeaderSpan = styled.span`
  color: white;
`;

export const Header = () => {
  return (
    <Headers>
      <img src="" alt="" />
      <HeaderNav>
        <HeaderUl>
          <Link to="/home">
            <HeaderSpan>Home</HeaderSpan>
          </Link>
          <Link to="/eba">
            <HeaderSpan>Cart</HeaderSpan>
          </Link>
        </HeaderUl>
      </HeaderNav>
    </Headers>
  );
};
