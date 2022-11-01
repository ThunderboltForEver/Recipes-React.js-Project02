import { FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { GiChopsticks, GiNoodles } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Category = () => {
    return (
        <List>
            <Slink to='/Cuisine/Italian'><FaPizzaSlice />Italian </Slink>
            <Slink to='/Cuisine/American'><FaHamburger />American</Slink>
            <Slink to='/Cuisine/Thai'><GiNoodles />Thai</Slink>
            <Slink to='/Cuisine/Japanese'><GiChopsticks />Japanese</Slink>

        </List>
    );
}
const List = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:2rem 0;
    height:100px;
    margin-bottom:1.4rem;

`;
const Slink = styled(NavLink)`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:4px;
    width:60px;
    height:60px;
    background:linear-gradient(35deg,#494949,#313131);
    border-radius:50%;
    text-decoration:none;
    color:#fff;
    font-size:0.7rem;
    margin: 0 0.2rem;
    transform:scale(0.9);
    svg {
        font-size:1.2rem;
    }
    &.active {
        background:linear-gradient(to right,#f27121,#e94057);
 
    }
`;
export default Category; 