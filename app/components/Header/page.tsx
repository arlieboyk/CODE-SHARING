"use client";
import "/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Vercel from "/public/vercel.svg";
if (typeof window !== "undefined") {
  const toggleBtn = document.getElementById("open-button");
  const closeBtn = document.getElementById("close-button");
  const header = document.getElementById("header");
  const debug = document.getElementById("debug");

  if (debug !== null) {
    debug?.classList.add("text-white");
  } else if (debug !== null) {
  }

  if (header !== null) {
    debug?.classList.add("bg-blue-400");
    console.log("has");
  } else {
    console.log("dosnt");
    debug?.classList.add("bg-red-400");
  }

 
  /* check if exist */
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const dropdown = document.getElementById("dropdown-container");
      /* check if exist */
      if (dropdown) {
        dropdown.classList.toggle("flex");
        dropdown.classList.toggle("hidden");
        console.log("toggle clicked");
      } else console.log("null");
    });
  } else {
    console.log("null btn");
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      const dropdown = document.getElementById("dropdown-container");
      if (dropdown) {
        dropdown.classList.toggle("flex");
        dropdown.classList.toggle("hidden");
        console.log("close clicked");
      } else {
        console.log("null");
      }
    });
  } else {
    console.log("null close");
  }
}

export default function page() {
  return (
    <>
      <header id="header" className='sticky top-0  w-full'>
        <nav className="flex px-10  h-20 font-semibold w-auto justify-between items-center  bg-white">
          <Link href={"/"}>
            {" "}
            <Image
              src={Vercel}
              className="hover:scale-105"
              alt="logo"
              height={120}
              width={120}
            />
            {/* uncomment to check if header is not null */}
           {/*  <div id="debug" className="p-5 w-24 bg-gray-100">
              DEBUG
            </div> */}
          </Link>
          <div
            id="navbarLinks"
            className="hidden md:flex space-x-6 underline-offset-2 text-grayish"
          >
            <Link href={"/todos"}>
              <p className=" hover:text-black hover:scale-105">Todo-List</p>
            </Link>
            <Link
              href={"/search"}
              className=" hover:text-black hover:scale-105"
            >
              Search
            </Link>
            <Link
              href={"/search"}
              className=" hover:text-black hover:scale-105 "
            >
              About
            </Link>
            <Image
              src={Vercel}
              className="hover:scale-105"
              alt="logo"
              height={100}
              width={100}
            />
          </div>
          <button
            id="open-button"
            className="flex flex-col h-5 w-8 justify-between  md:hidden"
          >
            <span id="bar" className="h-1 w-full bg-grayish "></span>
            <span id="bar" className="h-1 w-full bg-grayish "></span>
            <span id="bar" className="h-1  w-full bg-grayish "></span>
          </button>
          {/* close button */}
          <button
            id="close-button"
            className=" flex flex-col h-5 w-8 justify-between  md:hidden"
          >
            <span className="font-bold text-3xl">X</span>
          </button>
        </nav>
        {/* dropdown */}
        <div className=" md:hidden" id="dropdown-parent">
          <div
            id="dropdown-container"
            className="sticky  flex-col  justify-center items-center mt-2 w-11/12 mx-auto rounded-lg bg-white overflow-hidden"
          >
            <Link
              href="/"
              className="py-2 px-4 w-full block text-gray-ish hover:text-white hover:bg-blue-500"
            >
              Home
            </Link>
            <Link
              href="/search"
              className="py-2 px-4 w-full block text-gray-ish hover:text-white hover:bg-blue-500"
            >
              Search Engine
            </Link>
            <Link
              href="todos"
              className="py-2 px-4 w-full block text-gray-ish hover:text-white hover:bg-blue-500"
            >
              Todo List
            </Link>{" "}
            <a
              href=""
              className="py-2 px-4 w-full block text-gray-ish hover:text-white hover:bg-blue-500"
            >
              Log out
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
