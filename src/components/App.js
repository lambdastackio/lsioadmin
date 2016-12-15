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

import React, { Component } from 'react';
import './../css/font-awesome.css';
import './../css/ionicons.css';
import './../css/_all-skins.css';
import './../css/App.css';
import Header from './Header';
// import ContentContainer from './ContentContainer';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="hold-transition skin-purple sidebar-mini wrapper">
        <Header />
        {/* <ContentContainer /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
