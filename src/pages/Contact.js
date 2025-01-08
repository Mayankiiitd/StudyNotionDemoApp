import React from 'react'
// import ContactBg from '../assets/love_bg.png'
import ContactBg from '../assets/bg-gradient_img_black.avif'
import toast from 'react-hot-toast';
import LocationIcon from '../assets/location.png'
import MobileIcon from '../assets/phone.png'
import MailIcon from '../assets/mail.png'


const Contact = () => {


    function submitHandler(event) {
        event.preventDefault();
        toast.success("Messege sent");
    }

    return (
        <div className=''>
            {/* top image container */}
            <div className='w-full'>
                <div className="w-full relative h-screen sm:h-[60vh] bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${ContactBg})` }}>

                    <div className="absolute top-48 left-60 w-[70%] bg-richblack-800 flex gap-10">

                        {/* left side */}

                        <div className='p-4 flex flex-col gap-10 w-[70%]'>
                            <div className=" bg-rich">
                                <p className="font-bold text-center text-richblack-5 text-[24px]">Send us a message</p>

                                <div>
                                    {/* Mail icon */}
                                </div>
                            </div>

                            <form className='contact-form ' onSubmit={submitHandler}>
                                <div className="grid gap-8 md:grid-cols-2 grid-cols-1 mb-8 text-richblack-5 items-center">
                                    <div className='text-richblack-5 flex flex-col gap-2'>
                                        <label className="text-md font-medium leading-[1.375rem] pl-1" for="name">Name<sup className='text-pink-500'>*</sup></label>
                                        <input
                                            className="bg-richblack-900 flex h-9 w-full px-3 py-1 text-base shadow-sm transition-colors file:border-0 
                            focus-visible:outline-none focus-visible:ring-ring rounded-[0.4rem] border-b-[1px] border-richblack-200"
                                            id='name'
                                            placeholder='Enter your name'
                                            type='text'
                                            name='name'
                                            required
                                        />
                                    </div>
                                    <div className='text-richblack-5 flex flex-col gap-2'>
                                        <label className="text-md font-medium leading-[1.375rem] pl-1" for="email">Email<sup className='text-pink-500'>*</sup></label>
                                        <input
                                            className="bg-richblack-900 flex h-9 w-full px-3 py-1 text-base shadow-sm transition-colors file:border-0 
                            focus-visible:outline-none focus-visible:ring-ring rounded-[0.4rem] border-b-[1px] border-richblack-200"
                                            id='email'
                                            placeholder='Enter your email'
                                            type='email'
                                            name='email'
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className="text-md font-medium leading-[1.375rem] pl-1" for="phoneNo">Phone Number <sup className='text-pink-500'>*</sup></label>
                                        <input
                                            className="bg-richblack-900 flex h-9 w-full px-3 py-1 text-base shadow-sm transition-colors file:border-0 
                            focus-visible:outline-none focus-visible:ring-ring rounded-[0.4rem] border-b-[1px] border-richblack-200"
                                            id='phoneNo'
                                            placeholder='Enter your Number'
                                            type='text'
                                            name='phoneNo'
                                            required
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className="text-md font-medium leading-[1.375rem] pl-1" for="name">Subject <sup className='text-pink-500'>*</sup></label>
                                        <input
                                            className="bg-richblack-900 flex h-9 w-full px-3 py-1 text-base shadow-sm transition-colors file:border-0 
                            focus-visible:outline-none focus-visible:ring-ring rounded-[0.4rem] border-b-[1px] border-richblack-200"
                                            id='name'
                                            placeholder='Enter your Subject'
                                            type='text'
                                            name='name'
                                            required
                                        />
                                    </div>
                                </div>

                                <div className='grid'>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-md font-medium leading-[1.375rem] pl-1 text-richblack-5" for="messege">
                                            Messege <sup className='text-pink-500'>*</sup>
                                        </label>

                                        <input
                                            className="bg-richblack-900 flex h-9 w-full px-3 py-1 text-base shadow-sm transition-colors file:border-0 
                            focus-visible:outline-none focus-visible:ring-ring rounded-[0.4rem] border-b-[1px] border-richblack-200 text-white"
                                            id='messege'
                                            placeholder='Enter your messege'
                                            type='text'
                                            name='messege'
                                            required

                                        />
                                    </div>
                                </div>

                                <div className='flex mt-2 lg:mt-0 justify-center items-center w-full'>

                                    <button className='
                        w-full
                        justify-center  font-medium
                        text-richblack-900
                        focus-visible:outline-none  bg-yellow-50 px-6 h-12 py-2 flex items-center gap-3 xl:text-xl text-lg lg:h-[2.53rem]
                        transition-all duration-300
                        rounded-[0.4rem]'>
                                        Submit
                                    </button>

                                    <svg>
                                        *
                                    </svg>

                                </div>
                            </form>
                        </div>


                        {/* Right side */}

                        <div className=" bg-[#333f90] text-[#fff] w-[40%] flex flex-col gap-10 ">

                            <div className='w-full items-start h-full flex flex-col ml-8 gap-8 mt-5'>

                                <div>
                                    <h2 className='text-3xl text-center'>Contact Information</h2>
                                </div>

                                <div className='w-full flex'>
                                    <ul className='flex flex-col gap-2 justify-center items-start'>
                                        <li className='flex gap-2 justify-start items-center'>
                                            <img src={LocationIcon}
                                                width={22}
                                                height={20}
                                            />
                                            <div className='flex flex-col justify-start items-center'>
                                                <p>123 Modern Street New Delhi, India</p>
                                            </div>
                                        </li>
                                        <li className='flex gap-2 justify-start items-center'>
                                            <img src={MobileIcon} width={20} height={20} />
                                            <div className='flex flex-col justify-center items-center'>
                                                <p>800-900-5423</p>
                                            </div>
                                        </li>
                                        <li className='flex gap-2 justify-start items-center'>
                                            <img src={MailIcon} width={18} height={20} />
                                            <div>
                                                <p>info@studynotion.com</p>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                            </div>





                            <div></div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
