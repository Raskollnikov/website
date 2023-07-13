import React from "react";
import { FaCheck } from "react-icons/fa";

function Pricing() {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="uppercase text-3xl">pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The right price for your research
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fringilla justo id nisl tincidunt, vel laoreet velit ullamcorper.
            Nunc auctor ullamcorper nisi, nec condimentum lacus porta sit amet.
            Sed nec lacus maximus, tempor mauris in, ullamcorper mauris.{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-2 ">
          <Info pricing={"59$"} about={"standard"} />
          <Info pricing={"199$"} about={"premium"} />
        </div>
      </div>
    </div>
  );
}

const Info = ({ about, pricing }) => {
  return (
    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
      <span className="uppercase px-3  py-1 rounded-2xl bg-indigo-200 text-indigo-900 text-sm">
        {about}
      </span>
      <div>
        <p className="text-6xl font-bold py-4 flex">
          {pricing}
          <span className="text-xl text-slate-600 flex flex-col justify-end">
            /mo
          </span>
        </p>
      </div>
      <p className="text-2xl py-8 text-slate-500">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="text-2xl ">
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        <button className="w-full py-4 my-4 ">Get Started</button>
      </div>
    </div>
  );
};

const Items = () => {
  return (
    <p className="py-4 flex gap-2 items-center">
      <FaCheck className="text-green-600" /> Lorem, ipsum dollar
    </p>
  );
};

export default Pricing;
