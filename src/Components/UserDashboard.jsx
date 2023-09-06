import React, { useEffect, useState } from 'react';
import './TestSeries.css';
import './Dashboard.css';
import mainLogo from '../images/logoMain.jpg';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import slid1 from '../images/slid1.jpg';
import slid2 from '../images/slid2.png';
import slid3 from '../images/slid3.jpg';
import ad4 from '../images/ad4.jpg'
import slid4 from '../images/slid4.jpg';
import pen from '../images/pen.png';
import team from '../images/team.png';
import test from '../images/test.png';
import srch from '../images/search.png';
import tesr4current1 from '../images/current-affairs-gradient-eg.svg';
import tesr4current2 from '../images/test-gradient-eg.svg';
import tesr4current3 from '../images/news-gradient-eg.svg';
import Footer from './Footer';
import TNav from './TNav';

const handleDragStart = (e) => e.preventDefault();
const items = [
    <img src={slid1} style={{ width: 100 + "%" }} onDragStart={handleDragStart} role="presentation" />,
    <img src={slid2} style={{ width: 100 + "%" }} onDragStart={handleDragStart} role="presentation" />,
    <img src={slid3} style={{ width: 100 + "%" }} onDragStart={handleDragStart} role="presentation" />,
    <img src={slid4} style={{ width: 100 + "%" }} onDragStart={handleDragStart} role="presentation" />,
];

const item2 = [
    <img src={slid1} style={{ width: 100 + "%" }} onDragStart={handleDragStart} role="presentation" />,
    <img src={slid2} style={{ width: 100 + "%" }} onDragStart={handleDragStart} role="presentation" />,
    <img src={slid3} style={{ width: 100 + "%" }} onDragStart={handleDragStart} role="presentation" />,
    <img src={slid4} style={{ width: 100 + "%" }} onDragStart={handleDragStart} role="presentation" />,
];

const UserDashboard = () => {
    
    function clickCurrentAffairs() {
        window.location.href = '/dailyCurrentAffairs'
    }
    function clickDailyNews() {
        window.location.href = '/clickDailyNews'
    }
    return (
        <div className='UserDashboard'>
            <TNav />
            <div className="scroller">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoPlay
                    autoPlayInterval={2000}
                    disableButtonsControls
                    duration={1000}
                    fadeOutAnimation
                />
            </div>
            <div className="testSec2">
                <p>LAST DATE TO JOIN OUR 69TH BPSC PT TEST SERIES</p>
                <div className="testSec2_1">
                    <span>Perform</span>
                    <div className="verticalLine"></div>
                    <span>Analyse</span>
                    <div className="verticalLine"></div>
                    <span>Improve</span>
                </div>
            </div>

            <div className="tsec3">
                <div className="usersec">
                    <div className="use1">
                        <img src={team} alt="" />
                        <span>4,372</span>
                        <span>Users</span>
                    </div>
                    <div className="verticalLine" style={{ backgroundColor: "black", height: "6rem" }}></div>
                    <div className="use1">
                        <img src={srch} alt="" />
                        <span>92,000</span>
                        <span>Questions Attempted</span>
                    </div>
                    <div className="verticalLine" style={{ backgroundColor: "black", height: "6rem" }}></div>
                    <div className="use1">
                        <img src={pen} alt="" />
                        <span>309</span>
                        <span>Exams</span>
                    </div>
                    <div className="verticalLine" style={{ backgroundColor: "black", height: "6rem" }}></div>
                    <div className="use1">
                        <img src={test} alt="" />
                        <span>28,991</span>
                        <span>Tests</span>
                    </div>
                </div>
            </div>
            <div className="tsec4">
                <div className="tsec4Head">
                    <p>We have it all covered</p>
                </div>
                <div className="cardstsec4">
                    <div onClick={clickCurrentAffairs} className="card">
                        <img src={tesr4current1} alt="" />
                        <h4>Current Affairs</h4>
                        <p>Brief updates on all the recent happenings</p>
                    </div>
                    <div className="card">
                        <img src={tesr4current2} alt="" />
                        <h4>Explore Test Series</h4>
                        <p>The best preparation for your exams</p>
                    </div>
                    <div onClick={clickDailyNews} className="card">
                        <img src={tesr4current3} alt="" />
                        <h4>Daily News</h4>
                        <p>Daily Nugget of news for you to ponder on</p>
                    </div>
                </div>
            </div>
            <div className="tsec4">
                <div className="tsecHead2 tsec4Head">
                    <p>Popular Exams</p>
                </div>
                <div className="popularExams cardstsec4">
                    <div className="card">
                        <img src={tesr4current1} alt="" />
                        <h4>BPSC</h4>
                    </div>
                    <div className="card">
                        <img src={tesr4current1} alt="" />
                        <h4>BPSC</h4>
                    </div>
                    <div className="card">
                        <img src={tesr4current1} alt="" />
                        <h4>BPSC</h4>
                    </div>
                    <div className="card">
                        <img src={tesr4current1} alt="" />
                        <h4>BPSC</h4>
                    </div>
                    <div className="card">
                        <img src={tesr4current1} alt="" />
                        <h4>BPSC</h4>
                    </div>
                    <div className="card">
                        <img src={tesr4current1} alt="" />
                        <h4>BPSC</h4>
                    </div>
                    <div className="card">
                        <img src={tesr4current1} alt="" />
                        <h4>BPSC</h4>
                    </div>
                    <div className="card">
                        <img src={tesr4current1} alt="" />
                        <h4>BPSC</h4>
                    </div>
                    <div className="card">
                        <img src={tesr4current1} alt="" />
                        <h4>BPSC</h4>
                    </div>
                    <div className="card">
                        <img src={tesr4current1} alt="" />
                        <h4>BPSC</h4>
                    </div>
                </div>
            </div>
            <div className="tsec4">
                <div className="tsecHead2 tsec4Head">
                    <p>
                        Our Services</p>
                </div>
                <div className="cardstsec4">
                    <AliceCarousel mouseTracking items={items} autoPlay
                        autoPlayInterval={2000}
                        duration={1000}
                        fadeOutAnimation
                        disableButtonsControls />
                </div>

            </div>
            <div className="tsec4">
                <div className="tsecHead3 tsec4Head">
                    <p className='personalized'>
                        PERSONALIZED PERFORMANCE ANALYSIS</p>
                </div>
                <div className="personalizeCard cardstsec4 ">
                    <p>Get Personalized Learning Outcomes for everyone. An in-depth performance analysis, where you can know your strong and weak points, your all India rank, your state rank etc. You will also get a virtual tutor who is completely dedicated to bringing out the best in you. It will prioritize your concepts, chapters, topics, and questions through machine learning. Get this innovative learning experience only on Achivers Ias Patna Test Series!!</p>
                    <img src={ad4} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserDashboard;
