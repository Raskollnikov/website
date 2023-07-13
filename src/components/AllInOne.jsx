import React from "react";
import { FaCheck } from "react-icons/fa";

function AllInOne() {
  const boxes = [
    {
      title: "notifications",
      description:
        "maximus, tempor mauris in, ullamcorper mauris. Nulla facilisi. Lorem ipsum dolor",
    },
    {
      title: "notifications",
      description:
        "maximus, tempor mauris in, ullamcorper mauris. Nulla facilisi. Lorem ipsum dolor",
    },
    {
      title: "notifications",
      description:
        "maximus, tempor mauris in, ullamcorper mauris. Nulla facilisi. Lorem ipsum dolor",
    },
    {
      title: "notifications",
      description:
        "maximus, tempor mauris in, ullamcorper mauris. Nulla facilisi. Lorem ipsum dolor",
    },
    {
      title: "notifications",
      description:
        "maximus, tempor mauris in, ullamcorper mauris. Nulla facilisi. Lorem ipsum dolor",
    },
    {
      title: "notifications",
      description:
        "maximus, tempor mauris in, ullamcorper mauris. Nulla facilisi. Lorem ipsum dolor",
    },
    {
      title: "notifications",
      description:
        "maximus, tempor mauris in, ullamcorper mauris. Nulla facilisi. Lorem ipsum dolor",
    },
    {
      title: "notifications",
      description:
        "maximus, tempor mauris in, ullamcorper mauris. Nulla facilisi. Lorem ipsum dolor",
    },
    // Add more box objects as needed
  ];

  return (
    <div name="platforms" className="w-full mt-32 mb-20">
      <div className="max-w-[1240px] m-auto px-2">
        <h1 className="text-5xl font-bold text-center">All-In-One</h1>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          justo id nisl tincidunt, vel laoreet velit ullamcorper. Nunc auctor
          ullamcorper nisi, nec condimentum lacus porta sit amet. Sed nec lacus
          maximus, tempor mauris in, ullamcorper mauris. Nulla facilisi.
        </p>

        <div className="grid gap-5 pt-5 sm:grid-cols-2 lg:grid-cols-4 ">
          {boxes.map((box, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex gap-2 ">
                <FaCheck className="text-lime-500 text-xl" />

                <h3 className="font-bold text-lg">{box.title}</h3>
              </div>

              <div className="flex justify-center">
                <p className="text-xl pt-2 pb-4 text-gray-500">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllInOne;
