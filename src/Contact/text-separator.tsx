import { Separator } from "@/components/ui/separator";

const TextSeparator = () => {
  return (
    <div className="w-full flex gap-2 items-center justify-center md:hidden">
      <Separator orientation="horizontal" className="w-16 bg-[#43D9AD]" />
      <span className="text-[#43D9AD]">OR</span>
      <Separator orientation="horizontal" className="w-16 bg-[#43D9AD]" />
    </div>
  );
};

export default TextSeparator;
