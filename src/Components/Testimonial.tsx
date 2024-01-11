import React from "react";
import Image from "next/image";
import user from "../img/pg.jpeg";
const Testimonial = () => {
  return (
    <div>
      <div className=" container pt-16 pb-16">
        <h2 className="font-medium text-2xl pb-4">Textimonials</h2>
        <div className="grid lg:grid-cols-[300px,fr] gap-4">
          <div className="border border-gray-300 rounded-2xl  grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1">
              <Image
                className="rounded-full inline-block h-20 w-20 mt-1"
                src={user}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
