import React from 'react';
import './About.css';
import Footer from './Footer'; // Import the Footer component

function About() {
    return (
        <>
            <div className="about-body">
                <h1>Welcome To About Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
            </div>
            <Footer />

        </>
    );
}

export default About;
