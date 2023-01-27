import React from "react";
import Image from "next/image";
import { zendesk, rakuten } from "../../../public/svgCon";

export default function Logo() {
  return (
    <>
      <section>
        {/* logo flex con */}
        <div className="flex flex-col py-20  mx-auto">
          <ul className="flex lg:flex-wrap justify-around items-center">
            <li className="mx-5">
              {" "}
              <Image
                src={
                  "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d4234885e4c2e7955fc993c_zendesk.svg"
                }
                alt="zendesk-logo"
                width={100}
                height={100}
              />
            </li>
            <li className="mx-5">
              {" "}
              <Image
                src={
                  "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5f68c5ab2b2bc1f1cce91512_rakuten-logo-black.svg"
                }
                alt="zendesk-logo"
                width={100}
                height={100}
              />
            </li>
            <li className="hidden sm:flex mx-5">
              <Image
                src={
                  "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/63601e7de4cee932ead423db_logo-nyt.svg"
                }
                alt="the-new-yourk-times-logo"
                width={200}
                height={130}
              />
            </li>
            <li className="hidden md:flex mx-5">
              <Image
                src={
                  "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/614898ff2064cdb3edb45ec0_dell-black.svg"
                }
                alt="dell-logo"
                width={100}
                height={100}
              />
            </li>
            <li className="hidden md:flex mx-5">
              <Image
                src={
                  "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5f68c62e7e087c31a302df7b_upwork-black-webclip.svg"
                }
                alt="upwork-logo"
                width={100}
                height={100}
              />
            </li>
            <li className="hidden md:flex mx-5">
              <Image
                src={
                  "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d4b269921bce7314c68055f_Page%201.svg"
                }
                alt="lattice-logo"
                width={100}
                height={100}
              />
            </li>{" "}
            <li className="bottom-5 md:relative items-start">
              <Image
                src={
                  "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/618d7c5ba338e335284bd8ce_logo-pwc.svg"
                }
                alt="pwc-logo"
                width={100}
                height={30}
              />
            </li>
            <li className="hidden md:flex mx-5">
              <Image
                src={
                  "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5d4c8b2c574a787655d450ce_getaround.svg"
                }
                alt="hellosign-logo"
                width={100}
                height={100}
              />
            </li>{" "}
            <li className="hidden lg:flex mx-5">
              <Image
                src={
                  "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/5f9880bc2c1d2a36c4cd639b_hellosign.svg"
                }
                alt="petal-logo"
                width={100}
                height={100}
              />
            </li>
            <li className="hidden lg:flex mx-5">
              <Image
                src={
                  "https://assets-global.website-files.com/5d3e265ac89f6a3e64292efc/62ed89cc58b878aa2c44aae2_logo-vice.svg"
                }
                alt="vice-logo"
                width={100}
                height={100}
              />
            </li>
          </ul>
        </div>
      </section>
      <section className="flex flex-col w-full">
        <div className="flex flex-col  justify-start w-4/5 lg:w-10/12  xl:w-3/5 mx-auto ">
          <p className="text-4xl leading-loose  tracking-wide md:text-6xl lg:text-6xl mb-10  text-left sm:text-4 sm:font-semibold font-semibold text-grayishLigh">
            Webflow is used by more than 3,500,000 designers and teams to
            create, collaborate on, and scale beautiful websites in a completely
            visual canvas —{" "}
            <span className=" text-blue-600">no coding needed.</span>
          </p>
          <p className="text-5xl lg:text-6xl font-semibold ">
            So everyone can focus on what they do best.
          </p>
        </div>
      </section>
    </>
  );
}
