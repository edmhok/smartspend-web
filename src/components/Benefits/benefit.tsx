import React from "react";
import Image from "next/image";
import { benefitContent } from "../../mock/benefits";
const Benefits = () => {
  return (
    <div className="flex items-center flex-wrap justify-evenly pt-4 my-4 ">
      {benefitContent.map((benefitItem) => {
        return (
          <div
            className="flex flex-col items-center min-w-[100px] max-w-[250px] py-3 px-2"
            key={benefitItem.title}
          >
            <Image
              height={48}
              width={48}
              src={benefitItem.imgSrc}
              alt={benefitItem.title}
              className=""
            />
            <p className="py-2 text-[0.6rem] md:text-[0.75rem] lg:text-base text-palette-mute dark:text-slate-300">
              {[`${benefitItem.title}`]}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Benefits;
