import React from 'react'
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
import Spinner from "../components/Spinner";
import { apiUrl, filterData } from "../data";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast'

const Tutorial = () => {
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(filterData[0].title);
  
    async function fetchData() {
      setLoading(true);
      try {
        let response = await fetch(apiUrl);
        let output = await response.json();
  
        setCourses(output.data);
      }
      catch (error) {
        toast.error("Network main koi dikkat hai!");
        console.log(error)
      }
      setLoading(false);
    }
  
    useEffect(() => {
      fetchData();
    }, [])
  
    return (
      <div className='max-h-max flex flex-col bg-bgDark2'>
        {/* <din>
          <Navbar />
        </din> */}
  
        <div className='bg-bgDark2'>
          <div>
            <Filter 
            filterData={filterData} 
            category={category}
            setCategory = {setCategory}
            />
          </div>
  
          <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap
        justify-center items-center min-h-[50vh]'>
            {
              loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
            }
          </div>
        </div>
  
  
  
      </div>
    )
  
};

export default Tutorial;