interface IJob {
    label: string;
    text: string;
}

const Job = ({label, text}: IJob) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-base">{label}</span>
      <span className="text-3xl font-bold text-[#4D5BCE]">{text}</span>
    </div>
  );
};

export default Job;
