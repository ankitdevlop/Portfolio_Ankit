import React from 'react'
import {  AiFillGithub} from "react-icons/ai";
import {  GrInstagram, GrMail} from "react-icons/gr";
import {  TbBrandZoom, TbDeviceLandlinePhone} from "react-icons/tb";
import {  FaLinkedin} from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";


function Contact() {
  // Function to check if an element is in the viewport
  return (
    <div id='contact' className="hidden-element" >

        <div class="flex justify-center ">

<div class="flex flex-col justify-center w-[90%]  max-w-7xl  " id='cont' data-aos="zoom-in" data-aos-duration="1000">
    <div class="flex flex-col justify-center items-center md:items-start  my-4">

        <div class="gradient-text text-3xl md:text-3xl   font-bold uppercase">Contact Us</div>
    </div>
  
    <div class="flex   flex-col items-start text-center align-middle  w-full ">
        <div class="text-2xl font-bold  my-2 ">
        </div>
        <div class="flex flex-col md:flex-row items-start md:items-center justify-start w-full md:w-3/4">
            <div class="flex m-2 md:mx-8">
            <span className='text-5xl'> <TbDeviceLandlinePhone/>   </span> 
                <div class="mx-2">
                    <div class="text-xl font-semibold ">Give us a Call</div>
                    <div class=" font-medium"><a href="tel: +917304627858" > +91 7304627858 </a></div>
                </div>
            </div>
            <div class="flex  m-2 md:mx-8">
            <span className='text-5xl'> <GrMail/>   </span> 
                <div class="mx-2">
                    <div class="text-xl font-semibold ">Send us an email</div>
                    <div class=""><a href="mailto:ankitdubey588252gmail.com"> ankitdubey58825@gmail.com  </a></div>
                </div>
            </div>
            <div class="flex  m-2 md:mx-8">
            <span className='text-5xl'> <TbBrandZoom/>   </span> 
                <div class="mx-2">
                    <div class="text-xl font-semibold ">Come see us</div>
                    <div class=" font-medium">Virtual Place On Zomm</div>
                </div>
            </div>
        </div>
    </div>

    {/*  follow on  */}
    <div class="flex   flex-col items-start text-center align-middle  w-full"  id="cont" data-aos="zoom-in" data-aos-duration="1000">
        <div class="text-2xl font-bold  my-2 ">Follow Me On 
        </div>
        <div class="flex flex-col md:flex-row items-start md:items-center justify-start w-full md:w-3/4">
            <div class="flex m-2 md:mx-8">
            <span className='text-5xl'> <a href="https://www.instagram.com/iankitd/" > <GrInstagram/> </a>  </span> 
                <div class="mx-2">
                    <div class="text-xl font-semibold ">Follow On </div>
                    <div class=" font-medium"> Vist Instagram </div>
                </div>
            </div>
            <div class="flex  m-2 md:mx-8">
     <span className='text-5xl'> <a href="https://github.com/ankitdevlop"><AiFillGithub/>  </a> </span> 
                <div class="mx-2">
                    <div class="text-xl font-semibold ">Visit Git Hub</div>
                    <div class=""> Git-Hub </div>
                </div>
            </div>
            <div class="flex  m-2 md:mx-8">
     <span className='text-5xl'> <a href="https://twitter.com/dubey9850"><FiTwitter/>  </a> </span> 
                <div class="mx-2">
                    <div class="text-xl font-semibold ">Visit Twitter</div>
                    <div class=""> Tiwtter </div>
                </div>
            </div>
            <div class="flex  m-2 md:mx-8">
            <span className='text-5xl'><a href="https://www.linkedin.com/in/ankit-dubey-799a1323a/"> <FaLinkedin/> </a>  </span> 
                <div class="mx-2">
                    <div class="text-xl font-semibold ">Visit LinkedIn</div>
                    <div class=" font-medium">LinkedIn</div>
                </div>
            </div>
        </div>
    </div>


</div>
</div>

    </div>
  )
}

export default Contact
