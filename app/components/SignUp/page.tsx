import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="relative flex flex-col py-10 pt-20 justify-center">
      <div className="mb-6 mx-auto w-10/12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          Creative power that goes way beyond templates
        </h1>
      </div>
      {/* flex con */}
      <div className="w-full mx-auto flex flex-col-reverse md:flex-row-reverse justify-center items-center my-10 ">
        {/* first col */}
        <div className="w-10/12  mx-auto mb-10 space-y-10">
          <p className="hidden md:relative text-1xl text-left mb-6 ">
            <div></div>
            The{" "}
            <a href="#" target="_blank" className="underline">
              {" "}
              Webflow Designer
            </a>{" "}
            lets you build any website you can imagine with the full power of
            HTML, CSS, and Javascript in a visual canvas. Get
            <Link href="#" className="font-bold underline">
              {" "}
              started — it’s free
            </Link>
          </p>
          {/* card visible in largescreen */}
          <div className="shadow-xl hidden md:flex  shadow-gray-300">
            <div className="ml-6 bg-blue-500 h-9 w-9 rounded-full"> </div>{" "}
            {/* icon mimic */}
            <div className="flex flex-col p-6 space-y-3">
              <h2 className="font-bold text-blue-500">
                Create content-driven designs
              </h2>
              <p className=" font-light">
                Design your website around any type of content your site needs.
              </p>

              <p className="font-bold">Create your content</p>
            </div>
          </div>
          {/* launh */}
          <div className="font-bold flex flex-col w-full items-center justify-center ">
            <div className="flex hover:text-blue-500 w-full mx-auto  justify-center items-center border-b border-gray p-10 ">
              <span className="mr-6 rounded-full bg-blue-500 h-8 w-8 text-white text-xs"></span>
              <p>Launch custom ecomerece store</p>
            </div>
            <div className="flex hover:text-blue-500 w-full mx-auto  justify-center items-center border-b border-gray p-10">
              <span className="mr-6 rounded-full bg-blue-500 h-8 w-8 text-white text-xs"></span>
              <p>Launch custom ecomerece store</p>
            </div>
            <div className="flex hover:text-blue-500 w-full mx-auto  justify-center items-center border-b border-gray p-10">
              <span className="mr-6 rounded-full bg-blue-500 h-8 w-8 text-white text-xs"></span>
              <p>Launch custom ecomerece store</p>
            </div>
          </div>
        </div>
        {/* second col con */}
        <div className="flex flex-col justify-center items-center space-y-3">
          {/* visible in small screen */}
          <p className="md:hidden  text-1xl w-2/3 mx-auto text-left mb-6 ">
            The{" "}
            <a href="#" target="_blank" className="underline">
              {" "}
              Webflow Designer
            </a>{" "}
            lets you build any website you can imagine with the full power of
            HTML, CSS, and Javascript in a visual canvas. Get
            <Link href="#" className="font-bold underline">
              {" "}
              started — it’s free
            </Link>
          </p>
          {/* card visible in largescreen */}
          <div className="shadow-xl w-full visible md:hidden  shadow-gray-300">
            <div className="ml-6 bg-blue-500 h-9 w-9 rounded-full"> </div>{" "}
            {/* icon mimic */}
            <div className="flex flex-col p-6 space-y-3">
              <h2 className="font-bold text-blue-500">
                Create content-driven designs
              </h2>
              <p className=" font-light">
                Design your website around any type of content your site needs.
              </p>

              <p className="font-bold">Create your content</p>
            </div>
          </div>
          {/* image */}
          <div className="w-full  mx-auto bg-green-300">
            <Image
              src={
                "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/61952cc0bcba4a5fe5d99fcc_screen-lattice_2800.webp"
              }
              alt="tutorial-image"
              width={1000}
              height={1000}
              className="p-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
