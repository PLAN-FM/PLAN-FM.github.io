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
              <HeaderName  prefix='' >
                
              </HeaderName>
              <HeaderNavigation aria-label="Header">
               
                <HeaderMenuItem
                  as={Link}
                  to="/">
                  Home
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
