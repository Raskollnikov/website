import React from "react";
import { TbPhone } from "react-icons/tb";
import { CgSupport } from "react-icons/cg";
import { HiViewGrid, HiArrowSmRight } from "react-icons/hi";

import img from "../assets/support.jpg";

function Support() {
  return (
    <div name="support" className="w-full mt-24 ">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold tpy-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            At our company, customer support is our top priority. We are
            dedicated to providing exceptional assistance and resolving any
            issues you may encounter. Our support team is available 24/7, ready
            to assist you with prompt and reliable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] flex items-center justify-center text-xl">
                <TbPhone />
              </div>
              <h3 className="font-bold text-2xl my-6 ">Sales</h3>

              <p className="text-gray-600 text-xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultricies faucibus magna, at varius erat pretium non. In hac
                habitasse platea dictumst
              </p>
            </div>

            <div className="pl-8 py-4 bg-slate-100 ">
              <p className="flex items-center text-indigo-600">
                contact us <HiArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] flex items-center justify-center text-xl">
                <CgSupport />
              </div>
              <h3 className="font-bold text-2xl my-6 ">Technical Support</h3>

              <p className="text-gray-600 text-xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultricies faucibus magna, at varius erat pretium non. In hac
                habitasse platea dictumst
              </p>
            </div>

            <div className="pl-8 py-4 bg-slate-100 ">
              <p className="flex items-center text-indigo-600">
                contact us <HiArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] flex items-center justify-center text-xl">
                <HiViewGrid />
              </div>
              <h3 className="font-bold text-2xl my-6 ">Media Inquiries</h3>

              <p className="text-gray-600 text-xl ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultricies faucibus magna, at varius erat pretium non. In hac
                habitasse platea dictumst
              </p>
            </div>

            <div className="pl-8 py-4 bg-slate-100 ">
              <p className="flex items-center text-indigo-600">
                contact us <HiArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
