import React from 'react';
import courses from '../../data/courses.json';
import './CourseDetails.css';

const CourseDetails = (props) => {
    const courseID = props.match.params.id;
    const course = courses.find(c => c.id === Number(courseID));
    console.log(course);

    return (
        <div className='course__details'>
            <div className='img__container--d'>
                    <img className='course__img--d' src={course.courseImage} alt={course.title} />
            </div>

            <div className='course__content--d'>
                <span className={course.isHot ? 'course__status' : ''}>
                    {course.isHot ? 'Hot' : null}
                </span>

                <h3 className='course__title--d'>{course.title}</h3>
                <p className='course__desc--d'>{course__desc}</p>
                <span className='course__price--d'>{course__price}</span>
                
                <div className='categories'>
                    {course.categories.map(cat => 
                    <p>{cat}</p>
                    ))}
                </div>

                <p className='course__students--d'>{courses.students}</p>
                <p className='course__students--d'>{course.publishedDate}</p>
            </div>
        </div>
    );
};

export default CourseDetails;