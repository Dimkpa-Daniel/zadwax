import Image from "next/image";
import React from "react";

const Resources = () => {
  const resourcesData = [
    {
      title: "  Academic literature review",
      description:
        " Organize your sources and synthesize information effectively.",
    },
    {
      title: "Data analysis templates",
      description:
        "Streamline patient data collection and analysis for medical research.",
    },
    {
      title: "UX Heuristic template.",
      description:
        "Assess your interface against established usability principles.",
    },
    {
      title: "Affinity mapping template",
      description:
        "Assess your interface against established usability principles.",
    },
  ];
  return (
    <div className="mt-8">
      <h1 className="text-xl text-gray-950 font-bold sm:text-center lg:text-start">Resources for you</h1>
      {/* Cards */}
      <div className="flex items-center justify-center gap-3 flex-wrap mt-3">
        {resourcesData.map((data, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 w-full sm:w-[280px] lg:w-[215px]"
          >
            <Image
              src={"/chart-img.svg"}
              width={215}
              height={127}
              alt="Chart image"
              className=" rounded-tl-xl rounded-tr-xl w-full sm:w-[280px] lg:w-auto"
            />
            <div className="p-3">
              <h1 className="text-base font-medium text-gray-700">
                {data.title}
              </h1>
              <p className="text-xs text-gray-500 font-normal mt-2">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
