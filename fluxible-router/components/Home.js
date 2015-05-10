/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
import React from 'react';
import {NavLink} from 'fluxible-router';

class Home extends React.Component {
    render() {
        let params = {id: 1};

        return (
          <p>
            Welcome to the site!
            <NavLink routeName="dynamicpage" navParams={params}>Page 1</NavLink>
          </p>
        );
    }
}

export default Home;
