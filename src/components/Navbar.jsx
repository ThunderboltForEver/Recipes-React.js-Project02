import styled from "styled-components"
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function Navbar() {
    return (
        <Nav>
            <GiKnifeFork />
            <Logo to={'/'}>
                <span>Thunderbolt</span>
            </Logo>
        </Nav>
    )
}
const Nav = styled.div`
    padding-top:1rem;
    position:relative;
    @media (max-width:772px) {
        
    }
    svg {
        font-size:3rem;
    }

`;
const Logo = styled(Link)`
    text-decoration:none;
    color:#313131;
    position:absolute;
    top:50%;
    font-weight:600;
`;
export default Navbar