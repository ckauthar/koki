import React from 'react';
import courses from '../../data/courses.json';
import './CourseList.css'
import CourseItem from '../CourseItem/CourseItem.js';

const CourseList = () => {
    if(courses.lenght === 0)
    return <div className='notItems'>no items found</div>

    // we need to use the info in the CourseItem
    // the info only available in the CourseList
    return (
        <div className='course'>
          {courses.map(course => <CourseItem key={course.id} course={course} /> )} 
        </div>
    );
};
 
export default CourseList;