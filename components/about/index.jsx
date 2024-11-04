import Image from "next/image";
import PersonalInfo from "./PersonalInfo";

const index = () => {
  return (
    <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
      {/* start .col and routePath image left */}
      <div className="col-span-12 md:col-span-4">
        {/* personal images for routePath page  */}
        <Image
          className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
          src="/images/about/about.jpg"
          width={300}
          height={400}
          alt="routePath"
        />
      </div>
      {/* End .col and routePath image left */}

      {/* Start about right content */}
      <div className="col-span-12 md:col-span-8 space-y-2.5">
        <div className=" md:mr-12 xl:mr-16">
          <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
            Who am i?
          </h3>
          <p className="text-gray-lite  dark:text-color-910 leading-7">
          I'm Shubham Kumar Sharma, a passionate full-stack developer with a love for traveling and photography. Creating innovative solutions through coding is my expertise, and capturing beautiful moments through my lens is my artistic escape. Exploring new places and experiencing diverse cultures fuel my creativity and inspire me to keep evolving both personally and professionally.
          </p>
        </div>

        {/* personal information */}
        <div>
          <h3 className="text-4xl font-medium my-5 dark:text-white">
            Personal Info
          </h3>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PersonalInfo />
          </div>
        </div>
        {/* End personal information */}
      </div>
      {/* End about right content */}
    </div>
  );
};

export default index;
