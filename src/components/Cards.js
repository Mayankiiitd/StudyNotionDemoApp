import React, { useState } from 'react'
import Card from "./Card";

const Cards = (props) => {
  let courses= props.courses;
  let category = props.category
  const [linkedCourses, setLikedCourses] = useState([]);
  
  function getCourses() 
  {
    if(category === "All")
    {
      let allCourses = [];

      Object.values(courses).forEach(array => {
        array.forEach(coursesData => {
          allCourses.push(coursesData);
        })
      })
      return allCourses;
    }
    else
    {
      //sirf specific cat
      return courses[category];
    }
    
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course) => (
          <Card key={course.id} 
          course = {course} 
          linkedCourses={linkedCourses} 
          setLikedCourses={setLikedCourses}></Card>
        ))
      }
    </div>
  )
}

export default Cards
