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
              <nav aria-label="Organizers" class=""  ><ul class="cds--header__menu-bar"><li class=""><a class="cds--header__menu-item" style={{padding:'10px'}}tabindex="0" href="/org"><span class="cds--text-truncate--end">Organizers</span></a></li></ul></nav>
            </Header>
          </>
        )}
      />
    );
  }
}

export default PageHeader;
