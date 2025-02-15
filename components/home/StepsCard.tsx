import React from "react";

const StepsCard = () => {
  const cardData = [
    {
      title: "Getting Started",
      description: " Three simple steps to launch your first project",
      steps: [
        {
          step: "Step 1: Create your project",
          description:
            " Give your project a name, add a description and your goals.",
        },
        {
          step: "Step 2: Invite your teammates",
          description: "Research is better together, Invite your colleagues.",
        },
        {
          step: "Step 3: Setup your research process",
          description: "Add the processes that are specific to this project.",
        },
      ],
    },
    {
      title: "Research Tips and Tricks",
      description: "Three simple steps to launch your first project",
      steps: [
        {
          step: "Don’t start from scratch, use a template",
          description:
            " Begin with field-tested frameworks adaptable to your research.",
        },
        {
          step: "Add steps and set milestones",
          description:
            "Define key stages and monitor progress from hypothesis to conclusion.",
        },
        {
          step: "Track changes in your documents over time.",
          description:
            "Capture every revision to ensure data integrity and transparency.",
        },
      ],
    },
  ];
  return (
    <div className="mt-8 flex items-center flex-wrap xl:flex-nowrap justify-between gap-6 w-full">
      {cardData.map((data, index) => (
        <div key={index} className={`border border-gray-200 rounded-xl p-2 w-full xl:w-[400px]   ${index == 0 && 'xl:flex-1'}`}>
          <div className="flex items-center justify-between flex-wrap border-b border-gray-200 py-2">
            <div>
              <h1 className="text-xl text-gray-950 font-bold">{data.title}</h1>
              <p className="text-sm text-gray-700 font-normal">
                {data.description}
              </p>
            </div>
            {data.title === "Getting Started" && (
              <button className="w-full sm:w-[123px] bg-primary500 rounded-lg text-sm text-white font-bold p-2 mt-3 sm:mt-0">
                Create project
              </button>
            )}
          </div>
          {/* Steps section */}
          {data.steps.map((step, i) => (
            <div key={i} className="mt-3 ">
              <h2 className="text-base text-gray-700 font-medium">
                {step.step}
              </h2>
              <p className="text-xs text-gray-500 font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StepsCard;
