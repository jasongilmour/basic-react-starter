import React, { useState } from 'react';
// import { JsonLd } from 'react-schemaorg';
import classnames from 'classnames';
import { Waypoint } from 'react-waypoint';
// import { HashLink as Link } from 'react-router-hash-link';
// import { ProjectCard } from 'components';

import styles from './Home.module.scss';

const Home = () => {
    const [startVisible, setStartVisible] = useState(true);

    const startEnter = () => {
        setStartVisible(true);
    };

    const startLeave = () => {
        setStartVisible(false);
    };

    return (
        <main className="align-items-center d-flex justify-content-center">
            <h1 className="mt-n3">Hello world.</h1>
        </main>
    );
};

export default Home;
