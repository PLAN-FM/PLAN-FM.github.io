import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderContainer,
  SkipToContent,
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
              <HeaderName as={Link} to="/" prefix="AAAI 2025 Bridge on">
                Planning in Natural-Language
              </HeaderName>
            </Header>
          </>
        )}
      />
    );
  }
}

export default PageHeader;
