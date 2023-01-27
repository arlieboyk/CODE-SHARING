import React from "react";
import Image from "next/image";
import logo from "/public/vercel.svg";
import Link from "next/link";
import Logo from './components/Logos/page'
import AppShowcase from './components/AppShowcase/page'
import SignUp from './components/SignUp/page'
export default function page() {
  return (
    <main className="  bg-grayish">
      {/* flex con */}
      <div className="flex flex-col justify-between w-full md:w-11/12 xl:w-4/5 m-auto self-center space-y-10 ">
        {/* get started section */}
        <div className="hidden md:flex py-9 px-6 justify-between md:p-9  items-center">
          <div>
            <Link href={"/"}>
              <span className="text-gray-50 hover:text-blue-500 font-bold text-xl font-sans">
                webflow
              </span>
            </Link>
          </div>
          {/* login,buttons */}
          <div className="text-xs space-x-3 ">
            <Link href={"#"}>
              {" "}
              <span className="text-gray-50 hover:text-gray-400 font-semibold">
                Log in
              </span>{" "}
            </Link>
            <Link href={"#"}>
              {" "}
              <span className="px-5 p-3  font-semibold bg-grayishLigh hover:bg-gray-800 text-gray-50">
                Contact sales
              </span>
            </Link>
            <Link href={"#"}>
              <span className="px-5 p-3 text-grayish  font-semibold bg-gray-50 hover:bg-gray-100 ">
                Get started - it's free
              </span>
            </Link>
          </div>
        </div>
        {/* slogan */}
        <div className="text-gray-50 px-9 my-10 sm:w-10/12 sm:justify-center m-auto md:w-full  text-left flex flex-col sm:flex-row  ">
          <div className=" w-2/3 sm:w-3/5  md:w-full xl:w-10/12 ">
            <h1 className="text-4xl md:text-7xl lg:text-7xl ml-0 xl:text-9xl  lg:ml-10 tracking-wider font-semibold text-left">
              The site you want — whout the dev time
            </h1>
          </div>

          <div className="flex lg:ml-9  md:self-end self-start text-left flex-col p-2 space-y-5">
            <h2 className="tracking-tight font-semibold text-lg w-56">
              Your website should be a market be a marketing, not an enginerring
              challenge.
            </h2>

            <button className="font-semibold self-start text-md h-16 w-44 px-6 p-4  hover:bg-blue-700 bg-blue-600">
              Start building
            </button>
          </div>
        </div>
        {/* video */}
        
      </div>
      <section>
      <div className="flex justify-center h-full full p-10 mb-10">
          <Image
            src={
              'https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/61952cc0bcba4a5fe5d99fcc_screen-lattice_2800.webp'
            }
            alt="vide"
            width={1000}
            height={100}
            className=' rounded-md'
          />
          {/*           <Image src={'https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/620d5e541f5ff66325f45c14_designer-ui_publish.svg'} alt='vide'  width={1000} height={1000} />
           */}
        </div>
      </section>
      <section className='bg-white'>
        <Logo />
      </section>
      <section className='bg-white'>
        <AppShowcase />
      </section>
      <section className='bg-white'>
        < SignUp/>
      </section>
    </main>
  );
}
/* 
<img
  src="https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/61952cc0bcba4a5fe5d99fcc_screen-lattice_2800.webp"
  loading="eager"
  sizes="(max-width: 767px) 100vw, 92vw"
  srcset="https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/61952cc0bcba4a5fe5d99fcc_screen-lattice_2800-p-500.webp 500w, https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/61952cc0bcba4a5fe5d99fcc_screen-lattice_2800-p-800.webp 800w, https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/61952cc0bcba4a5fe5d99fcc_screen-lattice_2800.webp 2800w"
  alt=""
  class="header_designer-site cc-first"
  style="will-change: opacity; opacity: 1;"
></img>;
 */