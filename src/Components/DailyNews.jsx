import React from 'react';

import './DailyNews.css'
import TNav from './TNav';
import dailynews from './dailynewsData.json'
import Footer from './Footer';
const DailyNews = () => {
    return (
        <div className='DailyNews'>
            <TNav />
            <div className="dPart1">
                <h1 className="heading">Daily News</h1>
                <p className="subHeading">We understand you don’t have time to go through lengthy news articles everyday while studying. That’s why we deliver you all the news you need, in minute-short reads.</p>
            </div>
            <div className="part2">
                <div className="newsPost">
                    {dailynews.map((news, index) => (
                        <div onClick={(() => {
                            window.location.href = `/post/${news.id}`
                        })} className="dailynews" key={index}>
                            <div className="news">
                                <img src={news.link} alt="" />
                                <h4>{news.title}</h4>
                                <p>{news.date}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DailyNews