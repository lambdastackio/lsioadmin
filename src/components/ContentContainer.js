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

import React, { Component } from 'react';
import Aside from './Aside';
import Content from './Content';

class ContentContainer extends Component {
  render() {
    return (
        <div>
            <Aside />
            <Content />
        </div>
    );
  }
}

export default ContentContainer;
