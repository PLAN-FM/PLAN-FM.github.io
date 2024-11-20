import React from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderContainer,
  SkipToContent,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
} from '@carbon/react';



class PageHeader extends React.Component {



  constructor(props) {
    super();
    this.state = {};

  }

  render() {

    return (
      <HeaderContainer
        render={({  }) => (
          
            <Header aria-label="Header">
              <SkipToContent />
              <HeaderName as={Link} to="/" prefix="AAAI 2025 Bridge:">
                PLAN-FM
              </HeaderName>
              <HeaderNavigation aria-label="Header">
              <HeaderMenuItem as={Link}  to="/" >
                Home
                </HeaderMenuItem>
                <HeaderMenuItem as={Link} to="/org" >
                Organizers
                </HeaderMenuItem>
               
                <HeaderMenuItem
                  as={Link}
                  to="/schedule">
                  Schedule
                </HeaderMenuItem>
                <HeaderMenuItem
                  as={Link}
                  to="/speaker">
                  Speakers
                </HeaderMenuItem>
                <HeaderMenuItem
                  as={Link}
                  to="/about">
                  About
                </HeaderMenuItem>
              </HeaderNavigation>
            </Header>
        )}
      />
    );
  }
}

export default PageHeader;
