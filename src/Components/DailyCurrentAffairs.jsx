import React from 'react';
import TNav from './TNav';
import './Daily.css';
import blogPostsData from './blogPostsData.json'

const DailyCurrentAffairs = () => {
    return (
        <div className='dailyCurrentAffairs'>
            <TNav />
            <div className="part1">
                <h1 className="heading">Current Affairs Daily Digest</h1>
                <p className="subHeading">Stay updated with the latest happenings with our Current Affairs Daily Digest - Your daily dose of current affairs.</p>
            </div>
            <div className="part2">
                <div className="blogPostCards">
                        {blogPostsData.map((blogPost, index) => (
                            <div onClick={(()=>{
                                window.location.href = `/post/${blogPost.id}`
                            })} className="cards" key={index}>
                                <div className="cardss">
                                    <h4>{blogPost.title}</h4>
                                    <p>{blogPost.date}</p>
                                    
                                </div>
                            </div>
                        ))}

                </div>
                <div className="numberingSection">
                    {/* Numbering Section */}
                    <div className="number">1</div>
                    <div className="number">2</div>
                    <div className="number">3</div>
                    <div className="number">4</div>
                    <div className="number">5</div>
                    {/* Repeat the above number element to create more numbering */}
                </div>
            </div>
        </div>
    );
}
const BlogPost = () => {
    return (
        <div>
            <TNav />
            <h2>Blog Post</h2>
            <p>This is the content of the blog post.</p>
        </div>
    );
}

export default DailyCurrentAffairs;
