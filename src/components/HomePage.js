import React from 'react';

// components
import Banner from './snippets/HomeBanner';
import Sections from './snippets/HomeSections';
import TeamSection from './snippets/TeamSection';
import HelpSection from './snippets/helpSection';


function HomePage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="page-banner">
            <Banner />

            <Sections />

            <TeamSection />

            <HelpSection />
        </div>
    );
}

export default HomePage;