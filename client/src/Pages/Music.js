import React from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import vogue from "../Assets/Music/vogue.png";
import vibin from "../Assets/Music/vibin.png";
import linkup from "../Assets/Music/linkup.png";
import daisies from "../Assets/Music/daisies.png";
import alright from "../Assets/Music/alright.png";
import spotify from "../Assets/Music/spotify.png";
import itunes from "../Assets/Music/itunes.png";


function Music(){
    return (
        <>
            <Container fluid="sm" className = "music-contain">
                <Row>
                    <Col className = "subtext">
                        Singles
                    </Col>
                </Row>
            


            <div className="music-row">
                <div className="music-col">
                    <Image src={linkup} className="album"/>
                    <div className="icons-row">
                        <div className="icon-col">
                            <a href="https://open.spotify.com/album/6fLBOdf60fBBBD9Ertaen9?si=lNYBw2gASKyg7RJ3LSkQTg">
                            <Image src={spotify} className="icon"/>
                            </a>
                        </div>
                        <div className="icon-col">
                            <a href="https://music.apple.com/us/album/linkup-single/1603973945">
                            <Image src={itunes} className="icon"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="music-col">
                    <Image src={alright} className="album"/>
                    <div className="icons-row">
                        <div className="icon-col">
                            <a href="https://open.spotify.com/album/0Ke82Fk5JP55ltx3frpWOy?si=NNtwKB84SQKjmJEsaxfdvw">
                            <Image src={spotify} className="icon"/>
                            </a>
                        </div>
                        <div className="icon-col">
                            <a href="https://music.apple.com/us/album/alright-single/1590876734">
                            <Image src={itunes} className="icon"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="music-col">
                    <Image src={vibin} className="album"/>
                    <div className="icons-row">
                        <div className="icon-col">
                            <a href="https://open.spotify.com/track/4qYk3PfwL0FZo9e1awHV2T?si=da88d61a5b3a4d1c">
                            <Image src={spotify} className="icon"/>
                            </a>
                        </div>
                        <div className="icon-col">
                            <a href="https://music.apple.com/us/album/vibin-single/1578174448">
                            <Image src={itunes} className="icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="music-row2">
                <div className="music-col2">
                    <Image src={vogue} className="album"/>

                    <div className="icons-row">
                        <div className="icon-col">
                            <a href="https://open.spotify.com/track/6fzhNElu2Lf2eMpVOxnC5H?si=77a32bcd6c7e4fa4">
                            <Image src={spotify} className="icon"/>
                            </a>
                        </div>
                        <div className="icon-col">
                            <a href="https://music.apple.com/us/album/vogue-single/1564129402">
                            <Image src={itunes} className="icon"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="music-col2">
                    <Image src={daisies} className="album"/>
                    <div className="icons-row">
                        <div className="icon-col">
                            <a href="https://open.spotify.com/album/66fBynNKCRe9IUPOVyuRWM?si=88qke6u6QrapiXRuRAUsqw">
                            <Image src={spotify} className="icon"/>
                            </a>
                        </div>
                        <div className="icon-col">
                            <a href="https://music.apple.com/us/album/daisies/1529909955?i=1529909956">
                            <Image src={itunes} className="icon"/>
                            </a>
                        </div>
                    </div>
                </div>


            </div>

            
            <iframe src="https://open.spotify.com/embed/track/3StOo4uRPKgXyuXmp888ev?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </Container>


     
        </>
        );
}

export default Music;