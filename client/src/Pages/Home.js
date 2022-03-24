import React from 'react';
import YoutubeEmbed from '../Components/YoutubeEmbed';
import homePageImage from "../Assets/Images/home_page.png";

function Home() {
    return (
        <div className='home-page'>
            <img src={homePageImage} className='home-image'alt='Van The Man'/>
            <YoutubeEmbed embedId="5GrAPrapSqs" />
        </div>
    );
}

export default Home; 