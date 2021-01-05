import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import DatePicker from 'react-date-picker';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Button } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import './customDatePickerWidth.css';
import NumericInput from 'react-numeric-input';
import { ParallaxProvider } from 'react-scroll-parallax';
import Card from 'react-bootstrap/Card';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';
import Carousel from 'react-bootstrap/Carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Home() {
    const [checkIn, onChangeCI] = useState(new Date());
    const [checkOut, onChangeCO] = useState(new Date());
    const [adultCount, onChangeA] = useState(1);
    const [kidCount, onChangeK] = useState(0);

    return (
        <>
            <Container style={{ marginLeft: "35", marginRight: "35" }}>
                <Row>
                    <Col style={{ fontFamily: 'Lobster Two' }}>
                        <h1>Ferofly</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ fontFamily: 'Lobster Two' }}>
                        <div><h5 style={{ marginTop: -5, zIndex: 9, position: "relative" }}>-Magnify your Journey-</h5></div>
                    </Col>
                </Row>
                <Row style={{ marginTop: 32 }}>
                    <Col>
                        <ParallaxProvider>
                            <ParallaxBanner
                                layers={[
                                    {
                                        image: 'https://static.wixstatic.com/media/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_754,al_c,q_85,usm_0.66_1.00_0.01/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.webp',
                                        amount: 0.8,
                                        expanded: false
                                    }
                                ]}
                                className="custom-class"
                                style={{
                                    height: "754px",
                                    objectFit: "cover"
                                }}
                            >
                            </ParallaxBanner>
                        </ParallaxProvider>
                    </Col>
                </Row>
                <Row style={{ marginTop: 32 }}>
                    <Col xs={6} md={4} style={details1Style}>
                        <div>
                            Check In
                        </div>
                        <div className="customDatePickerWidth">
                            <DatePicker
                                dayPlaceholder="DD"
                                monthPlaceholder="MM"
                                yearPlaceholder="YYYY"
                                onChange={onChangeCI}
                                value={checkIn}
                            />
                        </div>

                    </Col>
                    <Col xs={6} md={4} style={details1Style}>
                        <div>
                            Check Out
                        </div>
                        <div className="customDatePickerWidth">
                            <DatePicker
                                dayPlaceholder="DD"
                                monthPlaceholder="MM"
                                yearPlaceholder="YYYY"
                                onChange={onChangeCO}
                                value={checkOut}
                            />
                        </div>
                    </Col>
                    <Col xs={3} md={1} style={details2Style}>
                        <div>
                            Adults
                        </div>
                        <NumericInput
                            className="form-control"
                            style={{
                                wrap: {
                                    borderRadius: '0',
                                    fontSize: 14,
                                    height: "28px"
                                },
                                input: {
                                    borderRadius: '0px',
                                    border: '1px solid #000000',
                                    height: "28px"
                                },
                                'input:focus': {
                                    border: '1px solid #000000',
                                    outline: 'none'
                                },
                                arrowUp: {
                                    height: "5px"
                                },
                                arrowDown: {
                                    height: "5px"
                                }
                            }}
                            value={adultCount}
                            onChange={onChangeA}
                            min={1} />
                    </Col>
                    <Col xs={3} md={1} style={details2Style}>
                        <div>
                            Kids
                        </div>
                        <NumericInput
                            className="form-control"
                            style={{
                                wrap: {
                                    borderRadius: '0',
                                    fontSize: 14,
                                    height: "28px"
                                },
                                input: {
                                    borderRadius: '0px',
                                    border: '1px solid #000000',
                                    height: "28px"
                                },
                                'input:focus': {
                                    border: '1px solid #000000',
                                    outline: 'none'
                                },
                                arrowUp: {
                                    height: "5px"
                                },
                                arrowDown: {
                                    height: "5px"
                                }
                            }}
                            value={kidCount}
                            onChange={onChangeK}
                            min={0} />
                    </Col>
                    <Col style={details1Style} xs={6} md={2}>
                        <div style={{ visibility: "hidden" }}>Hello</div>
                        <Button variant="dark" style={{ borderRadius: 0, width: "100%", paddingBottom: 2 }}>
                            Search
                        </Button>
                    </Col>
                </Row>

                <Row style={{ marginTop: "12%", fontFamily: "brandon-grot-w01-light" }}>
                    <Col>
                        <h4>ABOUT</h4>
                    </Col>
                </Row>

                <Row style={{ marginBottom: "14%" }} className="justify-content-md-center">
                    <Col sm={6} style={{ fontFamily: "brandon-grot-w01-light", lineHeight: "1.5em", display: "block" }}>
                        <br />
                        <i>
                            I'm a paragraph.
                            Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            Feel free to drag and drop me anywhere you like on your page.
                            I’m a great place for you to tell a story and let your users know a little more about you.
                        </i>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col>
                        <ParallaxProvider>
                            <ParallaxBanner
                                layers={[
                                    {
                                        children: (
                                            <Card bg="light" className="bg-light text-center">
                                                <Card.Img src="https://static.wixstatic.com/media/84770f_98aabcec66e34956acf748305c555ec3~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_754,al_c,q_85,usm_0.66_1.00_0.01/84770f_98aabcec66e34956acf748305c555ec3~mv2_d_2500_1658_s_2.webp" />
                                                <Card.ImgOverlay className="text-center d-flex flex-column justify-content-center" >
                                                    <Container>
                                                        <Row className="justify-content-md-center">
                                                            <Col style={{ paddingTop: 32, fontSize: "72px", backgroundColor: "#FFFFFF" }} sm={6}>
                                                                <Card.Title style={{ marginBottom: 24 }}><h3>OUR ROOMS</h3></Card.Title>
                                                            </Col>
                                                        </Row>
                                                        <Row className="justify-content-md-center" >
                                                            <Col style={{ fontSize: "14px", backgroundColor: "#FFFFFF", paddingBottom: 32 }} sm={6}>
                                                                <Card.Text style={{ padding: 40 }}>
                                                                    <i>
                                                                        I'm a paragraph.
                                                                        Click here to add your own text and edit me.
                                                                        I’m a great place for you to tell a story and let your users know a little more about you.
                                                                    </i>
                                                                </Card.Text>
                                                                <Button style={{ borderRadius: 0 }} variant="outline-dark">Book a Room</Button>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Card.ImgOverlay>
                                            </Card>
                                        ),
                                        amount: 0.4,
                                        expanded: false
                                    }
                                ]}
                                className="custom-class"
                                style={{
                                    height: "754px",
                                    objectFit: "cover"
                                }}
                            >
                            </ParallaxBanner>
                        </ParallaxProvider>
                    </Col>
                </Row>

                <Row style={{ marginTop: "8%", marginBottom: "5%", fontSize: "26px" }} className="justify-content-md-center">
                    <Col>
                        OUR SERVICES
                    </Col>
                </Row>

                <Row className="justify-content-md-center" >
                    <Col>
                        <div>
                            <svg style={{ width: "40px", height: "42px" }} preserveAspectRatio="xMidYMid meet" data-bbox="6.3 27 187.7 145" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="6.3 27 187.7 145" role="img"><g><path d="M176.1,70l-6.1,0v-8H58v35.8c0,2.8,0.8,5.4,1.2,8.1c-17.6,3-26.4,13.5-26.8,14.1c-0.6,0.8-0.6,1.8-0.1,2.6l1.1,1.9
                            c-12.2,3-16.9,13.1-17.1,13.6c-0.4,0.9-0.2,1.9,0.5,2.6l1.7,1.7c-6.1,6.6-10.9,15.3-11.1,15.7c-1.7,3-1.4,7.6,0.7,10.3l0.4,0.5
                            c1.5,2,3.9,3.1,6.3,3.1c1.2,0,2.5-0.3,3.6-0.9c0.1,0,6.9-3.7,20.6-8.4l2.7,2.7c0.4,0.4,1,0.7,1.6,0.7c0.2,0,0.3,0,0.5-0.1l13.2-2.8
                            l0.4,0.6c0.4,0.7,1.2,1.1,2,1.1h18.2c0.8,0,1.6-0.4,2-1.1l1-1.7l13.1,2.8c0.2,0,0.3,0.1,0.5,0.1c0.6,0,1.2-0.2,1.6-0.7l2.6-2.6
                            c13.3,4.5,20.3,8.3,20.4,8.3c1.1,0.6,2.4,0.9,3.6,0.9c2.4,0,4.8-1.1,6.3-3.1l0.4-0.5c2-2.8,2.3-7.3,0.7-10.3
                            c-0.1-0.2-1.4-2.2-3.5-5.4C147,146,165,129,170,109h6c10,0,18-9.5,18-19.5S185,70,176.1,70z M62,66h104v15H62V66z M16,166.9
                            c-1.2,0.7-3,0.3-3.9-0.9l-0.4-0.5c-1-1.3-1.1-3.9-0.3-5.3c0.1-0.1,4.7-8.5,10.4-14.7l13.4,13.4C22.6,163.4,16.3,166.8,16,166.9z
                            M43.9,161.2l-22.6-22.7c1.6-2.7,6.1-8.4,14.6-9.9L54.3,159L43.9,161.2z M76.1,159.9H60.5l-23.4-38.5c3.1-3.2,13.1-11.8,31.2-11.8
                            c18.2,0,28.1,8.5,31.2,11.7L76.1,159.9z M93.3,160L83,157.9l18.4-30.4c8.5,1.5,12.9,7.2,14.5,9.9L93.3,160z M125.2,164.4l-0.4,0.5
                            c-0.8,1.1-2.6,1.5-3.9,0.9c-0.3-0.2-6.7-3.6-18.9-7.9l13.3-13.4c5.6,6.2,10.2,14.5,10.2,14.5C126.3,160.6,126.1,163.1,125.2,164.4z
                            M123.2,147.9c-1.4-1.9-3.2-4.8-4.8-6.6l1.9-1.8c0.7-0.7,0.9-1.7,0.5-2.6c-0.2-0.5-4.8-10.5-17-13.6l0.5-0.8
                            c0.5-0.8,0.4-1.9-0.1-2.6c-0.5-0.6-11.6-14.9-35.9-14.9c-1.7,0-3.7,0.1-5.3,0.2c-0.4-2.5-1-4.9-1-7.5V85h104v20
                            C166,119,148.4,142.9,123.2,147.9z M176,104h-6V75h6c7.4,0,13,7.4,13,14.7C189,97.1,183.4,103.7,176,104z"></path><path d="M128,55c0,0,0-2.2,0-3c0-5.2,1.3-7.6,2.9-10.4c2.1-3.4,3.8-6.7,3.8-12.6c0-1-0.9-1.9-1.9-1.9S131,28,131,28.9
                            c0,5.2-1.5,7.8-3.2,10.6c-2.1,3.4-3.8,6.9-3.8,12.8c0,0.8,0,2.6,0,2.6H128z"></path><path d="M116,55c0,0,0-1.9,0-2.7c0-5.2,1.5-8,3.2-10.8c2.1-3.4,3.8-6.7,3.8-12.6c0-1-0.9-1.9-1.9-1.9s-1.9,0.9-1.9,1.8
                            c0,5.2-1.5,7.8-3.2,10.6C114,42.8,112,46.1,112,52c0,0.8,0,3,0,3H116z"></path><path d="M104,55c0,0,0-2.3,0-3c0-5.2,2.2-7.4,3.8-10.2c2.1-3.4,3.8-6.7,3.8-12.6c0-1-0.9-1.9-1.9-1.9s-1.9,0.9-1.9,1.8
                            c0,5.2-1.5,7.8-3.2,10.6c-2.1,3.4-4.7,6.3-4.7,12.2c0,1.3-0.1,1.3,0,3H104z"></path></g>
                            </svg>
                        </div>

                    </Col>

                    <Col>
                        <div>
                            <svg style={{ width: "67px", height: "22px" }} preserveAspectRatio="xMidYMid meet" data-bbox="6 69 189 62.9" viewBox="6 69 189 62.9" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img"><defs><style>#comp-iu44e535 svg [data-color="1"] </style></defs>
                                <g>
                                    <path d="M178 123l6.8-7.4c1 .6 2 .9 3.1.9 1.6 0 3.2-.6 4.4-1.8 2.2-2.2 2.6-8.7 2.7-10 0-.4-.2-.9-.5-1.2-.3-.3-.7-.5-1.2-.4-1.3.1-7.8.5-10 2.7-2.1 2.1-2.2 5.3-.7 7.7l-4.6 5.1V108c1 0 4-2 4-6 0-3.1-4-8-4.8-9-.3-.3-.8-.5-1.2-.5-.4 0-.9.2-1.2.5-.9 1-4.9 5.9-4.9 9 0 3 2.1 5.5 5.1 6.1v10.3l-5.2-5c1.4-2.4 1-5.6-1-7.7-2.2-2.2-8.8-2.6-10-2.7-.5 0-.9.1-1.2.4-.3.3-.5.7-.5 1.2.1 1.3.5 7.8 2.7 10 1.2 1.2 2.8 1.8 4.5 1.8 1.1 0 2.4-.3 3.4-.9l7.4 7.2v6.3h-28v-15h5c.9 0 2-1 2-2v-7c0-1-1-2-2-2h-16v-6h11c1 0 2-1 2-2v-7c0-1-1.1-2-2-2h-11v-6h11c1 0 2-1 2-2v-7c0-1-1-2-2-2H53c-1 0-2 1-2 2v7c0 1 1 2 2 2h10v6H53c-1 0-2 1-2 2v7c0 1 1 2 2 2h10v6H47c-1 0-2 1-2 2v7c0 1 1 2 2 2h5v15H25v-5l5.7-5.4c1 .6 2 .9 3.1.9 1.6 0 3.2-.6 4.4-1.8 2.2-2.2 2.6-8.7 2.7-10 0-.4-.1-.9-.5-1.2-.3-.3-.7-.5-1.2-.4-1.3.1-7.8.5-10 2.7-2.1 2.1-2.2 5.3-.8 7.7l-3.5 3.7V108l5.7-5.6c1 .6 2 .9 3.1.9 1.6 0 3.2-.6 4.4-1.8 2.2-2.2 2.6-8.7 2.7-10 0-.4-.1-.9-.5-1.2-.3-.3-.7-.3-1.2-.2-1.3.1-7.8.9-10 2.9-2.1 2-2.2 5-.8 7.5l-3.5 3.4V90c2-1 5-2 5-6 0-3.1-4.1-8.6-5-9.5-.6-.6-1.7-.6-2.3 0-.7.9-5.5 6.5-5.5 9.5 0 2.8 2 5.2 5 6v14l-3.3-3.5c1.4-2.4 1.1-5.5-1-7.5h-.1c-2.2-2-8.7-2.8-10-2.9-.4 0-.9 0-1.2.3-.2.3-.4.7-.4 1.1.1 1.3.5 7.8 2.7 10 1.2 1.2 2.8 1.8 4.5 1.8 1.1 0 2.4-.3 3.4-.9L22 108v12l-3.3-3.6c1.4-2.4 1-5.6-1-7.7-2.2-2.2-8.7-2.6-10-2.7-.4 0-.9.1-1.2.4-.3.3-.5.7-.5 1.2.1 1.3.5 7.8 2.7 10 1.2 1.2 2.8 1.8 4.5 1.8 1.1 0 2.4-.3 3.4-.9l5.4 5.3v5.1H6v3h189v-3h-17V123zm7.5-15.1c.7-.7 3.5-1.4 6.2-1.7-.3 2.7-.9 5.5-1.7 6.2-1.3 1.3-3.3 1.3-4.6 0-1.1-1.2-1.1-3.3.1-4.5zm-23.6 4.5c-.7-.7-1.4-3.5-1.7-6.2 2.7.3 5.5.9 6.2 1.7 1.3 1.3 1.3 3.3 0 4.6-1.2 1.2-3.3 1.2-4.5-.1zm-130.4-1.5c.7-.7 3.5-1.4 6.2-1.7-.3 2.7-.9 5.5-1.7 6.2-1.3 1.3-3.3 1.3-4.6 0-1.2-1.2-1.2-3.2.1-4.5zm0-15.9c.7-1 3.5-1.5 6.2-1.8-.3 2.7-.9 5.4-1.7 6.1-1.3 1.3-3.3 1.4-4.6.1-1.2-1.2-1.2-3.4.1-4.4zm-20.6 4.3c-.7-.7-1.4-3.4-1.7-6.1 2.7.3 5.5.8 6.2 1.8 1.3 1 1.3 3.2 0 4.4-1.2 1.3-3.3 1.2-4.5-.1zm0 16.2c-.7-.7-1.4-3.5-1.7-6.2 2.7.3 5.5.9 6.2 1.7 1.3 1.3 1.3 3.3 0 4.6-1.2 1.2-3.3 1.2-4.5-.1zm9.5-31.7c0-1 1.5-3.4 3.2-5.6 1.7 2.1 3.2 4.5 3.2 5.6 0 1.8-1.4 3.2-3.2 3.2-1.7 0-3.2-1.5-3.2-3.2zM54 77v-5h92v5H54zm12 3h67v6H66v-6zm-12 9h92v5H54v-5zm12 8h67v6H66v-6zm-18 9h103v5H48v-5zm7 23v-15h89v15H55zm117.7-27c0-1 1.5-3.4 3.2-5.6 1.7 2.1 3.2 4.5 3.2 5.6 0 1.8-1.4 3.2-3.2 3.2-1.8 0-3.2-1.4-3.2-3.2z" fill="#1E1E1E" data-color="1"></path>
                                </g>
                            </svg>
                        </div>

                    </Col>

                    <Col>
                        <div>
                            <svg style={{ width: "40px", height: "45px" }} preserveAspectRatio="xMidYMid meet" data-bbox="8.4 27.1 183.1 154" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="8.4 27.1 183.1 154" role="img"><g><path d="M188.7,138c-8.2,0-12.2,2.5-16,4.8c-3.6,2.1-7,4.1-13.6,4.1c-6.7,0-10-2-13.6-4.1c-4.3-2.6-8.5-4.8-16-4.8
                            c-8.2,0-12.2,2.5-16,4.8c-3.6,2.1-7,4.1-13.6,4.1c-6.7,0-10-2-13.6-4.1c-4.3-2.6-8.5-4.8-16-4.8c-8.2,0-12.2,2.5-16,4.8
                            c-3.6,2.1-7,4.1-13.6,4.1c-6.7,0-10-2-13.6-4.1c-4.3-2.6-8.5-4.8-16-4.8c-1.2,0-2.4,1.2-2.4,2.4s1.2,2.4,2.4,2.4
                            c6.7,0,10,2,13.6,4.1c4.3,2.6,8.5,4.8,16,4.8c8.2,0,12.2-2.5,16-4.8c3.6-2.1,7-4.1,13.6-4.1c6.7,0,10,2,13.6,4.1
                            c4.3,2.6,8.5,4.8,16,4.8c8.2,0,12.2-2.5,16-4.8l0.4-0.2c3.4-2,6.5-3.8,13.2-3.8c6.7,0,10,2,13.6,4.1c4.3,2.6,8.5,4.8,16,4.8
                            c8.2,0,12.2-2.5,16-4.8c3.6-2.1,7-4.1,13.6-4.1c1.2,0,2.4-1.2,2.4-2.4S189.9,138,188.7,138z"></path><path d="M10.9,128.4c6.7,0,10,2,13.6,4.1c4.3,2.6,8.5,4.8,16,4.8c8.2,0,12.2-2.5,16-4.8c3.6-2.1,7-4.1,13.6-4.1
                            c6.7,0,10,2,13.6,4.1c4.3,2.6,8.5,4.8,16,4.8c8.2,0,12.2-2.5,16-4.8l0.4-0.2c3.4-2,6.5-3.8,13.2-3.8c6.7,0,10,2,13.6,4.1
                            c4.3,2.6,8.5,4.8,16,4.8c8.2,0,12.2-2.5,16-4.8c3.6-2.1,7-4.1,13.6-4.1c1.2,0,2.4-1.2,2.4-2.4c0-1.2-1.2-2.4-2.4-2.4
                            c-8.2,0-12.2,2.5-16,4.8c-3.6,2.1-7,4.1-13.6,4.1c-6.7,0-9.9-2-13.5-4.1c-4.3-2.6-8.7-4.8-15.7-4.8V47.3
                            c0-11.1-10.1-20.2-21.2-20.2c-1.2,0-2.9,1.2-2.9,2.4c0,1.2,2,2.4,3.2,2.4c8.3,0,15.9,6.8,15.9,15.1v10H76v-9.7
                            c0-10.7-8.6-18.4-20.3-18.4c-1.2,0-2.5,1.2-2.5,2.4c0,1.2,1.1,2.4,2.3,2.4c4.2,0,8.3,1.3,10.7,3.4c3,2.7,4.7,6.1,4.7,9.9v76.8
                            c0,0-0.6-0.1-1.2-0.1c-8.2,0-11.9,2.5-15.8,4.8c-3.6,2.1-6.9,4.1-13.5,4.1c-6.7,0-10-2-13.6-4.1c-4.3-2.6-8.4-4.8-16-4.8
                            c-1.2,0-2.4,1.2-2.4,2.4C8.5,127.3,9.7,128.4,10.9,128.4z M76,62h49v19H76V62z M76,86h49v20H76V86z M76,111h49v13
                            c-6,0.7-8.4,2.6-11.4,4.5c-3.6,2.1-7,4.1-13.7,4.1c-6.7,0-10.4-2-14-4.1c-2.9-1.8-5.9-3.3-9.9-4.2V111z"></path><path d="M10.9,157.4c6.7,0,10,2,13.6,4.1c4.3,2.6,8.5,4.8,16,4.8c8.2,0,12.2-2.5,16-4.8c3.6-2.1,7-4.1,13.6-4.1
                            c6.7,0,10,2,13.6,4.1c4.3,2.6,8.5,4.8,16,4.8c8.2,0,12.2-2.5,16-4.8l0.4-0.2c3.4-2,6.5-3.8,13.2-3.8c6.7,0,10,2,13.6,4.1
                            c4.3,2.6,8.5,4.8,16,4.8c8.2,0,12.2-2.5,16-4.8c3.6-2.1,7-4.1,13.6-4.1c1.2,0,2.4-1.2,2.4-2.4c0-1.2-1.2-2.4-2.4-2.4
                            c-8.2,0-12.2,2.5-16,4.8c-3.6,2.1-7,4.1-13.6,4.1c-6.7,0-10-2-13.6-4.1c-4.3-2.6-8.5-4.8-16-4.8c-8.2,0-12.2,2.5-16,4.8
                            c-3.6,2.1-7,4.1-13.6,4.1c-6.7,0-10-2-13.6-4.1c-4.3-2.6-8.5-4.8-16-4.8c-8.2,0-12.2,2.5-16,4.8c-3.6,2.1-7,4.1-13.6,4.1
                            c-6.7,0-10-2-13.6-4.1c-4.3-2.6-8.5-4.8-16-4.8c-1.2,0-2.4,1.2-2.4,2.4C8.5,156.2,9.7,157.4,10.9,157.4z"></path><path d="M189.1,167.3c-8.2,0-12.2,2.5-16,4.8c-3.6,2.1-7,4.1-13.6,4.1c-6.7,0-10-2-13.6-4.1c-4.3-2.6-8.5-4.8-16-4.8
                            c-8.2,0-12.2,2.5-16,4.8c-3.6,2.1-7,4.1-13.6,4.1c-6.7,0-10-2-13.6-4.1c-4.3-2.6-8.5-4.8-16-4.8c-8.2,0-12.2,2.5-16,4.8
                            c-3.6,2.1-7,4.1-13.6,4.1s-10-2-13.6-4.1c-4.3-2.6-8.5-4.8-16-4.8c-1.2,0-2.4,1.2-2.4,2.4c0,1.2,1.2,2.4,2.4,2.4
                            c6.7,0,10,2,13.6,4.1c4.3,2.6,8.5,4.8,16,4.8c8.2,0,12.2-2.5,16-4.8c3.6-2.1,7-4.1,13.6-4.1c6.7,0,10,2,13.6,4.1
                            c4.3,2.6,8.5,4.8,16,4.8c8.2,0,12.2-2.5,16-4.8l0.4-0.2c3.4-2,6.5-3.8,13.2-3.8c6.7,0,10,2,13.6,4.1c4.3,2.6,8.5,4.8,16,4.8
                            c8.2,0,12.2-2.5,16-4.8c3.6-2.1,7-4.1,13.6-4.1c1.2,0,2.4-1.2,2.4-2.4C191.5,168.4,190.3,167.3,189.1,167.3z"></path></g>
                            </svg>
                        </div>

                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <div style={{ marginTop: "5%", font: "normal normal bold 18px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            Breakfast
                        </div>
                        <p style={{ marginTop: "8%", font: "italic normal normal 14px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>
                    </Col>
                    <Col>
                        <div style={{ marginTop: "5%", font: "normal normal bold 18px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            Garden
                        </div>
                        <p style={{ marginTop: "8%", font: "italic normal normal 14px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>
                    </Col>
                    <Col>
                        <div style={{ marginTop: "5%", font: "normal normal bold 18px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            Pool
                        </div>
                        <p style={{ marginTop: "8%", font: "italic normal normal 14px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "5%" }} className="justify-content-md-center">
                    <Col>
                        <div>
                            <svg style={{ width: "33px", height: "38px" }} preserveAspectRatio="xMidYMid meet" data-bbox="9.087 39.3 182.438 121.4" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="9.087 39.3 182.438 121.4" role="img"><g><ellipse cx="100.3" cy="154.5" rx="6.2" ry="6.2"></ellipse><path d="M190.7,77c-23.9-24.3-55.8-37.7-89.8-37.7c-34.6,0-67,13.9-91,39.1c-1.1,1.1-1.1,3,0.1,4.1c0.6,0.5,1.3,0.8,2,0.8
                            c0.8,0,1.5-0.3,2.1-0.9c22.9-24,53.8-37.3,86.8-37.3c32.5,0,62.9,12.8,85.7,36c1.1,1.1,2.9,1.1,4.1,0C191.8,80,191.8,78.2,190.7,77
                            z"></path><path d="M100.9,74.5c-25.3,0-48.8,10.2-66.2,28.8c-1.1,1.2-1,3,0.1,4.1c0.6,0.5,1.3,0.8,2,0.8c0.8,0,1.5-0.3,2.1-0.9
                            c16.3-17.4,38.3-27,62-27c23.1,0,44.7,9.1,60.8,25.7c1.1,1.1,2.9,1.2,4.1,0.1c1.1-1.1,1.2-2.9,0.1-4.1
                            C148.6,84.2,125.6,74.5,100.9,74.5z"></path><path d="M100.3,110.9c-15,0-29.6,6.4-39.8,17.5c-1.1,1.2-1,3,0.2,4.1c1.2,1.1,3,1,4.1-0.2c9.3-10.1,22-15.6,35.6-15.6
                            c13.6,0,26.3,5.5,35.6,15.6c0.6,0.6,1.3,0.9,2.1,0.9c0.7,0,1.4-0.3,2-0.8c1.2-1.1,1.2-2.9,0.2-4.1
                            C129.9,117.2,115.4,110.9,100.3,110.9z"></path></g>
                            </svg>
                        </div>

                    </Col>
                    <Col>
                        <div>
                            <svg style={{ width: "29px", height: "42px" }} preserveAspectRatio="xMidYMid meet" data-bbox="29 4.9 144 190.1" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="29 4.9 144 190.1" role="img"><g><path d="M160.2,63.5L103,44c0,0,0-4,0-4c8.6-5.4,15.6-9.8,15.6-18.6c0-9.1-7.4-16.5-16.5-16.5s-16.5,7.4-16.5,16.5
                            c0,1.5,1.2,2.6,2.6,2.6c1.5,0,2.6-1.2,2.6-2.6c0-6.2,5-11.2,11.2-11.2c6.2,0,11.2,5,11.2,11.2c0,5.6-4.4,8.7-13.3,14.3
                            c-0.2,0.1-2,1.3-2,3.3v5L42,64c-8.3,2.8-13,7.4-13,14c0,8.1,6.9,14.8,15,15v81h16v21h94V93l4,0c8.2,0,15-5.8,15-14
                            C173,72.4,168.4,66.3,160.2,63.5z M49,169v-11h74v11H49z M149,88h-21v-1.7c0-5.4,4-11.3,9-11.3c0.3,0,1.7,0,2,0
                            c5.8,0,10,5.5,10,11.3V88z M123,86.3v1.6v5.3V153H49V86c0-7.4,3.4-11,11-11h67.8C124.8,77,123,82.2,123,86.3z M149,190H65v-16h63V93
                            h21V190z M158,88l-4,0v-2c0-8.7-7-16-16-16c-0.6,0-78.2,0-78.2,0C49.8,70,44,75,44,86v2c-5.2-0.2-10-4.8-10-10
                            c0-4.3,3.2-7.4,9.4-9.5L100,48h1l57.5,20.5c6.1,2.1,9.5,6.2,9.5,10.5C168,84.3,163.3,88,158,88z"></path></g>
                            </svg>
                        </div>

                    </Col>
                    <Col>
                        <div>
                            <svg style={{ width: "34px", height: "34px" }} preserveAspectRatio="xMidYMid meet" data-bbox="16 55 170 101" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="16 55 170 101" role="img"><g><rect x="16" y="151" width="170" height="5"></rect><path d="M180.1,142.2C176.1,103,143,72.3,104,71V60h9.6c1.5,0,2.7-1,2.7-2.5c0-1.5-1.2-2.5-2.7-2.5H88.3c-1.5,0-2.7,1-2.7,2.5
                            c0,1.5,1.2,2.5,2.7,2.5H98v11c-39,1.4-72.1,32.1-76.1,71.3l-0.2,2.8h158.5L180.1,142.2z M27.7,140c5.2-36,36.8-63.7,73.3-63.7
                            S169,104,174.2,140H27.7z"></path><path d="M57.2,116.9c-0.5,0-1.1-0.2-1.5-0.5c-1.2-0.9-1.5-2.5-0.6-3.7c6.3-9,14.9-15.6,24.7-19c1.4-0.5,2.9,0.3,3.4,1.7
                            c0.5,1.4-0.3,2.9-1.7,3.4c-8.8,3-16.4,8.9-22.1,17C58.9,116.5,58,116.9,57.2,116.9z"></path></g>
                            </svg>
                        </div>

                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <div style={{ marginTop: "5%", font: "normal normal bold 18px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            Free Wifi
                        </div>
                        <p style={{ marginTop: "8%", fontSize: "14px", font: "italic normal normal 14px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>
                    </Col>
                    <Col>
                        <div style={{ marginTop: "5%", font: "normal normal bold 18px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            Daily Housekeeping
                        </div>
                        <p style={{ marginTop: "8%", fontSize: "14px", font: "italic normal normal 14px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>
                    </Col>
                    <Col>
                        <div style={{ marginTop: "5%", font: "normal normal bold 18px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            In-Room Dining Service
                        </div>
                        <p style={{ marginTop: "8%", fontSize: "14px", font: "italic normal normal 14px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>
                    </Col>
                </Row>

                <Row style={{ marginTop: "8%", marginBottom: "5%", fontSize: "26px" }} className="justify-content-md-center">
                    <Col>
                        GALLERY
                    </Col>
                </Row>

                <Row style={{ height: "756px" }} className="justify-content-md-center">
                    <Col sm={4} md={4}>
                        <div className="slide-container">
                            <Fade>
                                <div className="each-fade">
                                    <div>
                                        <img src="https://static.wixstatic.com/media/a9ff3b_cc9a75e4e2cb4a9ea1e05cd3a123de88~mv2_d_1712_2021_s_2.jpg/v1/fill/w_655,h_774,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_cc9a75e4e2cb4a9ea1e05cd3a123de88~mv2_d_1712_2021_s_2.webp" />
                                    </div>
                                </div>
                                <div className="each-fade">
                                    <div>
                                        <img src="https://static.wixstatic.com/media/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.jpg/v1/fill/w_515,h_774,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.webp" />
                                    </div>
                                </div>
                                <div className="each-fade">
                                    <div>
                                        <img src="https://static.wixstatic.com/media/84770f_dbd224713f37441a97a3ca80a111d1ad~mv2_d_2500_3742_s_4_2.jpg/v1/fill/w_517,h_774,al_c,q_85,usm_0.66_1.00_0.01/84770f_dbd224713f37441a97a3ca80a111d1ad~mv2_d_2500_3742_s_4_2.webp" />
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </Col>
                    <Col sm={4} md={4}>
                        <div className="slide-container">
                            <Fade>
                                <div className="each-fade">
                                    <div>
                                        <img src="https://static.wixstatic.com/media/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.jpg/v1/fill/w_515,h_774,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.webp" />
                                    </div>
                                </div>
                                <div className="each-fade">
                                    <div>
                                        <img src="https://static.wixstatic.com/media/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.jpg/v1/fill/w_515,h_774,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.webp" />
                                    </div>
                                </div>
                                <div className="each-fade">
                                    <div>
                                        <img src="https://static.wixstatic.com/media/a9ff3b_6211a6baeb3b468db167563342ab72a9~mv2_d_2500_3516_s_4_2.jpg/v1/fill/w_550,h_774,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_6211a6baeb3b468db167563342ab72a9~mv2_d_2500_3516_s_4_2.webp" />
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </Col>
                    <Col sm={4} md={4}>
                        <div className="slide-container">
                            <Fade>
                                <div className="each-fade">
                                    <div>
                                        <img src="https://static.wixstatic.com/media/84770f_08dda05c7973418b986a20c8a03ea696~mv2_d_2500_1666_s_2.jpg/v1/fill/w_1161,h_774,al_c,q_85,usm_0.66_1.00_0.01/84770f_08dda05c7973418b986a20c8a03ea696~mv2_d_2500_1666_s_2.webp" />
                                    </div>
                                </div>
                                <div className="each-fade">
                                    <div>
                                        <img src="https://static.wixstatic.com/media/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.jpg/v1/fill/w_515,h_774,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_cee00359e23e492d8de217a62485d03e~mv2_d_2500_3753_s_4_2.webp" />
                                    </div>
                                </div>
                                <div className="each-fade">
                                    <div>
                                        <img src="https://static.wixstatic.com/media/a9ff3b_6211a6baeb3b468db167563342ab72a9~mv2_d_2500_3516_s_4_2.jpg/v1/fill/w_550,h_774,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_6211a6baeb3b468db167563342ab72a9~mv2_d_2500_3516_s_4_2.webp" />
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8%", marginBottom: "5%", fontSize: "26px" }} className="justify-content-md-center">
                    <Col>
                        THINGS TO DO
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <div style={{ marginTop: "5%", font: "normal normal bold 18px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            Wineries Tour
                        </div>
                        <p style={{ marginTop: "8%", font: "italic normal normal 14px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>
                    </Col>
                    <Col>
                        <div style={{ marginTop: "5%", font: "normal normal bold 18px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            Cultural Sites
                        </div>
                        <p style={{ marginTop: "8%", font: "italic normal normal 14px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>
                    </Col>
                    <Col>
                        <div style={{ marginTop: "5%", font: "normal normal bold 18px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            Market Tour
                        </div>
                        <p style={{ marginTop: "8%", font: "italic normal normal 14px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "5%" }} className="justify-content-md-center">
                    <Col>
                        <div style={{ marginTop: "5%", font: "normal normal bold 18px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            Leisure Activities
                        </div>
                        <p style={{ marginTop: "8%", font: "italic normal normal 14px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>
                    </Col>
                    <Col>
                        <div style={{ marginTop: "5%", font: "normal normal bold 18px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            Birds Safari
                        </div>
                        <p style={{ marginTop: "8%", font: "italic normal normal 14px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>
                    </Col>
                    <Col>
                        <div style={{ marginTop: "5%", font: "normal normal bold 18px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            Horse Riding
                        </div>
                        <p style={{ marginTop: "8%", font: "italic normal normal 14px/1.4em brandon-grot-w01-light,sans-serif" }}>
                            I'm a paragraph. Click here to add your own text and edit me.
                        </p>
                    </Col>
                </Row>
                <Row style={{ marginTop: "5%" }} className="justify-content-md-center">
                    <Col>
                        <ParallaxProvider>
                            <ParallaxBanner
                                layers={[
                                    {
                                        children: (
                                            <Card bg="light" className="bg-light text-center">
                                                <Card.Img src="https://static.wixstatic.com/media/a9ff3b_75dfd28a431049f39b6f85be15a1820e~mv2_d_2500_1829_s_2.jpg/v1/fill/w_980,h_754,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_75dfd28a431049f39b6f85be15a1820e~mv2_d_2500_1829_s_2.webp" />
                                                <Card.ImgOverlay className="text-center d-flex flex-column justify-content-center" >
                                                    <Container>
                                                        <Row className="justify-content-md-center">
                                                            <Col style={{ paddingTop: "5%", paddingBottom: "3%", fontSize: "72px", backgroundColor: "#FFFFFF" }} sm={6}>
                                                                <Card.Title style={{ marginBottom: 24 }}><h3>GUEST REVIEW</h3></Card.Title>
                                                            </Col>
                                                        </Row>
                                                        <Row className="justify-content-md-center" >
                                                            <Col style={{ fontSize: "14px", backgroundColor: "#FFFFFF", paddingBottom: 32 }} sm={6}>
                                                            <img alt="" src="https://static.wixstatic.com/media/a9ff3b_e630dab1211b433ba1955369e2f15c16.png/v1/fill/w_26,h_22,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_e630dab1211b433ba1955369e2f15c16.webp" style={{marginTop: "5%", marginBottom: "6%", width: "21px" ,height: "25px" ,objectFit: "contain" ,objectPosition: "center center"}} />
                                                                <div style={{marginBottom: "15%" }}>
                                                                    <Slider {...settings} style={{marginBottom: "8%"}}>
                                                                        <div  >
                                                                            <p>
                                                                            I'm a paragraph. 
                                                                            Click here to add your own text and edit me. 
                                                                            I’m a great place for you to tell a story and let your users know a little more about you.”
                                                                            </p>
                                                                        </div>
                                                                        <div>
                                                                            <p>
                                                                            I'm a paragraph. 
                                                                            Click here to add your own text and edit me. 
                                                                            I’m a great place for you to tell a story and let your users know a little more about you.”
                                                                            </p>
                                                                        </div>
                                                                        <div>
                                                                            <p>
                                                                            I'm a paragraph. 
                                                                            Click here to add your own text and edit me. 
                                                                            I’m a great place for you to tell a story and let your users know a little more about you.”
                                                                            </p>
                                                                        </div>
                                                                    </Slider>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </Card.ImgOverlay>
                                            </Card>
                                        ),
                                        amount: 0.4,
                                        expanded: false
                                    }
                                ]}
                                className="custom-class"
                                style={{
                                    height: "754px",
                                    objectFit: "cover"
                                }}
                            >
                            </ParallaxBanner>
                        </ParallaxProvider>
                    </Col>
                </Row>
                <Row style={{ marginTop: "8%", marginBottom: "5%", fontSize: "26px" }} className="justify-content-md-center">
                    <Col>
                        CONTACT US
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const details1Style = { textAlign: "left", fontSize: 14, fontFamily: "brandon-grot-w01-light" };
const details2Style = { textAlign: "left", fontSize: 14, marginTop: "1px", fontFamily: "brandon-grot-w01-light" };
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
};


export default Home;
