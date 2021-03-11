// import React, { useState } from 'react';
// import styled, { css } from 'styled-components';
// import { useSpring, animated } from 'react-spring';
// import NavBar from './navbar';

// import { Link } from 'gatsby';
// import {
//   Flex,
//   navItem,
//   below,
//   Hamburger,
//   black,
//   white,
//   yellow3,
//   nameplate,
//   violet,
// } from '../utilities';
// import kpLogo from '../images/logo.svg';

// const Header = () => {
//   const [isNavOpen, setNavOpen] = useState(false);
//   const navAnimate = useSpring({
//     // zIndex: isNavOpen ? `100` : `0`,
//     // opacity: isNavOpen ? `1` : `0`,
//     transform: isNavOpen
//       ? `translate3d(0,0,0) scale(1)`
//       : `translate3d(100%,0,0) scale(0.6)`,
//   });

//   return (
//     <Head>
//       <Logo src={kpLogo} alt="KP Phoenix Logo" />
//       <Name to="/">Karen Lobin Perkins</Name>
//       <Menu onClick={() => setNavOpen(!isNavOpen)}>Menu</Menu>
//       <NavBar style={navAnimate} />
//     </Head>
//   );
// };

// export default Header;

// const Head = styled.header`
//   ${Flex({ jc: 'space-between', ai: 'center' })}
//   background: #000;
//   height: 150px;
// `;

// const Logo = styled.img`
//   max-width: 100px;
//   padding: 0 2%;
//   margin: 0 2%;
// `;

// const Name = styled(Link)`
//   padding: 0 2%;
//   margin: 0 2%;
//   font: ${nameplate};
//   text-decoration: none;
//   ${below.medium`
//   font-size: 2rem;
//   margin: 0 1%;
// `}
// `;

// const Menu = styled.button`
//   margin: 0 2%;
//   padding: 0 2%;
//   color: ${white};
//   background: transparent;
//   border: none;
//   font: ${navItem};
//   text-transform: uppercase;
//   ${below.medium`
//     margin: 0 1%;
//   `}
// `;
