import React from "react";

const About = () => {
  return (
    <section className="bg-[url('/feature-bg.png')] bg-fixed bg-cover ">
      <div className="main-container main-spacing flex  flex-col justify-center items-center gap-5 bottom-spacing">
        <div className="text-4xl font-semibold flex items-center gap-2 ">
          What we do at <span className="text-gray-600">Sri-Enterprises</span>
        </div>
        <div className="text-lg flex flex-col justify-center items-center gap-4 ">
          <p className="text-center">
            Our core expertise lies i​n successfully executing end to end power
            and transport projects, assisting with process solutioning leading
            to competitive advantages, that have major constituents of
            liasoning, strategising, extensive documentation, notification
            updates, tendering process and tender procurement facilitation,
            contractual obligations, executing projects, and much more that is
            under the sun which relates to power projects.
          </p>
          <p className="text-center">
            Our Consulting support services covers for each micro step, from pre
            Bid stage on behalf of our clients, and extends to the macro
            deliverables of Project execution, along with significant benefits
            that gets accrued (from the govt. of India) due to the nature of
            projects.
          </p>
          <p className="text-center">
            Banking form our vast expertise in strategic consulting offerings,
            we add up immense value for organisations, by facilitating them, for
            what’s required to enable organisations to be the best at what they
            are in their core competency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
