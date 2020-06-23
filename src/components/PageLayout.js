import React from 'react';

import Header from './Header';
import Navigation from './Navigation';
import Content from './Content';

const PageLayout = () => {
    return (
        <>
            <Header>
                <Navigation />
            </Header>

            <Content />
        </>
    );
};

export default PageLayout;
