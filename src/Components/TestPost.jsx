import React, { useState, useEffect, useRef } from 'react';
import police from '../images/policeIcon.png';
import bank from '../images/bankIcon.png';
import pencil from '../images/pencilIcon.png';
import teacher from '../images/teacherIcon.png';
import './TestSeries.css';

const TestPost = () => {
    const [blogPosts, setBlogPosts] = useState({
        civilServices: {
            title: 'Civil Services',
            content: 'This is a blog post about Civil Services.',
            dropdowns: [
                {
                    title: 'BPSC & OTHER PCS',
                    content: 'This is the content of dropdown 1.',
                    showSubDropdown: false, 
                    subDropdowns: [
                        {
                            title: 'BPSC',
                            link: '/BPSC_Test'
                        },
                        {
                            title: 'MPSC',
                            link: '/BPSC_Test'
                        }
                    ]
                },
                {
                    title: 'UPSC',
                    content: 'This is the content of dropdown 1.',
                    showSubDropdown: false, 
                    subDropdowns: [
                        {
                            title: 'Sub Dropdown 1',
                            link: '/BPSC_Test'
                        },
                        {
                            title: 'Sub Dropdown 2',
                            link: '/BPSC_Test'
                        }
                    ]
                },
                {
                    title: 'State Comissioned Exams',
                    content: 'This is the content of dropdown 1.',
                    showSubDropdown: false, 
                    subDropdowns: [
                        {
                            title: 'Sub Dropdown 1',
                            link: '/BPSC_Test'
                        },
                        {
                            title: 'Sub Dropdown 2',
                            link: '/BPSC_Test'
                        }
                    ]
                },
            ]
        },
        defencePolice: {
            title: 'Defence & Police',
            content: 'This is a blog post about Defence & Police.',
            dropdowns: [
                {
                    title: 'UP Police(UP)',
                    content: 'This is the content of dropdown 1.',
                    showSubDropdown: false, // Add showSubDropdown property
                    subDropdowns: [
                        {
                            title: 'Sub Dropdown 1',
                            link: '/BPSC_Test'
                        },
                        {
                            title: 'Sub Dropdown 2',
                            link: '/BPSC_Test'
                        }
                    ]
                }, {
                    title: 'MP Police(MP)',
                    content: 'This is the content of dropdown 1.',
                    showSubDropdown: false, // Add showSubDropdown property
                    subDropdowns: [
                        {
                            title: 'Sub Dropdown 1',
                            link: '/BPSC_Test'
                        },
                        {
                            title: 'Sub Dropdown 2',
                            link: '/BPSC_Test'
                        }
                    ]
                },
            ]
        },
        teacher: {
            title: 'Teaching',
            content: 'This is a blog post about Defence & Police.',
            dropdowns: [
                {
                    title: 'Other TEaching Exams',
                    content: 'This is the content of dropdown 1.',
                    showSubDropdown: false, // Add showSubDropdown property
                    subDropdowns: [
                        {
                            title: 'Sub Dropdown 1',
                            link: '/BPSC_Test'
                        },
                        {
                            title: 'Sub Dropdown 2',
                            link: '/BPSC_Test'
                        }
                    ]
                },
                {
                    title: 'NTA UGC NET',
                    content: 'This is the content of dropdown 1.',
                    showSubDropdown: false, // Add showSubDropdown property
                    subDropdowns: [
                        {
                            title: 'Sub Dropdown 1',
                            link: '/BPSC_Test'
                        },
                        {
                            title: 'Sub Dropdown 2',
                            link: '/BPSC_Test'
                        }
                    ]
                },
                {
                    title: 'CSIR NET',
                    content: 'This is the content of dropdown 1.',
                    showSubDropdown: false, // Add showSubDropdown property
                    subDropdowns: [
                        {
                            title: 'Sub Dropdown 1',
                            link: '/BPSC_Test'
                        },
                        {
                            title: 'Sub Dropdown 2',
                            link: '/BPSC_Test'
                        }
                    ]
                },
            ]
        },
        bank: {
            title: 'Banking',
            content: 'This is a blog post about Defence & Police.',
            dropdowns: [
                {
                    title: 'Bank PO/Clerical',
                    content: 'This is the content of dropdown 1.',
                    showSubDropdown: false, // Add showSubDropdown property
                    subDropdowns: [
                        {
                            title: 'Sub Dropdown 1',
                            link: '/BPSC_Test'
                        },
                        {
                            title: 'Sub Dropdown 2',
                            link: 'https://example.com/subdropdown2'
                        }
                    ]
                },
                {
                    title: 'Bank Specialist Officer (SO)',
                    content: 'This is the content of dropdown 1.',
                    showSubDropdown: false, // Add showSubDropdown property
                    subDropdowns: [
                        {
                            title: 'Sub Dropdown 1',
                            link: 'https://example.com/subdropdown1'
                        },
                        {
                            title: 'Sub Dropdown 2',
                            link: 'https://example.com/subdropdown2'
                        }
                    ]
                },
            ]
        },
    });

    const [activeItem, setActiveItem] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveItem(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const handleClick = (itemKey) => {
        if (activeItem === itemKey) {
            setActiveItem(null);
        } else {
            setActiveItem(itemKey);
        }
        localStorage.setItem('activeItem', itemKey);
    };
    const toggleSubDropdown = (dropdownTitle, event) => {
        event.stopPropagation();

        const updatedBlogPosts = {
            ...blogPosts,
            [activeItem]: {
                ...blogPosts[activeItem],
                dropdowns: blogPosts[activeItem].dropdowns.map((dropdown) => {
                    if (dropdown.title === dropdownTitle) {
                        return {
                            ...dropdown,
                            showSubDropdown: !dropdown.showSubDropdown,
                        };
                    }
                    return dropdown;
                }),
            },
        };
        setBlogPosts(updatedBlogPosts);
    };



    const renderDropdowns = (dropdowns) => {
        if (!dropdowns || dropdowns.length === 0) {
            return null;
        }

        return dropdowns.map((dropdown) => (
            <div
                className={`dropdown ${activeItem === dropdown.title ? "active" : ""}`}
                key={dropdown.title}
                onClick={(event) => toggleSubDropdown(dropdown.title, event)}
            >
                <h3>{dropdown.title}</h3>
                {dropdown.showSubDropdown && (
                    <div className="sub-dropdown" onClick={(event) => event.stopPropagation()}>
                        <ul>
                            {dropdown.subDropdowns.map((subDropdown) => (
                                <li key={subDropdown.title}>
                                    <a href={subDropdown.link}>{subDropdown.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        ));
    };


    const renderSubDropdowns = (subDropdowns) => {
        if (!subDropdowns || subDropdowns.length === 0) {
            return null;
        }

        return (
            <div className="sub-dropdown">
                <ul>
                    {subDropdowns.map((subDropdown) => (
                        <li key={subDropdown.title}>
                            <a href={subDropdown.link}>{subDropdown.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    const renderBlogPost = () => {
        if (!activeItem || !blogPosts[activeItem]) {
            return null;
        }

        const { title, content, dropdowns } = blogPosts[activeItem];

        return (
            <>
                {renderDropdowns(dropdowns)} 
            </>
        );
    };


    return (
        <div className="tsec4">
            <div className="tsecHead2 tsec4Head">
                <p>Explore Services</p>
            </div>
            <div className="cardstsec4">
                <div className="servicesMain">
                    <li
                        className={activeItem === 'civilServices' ? 'active' : ''}
                        onClick={() => handleClick('civilServices')}
                    >
                        <img src={pencil} alt="" /> Civil Services
                    </li>
                    <li
                        className={activeItem === 'defencePolice' ? 'active' : ''}
                        onClick={() => handleClick('defencePolice')}
                    >
                        <img src={police} alt="" /> Defence & Police
                    </li>
                    <li
                        className={activeItem === 'teacher' ? 'active' : ''}
                        onClick={() => handleClick('teacher')}
                    >
                        <img src={teacher} alt="" /> Teacher
                    </li>
                    <li
                        className={activeItem === 'bank' ? 'active' : ''}
                        onClick={() => handleClick('bank')}
                    >
                        <img src={bank} alt="" /> Bank
                    </li>
                    {/* Add other li items here */}
                </div>
            </div>
            <div id="serviceDetails">{renderBlogPost()}</div>
        </div>
    );
};

export default TestPost;
