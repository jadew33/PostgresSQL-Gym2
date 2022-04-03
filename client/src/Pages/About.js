import React from "react";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import aboutImage from "../Assets/Images/about_page.png";
import { IconContext } from "react-icons";
import tiktok from '../Assets/Handwriting/TikTok.png';
import facebook from '../Assets/Handwriting/Facebook.png';
import instagram from '../Assets/Handwriting/Instagram.png';
import twitter from '../Assets/Handwriting/Twitter.png';
import youtube from '../Assets/Handwriting/Youtube.png';

function About(){
    return (
            <>
                <Container fluid="sm" className="about-container">
                    <Row>
                        <Col className="subtext">
                            About
                        </Col>
                    </Row>
                    <Row className="top-buffer text-img-container">
                        <Col className="reg-text" xs={10} lg={8}>
                            <p>
                            Van The Man is a singer and multi-instrumentalist springing onto the scene from Peterborough, Ontario. His love for music comes from a diverse record collection, taking influences from artists like Tyler The Creator, Blur, Beck, and Wiz Khalifa to carve out a unique sound all his own. Saturated, beat driven, hook laden pop songs, delivered with a distinct voice and a flair for instrumentation.
                            <br />
                            <br />
                            Writing, producing, and performing the songs that appear on his upcoming album release, Van The Man has a vision for the future all his own. After the release of the 2020 single ‘Daisies’ and a YouTube cover of the Mac Miller classic ‘Funeral’ that racked up over 70k views, VTM sprung to action forming his debut album set for release mid 2022.
                            <br />
                            <br />
                            Working with acclaimed industry heavyweights, Grammy nominated Multi Platinum Big Jerm of ID Labs (Mac Miller, Wiz Khalifa) and Peter J. Moore (Hayden, Our Lady Peace), those creative collaborations added fuel to a record already bursting with hooks just waiting to be set.
                            <br />
                            <br />
                            With an online presence gaining followers and listeners across a variety of platforms, Van The Man is staring down the barrel of another exciting year.
                            <br />
                            <br />
                            His newest single "Not Sayin" is available now!!
                            <br />
                            <br />
                            Follow Van The Man on social media and join the squad!!
                            </p>
                            
                        </Col>
                        <Col sm={10} lg={4}>
                            <Image src={aboutImage} className="about-image"/>
                        </Col>
                    </Row>
                    <Row className="icons-container">
                        <Col>
                            <IconContext.Provider
                                value={{ size: "50px"}}
                            >
                                <Button href='https://www.youtube.com/channel/UCXO6tLw7YeT2Qy2CRuoAgtg' variant='outline-link'>
                                <img src={youtube} alt="youtube " className="social-icon"/>
                                </Button>
                                
                                <Button href="https://www.instagram.com/vantheman_official/" variant='outline-link'>
                                <img src={instagram} alt="instagram" className="social-icon"/>
                                </Button>

                                <Button href="https://www.facebook.com/VanTheManOfficial" variant='outline-link'>
                                <img src={facebook} alt="facebook" className="social-icon"/>
                                </Button>

                                <Button href="https://twitter.com/real_vantheman" variant='outline-link'>
                                <img src={twitter} alt="twitter" className="social-icon"/>
                                </Button>
                            
                                <Button href="https://www.tiktok.com/@vantheman_official" variant='outline-link'>
                                    <img src={tiktok} alt="tiktok" className="social-icon"/>
                                </Button>
                            </IconContext.Provider>
                            
                        </Col>
                    </Row>
                </Container>
            </>
        );
}

export default About;