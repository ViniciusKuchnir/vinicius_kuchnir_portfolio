import Image from "./image";
import Presentation from "./presentation";

const AboutMe = () => {
  return (
    <section 
        id="about_me"
        className="w-full p-4 flex flex-col space-y-4 md:flex-row md:justify-center md:items-center"
    >
      <Image />
      <Presentation />
    </section>
  );
};

export default AboutMe;
