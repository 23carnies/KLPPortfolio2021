import styled, { css } from 'styled-components';
import { Link } from 'gatsby'
import { Flex, box_shadow3 } from '../utilities';
import * as c from '../utilities/Colors';
import * as b from '../utilities/Borders';
import * as t from '../utilities/Type';


// Header 
export const Header = styled.header`
    background: #000;
    /* height: 200px; */
`;

export const Nav = styled.nav`
    ${Flex};
    height: 80px;
`;



export const NavItem = styled(Link)`
    /* margin: 0 auto; */
    text-decoration: none;
    font: ${t.navItem};
    color: white;
    text-transform: uppercase;
    padding: 0 20px;
    margin-left: ${({type}) => (type === 'about' ? 'auto' : '0')};
`;





// Layout
export const Layout = styled.article`
    margin: 0 auto;
`;
