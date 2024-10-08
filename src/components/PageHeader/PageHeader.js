import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderContainer,
  SkipToContent,
  HeaderNavigation,
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
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="Header">
              <SkipToContent />
              <HeaderName as={Link} to="/" prefix="AAAI 2025 Bridge:">
                PLAN-FM
              </HeaderName>
              <HeaderNavigation aria-label="Organizers">
                <HeaderMenuItem as={Link} to="/org" className="pink-diminish">
                Organizers
                </HeaderMenuItem>
              </HeaderNavigation>
            </Header>
          </>
        )}
      />
    );
  }
}

export default PageHeader;
