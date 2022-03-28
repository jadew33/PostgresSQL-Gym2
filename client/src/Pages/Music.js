import React from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import vogue from "../Assets/Music/vogue.png";
import vibin from "../Assets/Music/vibin.png";
import linkup from "../Assets/Music/linkup.png";
import daisies from "../Assets/Music/daisies.png";
import alright from "../Assets/Music/alright.png";
import notsay from "../Assets/Music/notsay.png";

import spotify from "../Assets/Music/spotify.png";
import itunes from "../Assets/Music/itunes.png";
import amazon from "../Assets/Music/amazon-music.png";
import deezer from "../Assets/Music/deezer.png";
import youtube from "../Assets/Music/youtube.png";


function Music(){
    return (
        <>
            <Container fluid="sm" className = "music-contain">
                <Row>
                    <Col className = "subtext">
                        Singles
                    </Col>
                </Row>
            

            <div className="top-space"></div>
            
            <div className="music-row">

                <div className="music-col">
                    <div className="album"><Image src={notsay}/></div>
                    <div className="icon-box">
                        <a href="https://open.spotify.com/track/1wK7LQCjsY8Ix61LFqIwGv?si=0f953251f06348b1"><Image src={spotify} className="icon"/></a>
                        <a href="https://music.apple.com/ca/album/not-sayin/1609795694?i=1609795695"><Image src={itunes} className="icon"/></a>
                    </div>

                </div>

                <div className="music-col">
                    <div className="album"><Image src={linkup}/></div>

                    <div className="icon-box">
                        <a href="https://open.spotify.com/album/6fLBOdf60fBBBD9Ertaen9?si=lNYBw2gASKyg7RJ3LSkQTg"><Image src={spotify} className="icon"/></a>
                        <a href="https://music.apple.com/us/album/linkup-single/1603973945"><Image src={itunes} className="icon"/></a>
                    </div>

                </div>

                <div className="music-col">
                    <div className="album"><Image src={alright}/></div>

                    <div className="icon-box">
                        <a href="https://open.spotify.com/album/0Ke82Fk5JP55ltx3frpWOy?si=NNtwKB84SQKjmJEsaxfdvw"><Image src={spotify} className="icon"/></a>
                        <a href="https://music.apple.com/us/album/alright-single/1590876734"><Image src={itunes} className="icon"/></a>
                    </div>

                </div>

            </div>

            <div className="music-row">

                <div className="music-col">
                    <div className="album"><Image src={vibin}/></div>

                    <div className="icon-box">
                        <a href="https://open.spotify.com/track/4qYk3PfwL0FZo9e1awHV2T?si=da88d61a5b3a4d1c"><Image src={spotify} className="icon"/></a>
                        <a href="https://music.apple.com/us/album/vibin-single/1578174448"><Image src={itunes} className="icon"/></a>
                    </div>

                </div>

                <div className="music-col">
                    <div className="album"><Image src={vogue}/></div>

                    <div className="icon-box">
                        <a href="https://open.spotify.com/track/6fzhNElu2Lf2eMpVOxnC5H?si=77a32bcd6c7e4fa4"><Image src={spotify} className="icon"/></a>
                        <a href="https://music.apple.com/us/album/vogue-single/1564129402"><Image src={itunes} className="icon"/></a>
                    </div>

                </div>

                <div className="music-col">
                    <div className="album"><Image src={daisies}/></div>

                    <div className="icon-box">
                        <a href="https://open.spotify.com/album/66fBynNKCRe9IUPOVyuRWM?si=88qke6u6QrapiXRuRAUsqw"><Image src={spotify} className="icon"/></a>
                        <a href="https://music.apple.com/us/album/daisies/1529909955?i=1529909956"><Image src={itunes} className="icon"/></a>
                    </div>

                </div>

            </div>
            <div className="bot-space"></div>


            <div class="line-2"></div>
            <div className="bot-space"></div>
            <Row>
                    <Col className = "subtext">
                        More Music
                    </Col>
             </Row>
             <div className="top-space"></div>



            <div className="more-icons">
                <div className="icon-col">
                    <a href="https://open.spotify.com/artist/4U1YsHkovFUGPHIrnF89bj?si=lGwy6wmkQOGykJaZxEswIw"> <Image src={spotify} className="icon2"/> </a> 
                    <p>Spotify</p>
                </div>
                <div className="icon-col">
                    <a href="https://music.apple.com/ca/artist/van-the-man/1526310747?ign-itscg=30440&ign-itsct=catchall_p1"> <Image src={itunes} className="icon2"/> </a> 
                    <p>Apple Music</p>
                </div> 
                <div className="icon-col">
                    <a href="https://www.youtube.com/channel/UCXO6tLw7YeT2Qy2CRuoAgtg"> <Image src={youtube} className="icon2"/> </a> 
                    <p>Youtube</p>
                </div> 
                <div className="icon-col">
                    <a href="https://www.deezer.com/en/artist/102965942"> <Image src={deezer} className="icon2"/> </a> 
                    <p>Deezer</p>
                </div> 
                <div className="icon-col">
                    <a href="https://music.amazon.ca/artists/B08F81XK9W/van-the-man"> <Image src={amazon} className="icon2"/> </a> 
                    <p>Amazon Music</p>
                </div> 
            </div>

            <div className="mob-icon-row1">
                <div className="icon-col">
                    <a href="https://open.spotify.com/artist/4U1YsHkovFUGPHIrnF89bj?si=lGwy6wmkQOGykJaZxEswIw"> <Image src={spotify} className="icon2"/> </a> 
                    <p>Spotify</p>
                </div>
                <div className="icon-col">
                    <a href="https://music.apple.com/ca/artist/van-the-man/1526310747?ign-itscg=30440&ign-itsct=catchall_p1"> <Image src={itunes} className="icon2"/> </a> 
                    <p>Apple Music</p>
                </div> 

            </div>

            <div className="mob-icon-row2">
                <div className="icon-col">
                    <a href="https://www.youtube.com/channel/UCXO6tLw7YeT2Qy2CRuoAgtg"> <Image src={youtube} className="icon2"/> </a> 
                    <p>Youtube</p>
                </div> 
                <div className="icon-col">
                    <a href="https://www.deezer.com/en/artist/102965942"> <Image src={deezer} className="icon2"/> </a> 
                    <p>Deezer</p>
                </div> 
                
                <div className="icon-col">
                    <a href="https://music.amazon.ca/artists/B08F81XK9W/van-the-man"> <Image src={amazon} className="icon2"/> </a> 
                    <p>Amazon Music</p>
                </div> 
            </div> 



            <div className="more-music">
            <iframe src="https://open.spotify.com/embed/artist/4U1YsHkovFUGPHIrnF89bj?utm_source=generator" width="50%" height="280" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            <div className="bot-space"></div>

            <div className="bot-player">
            <iframe src="https://open.spotify.com/embed/track/1wK7LQCjsY8Ix61LFqIwGv?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
            
            
            </Container>

     
        </>
        );
}

export default Music;