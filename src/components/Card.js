import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import toast from 'react-hot-toast'

const Card = (props) => {
  let course = props.course;
  let linkedCourses = props.linkedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (linkedCourses.includes(course.id)) {
      //pehle se liked hai;
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.error("like remove");
    }
    else {
      //pehle se like nhi hai
      //insert karna hai ye course liked courses main
      if (linkedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }


  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative '>
        <img src={course.image.url}></img>

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute 
        right-2 bottom-[-15px] grid place-items-center'>
          <button onClick={clickHandler}>
            {
              !linkedCourses.includes(course.id) ?
                (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>) :
                (<FcLike fontSize="1.75rem"></FcLike>)
            }
          </button>
        </div>

      </div>

      <div className='p-4 '>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white '>
          {
            course.description.length > 100 ? 
            (course.description.substr(0, 100) + "...") : 
            (course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card
