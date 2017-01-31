import React from 'react';
import Home from 'react-icons/lib/fa/home';
import Device from 'react-icons/lib/fa/server';
import User from 'react-icons/lib/fa/user';
import Line from 'react-icons/lib/fa/line-chart';
import Credit from 'react-icons/lib/fa/credit-card';
import { Nav, Icon, Link, BlueDiv, LinkText, Logo, Foot, FootText } from './StyledComponents';

const Menu = props => (
  <Nav>
    <div>
      <BlueDiv menu>

        <Logo>Project X</Logo>
      </BlueDiv>
      <Link>
        <Icon ><Home /></Icon>
        <LinkText >Dashboard</LinkText>
      </Link>
      <Link>
        <Icon active><Line /></Icon>
        <LinkText active>Services</LinkText>
      </Link>
      <Link>
        <Icon ><Device /></Icon>
        <LinkText >Devices</LinkText>
      </Link>
      <Link>
        <Icon><User /></Icon>
        <LinkText>Users</LinkText>
      </Link>
      <Link>
        <Icon><Credit /></Icon>
        <LinkText>Ordering</LinkText>
      </Link>
    </div>
    <Foot>
      <FootText>Account</FootText>
      <FootText>English</FootText>
      <FootText>Log Out</FootText>
    </Foot>
  </Nav>
  );

export default Menu;
