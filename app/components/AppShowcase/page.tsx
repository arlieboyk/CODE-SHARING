import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function AppShowCase() {
  return (
    <section className="relative  ">
      <div className="absolute h-4/5 left-0 right-0 bottom-0  bg-gradient-to-t from-violet-400 to-violet-400  w-full"></div>
     {/* con */}
     <div className=' mx-auto lg:w-11/12 w-full py-20'>
      <div className="relative mx-auto  w-11/12">
        <Image
          src={
            "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/620d5e541f5ff66325f45c14_designer-ui_publish.svg"
          }
          alt="vide"
          width={1500}
          height={200}
          
        />
      </div>
      <div className=" relative md:absolute  flex md:bottom-12  lg:bottom-20 bottom-6 my-10 rounded-sm md:left-6 border shadow-md shadow-gray p-3 bg-white mx-auto w-11/12 md:w-96">
        <ul role="list" className="group w-full  font-bold tracking-wider  text-grayishLigh ">
          <Link href="#">
            {" "}
            <li className="mx-5 px-5 p-3  rounded-lg hover:bg-violet-200 focus:text-blue-400">
              Designer
            </li>
          </Link>
          <Link href="#">
            {" "}
            <li className="mx-5 px-5 p-3 rounded-lg hover:bg-violet-200  focus:text-blue-400">Designer</li>
          </Link>
          <Link href="#">
            {" "}
            <li className="mx-5 px-5 p-3 rounded-lg hover:bg-violet-200 focus:text-blue-400">Designer</li>
          </Link>
        
        </ul>
      </div>
      </div>
    </section>
  );
}
