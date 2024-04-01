import { IoCodeSlashOutline } from "react-icons/io5";
import { PiStudentLight, PiBooksLight } from "react-icons/pi";
import Card from "./card";
import Job from "./job";

const Work = () => {
  return (
    <section className="border-y border-[#1E2D3D] p-4 md:space-y-5">
      <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        <Card icon={IoCodeSlashOutline} label="1 year as" text="Developer" />
        <Card icon={PiStudentLight} label="3.5 years as a" text="Student" />
        <Card icon={PiBooksLight} label="+ 4.5 years of" text="Learning" />
      </div>
      <div className="hidden md:flex w-full justify-center items-center">
        <div className="w-max flex space-x-24 md p-4 border border-[#43D9AD] rounded-2xl">
            <Job label="Developer" text="Front-end"  />
            <Job label="Dozens of projects and" text="Experinces"  />
            <Job label="Developer and" text="Freelancer"  />
        </div>
      </div>
    </section>
  );
};

export default Work;
