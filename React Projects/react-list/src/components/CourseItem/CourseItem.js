import React from 'react';
import './CourseItem.css';
import { Link } from 'react-router-dom';

const CourseItem = (props) => {

    const course = props.course

    return (
        <div key={course.id} className='course'>
            <div className='image__container'>
                <img 
                    className='course__img' 
                    src={course.courseImage}
                    alt={course.title} 
                />
            </div>

            <Link to={'/courses/${course.id}'}>
                <h3 className='course__title m-left'>{course.title}</h3>
            </Link>
            <span className='course__author m-left'>By: {course.author}</span>
            <div className='course__price'>
                <span className='price__number'>{course.price}</span>
                <span>$</span>
            </div>

            <span className='course__status'>{course.isHot ? 'Hot' : null}</span>
        </div>
    );
};

export default CourseItem;