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
              <HeaderName as={Link} to="/PlanningNL" prefix="AAAI 2025 Bridge on">
                Planning in Natural-Language
              </HeaderName>
              <HeaderNavigation aria-label="Organizers">
                <HeaderMenuItem as={Link} to="/PlanningNL/org" className="pink-diminish">
                Organizers
                </HeaderMenuItem>
                <HeaderMenuItem
                  as={Link}
                  to="/PlanningNL/speakers"
                  className="green-diminish">
                  Speakers
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
