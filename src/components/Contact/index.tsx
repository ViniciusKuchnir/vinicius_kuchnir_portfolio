import SectionTitle from "@/components/SectionTitle";
import { BsMailbox } from "react-icons/bs";

import Email from "./email";
import WhatsAppContact from "./whatsapp-contact";
import TextSeparator from "./text-separator";

const Contact = () => {
  return (
    <section className="w-full p-4 space-y-8" id="contact">
      <SectionTitle
        icon={BsMailbox}
        label="Contact"
        title="Let's have a chat!"
        centered
      />
      <div className="space-y-4 md:flex md:justify-center md:items-stretch md:space-x-10">
        <WhatsAppContact />
        <TextSeparator />
        <Email />
      </div>
    </section>
  );
};

export default Contact;
