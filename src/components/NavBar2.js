// Copyright 2016 LambdaStack All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.import React, { Component } from 'react';

// NB: The CSS files are imported in App.js

// NOTE: This is WIP for testing moving to react-bootstrap or reactstrap after v1 rollout

import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import { Link } from 'react-router';

function Wrapper({ children }) {
  return children;
}

class NavBar2 extends Component {

  render() {
    const NAV_LINKS = {
        introduction: {
          link: '/introduction.html',
          title: 'Introduction'
        },
        'getting-started': {
          link: '/getting-started.html',
          title: 'Getting started'
        },
        components: {
          link: '/components.html',
          title: 'Components'
        },
        support: {
          link: '/support.html',
          title: 'Support'
        },
    };

    return (
        <Navbar componentClass="header" className="skin-blue" staticTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">lsioAdmin</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse className="bs-navbar-collapse">
                <Nav role="navigation" id="top">
                    {Object.entries(NAV_LINKS).map(([linkName, { link, title }]) => (
                        <Wrapper key={linkName}>
                            <li>
                                <Link to={link}>
                                    {title}
                                </Link>
                            </li>
                        </Wrapper>
                    ))}
                    <Wrapper>
                        <li>
                          <a href="http://lambdastack.io" target="_blank">
                            LambdaStack
                          </a>
                        </li>
                    </Wrapper>
                </Nav>
            </Navbar.Collapse>
      </Navbar>
      );
  }
}


export default NavBar2;
