const Tags: string[] = [
  "Not a course",
  "Not a lecture",
  "Together",
  "In real time",
  "Zero theory",
  "100% speaking",
];

export default function SecondScreen() {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-start bg-white text-black w-full lg:h-screen rounded-[60px] px-4 lg:px-10 2xl:px-[140px] py-[60px] gap-5">
      <div className="w-full lg:w-1/2 h-full flex justify-center">
        <img src="/MainImage.svg" alt="MainImage" className="" />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-[32px] xl:text-[40px] font-semibold">
            Mike the Chameleon — the most theatrical English teacher on the
            internet.
          </h2>
          <p className="text-[20px] md:text-[24px] font-medium">
            The most captivating English teacher online, bringing literature to
            life with flair!
          </p>
        </div>
        <div className="flex flex-wrap gap-2 py-[60px]">
          {Tags.map((tag, index) => {
            return (
              <div
                key={index}
                className="bg-[#F4F3F0] rounded-2xl px-6 py-3 font-medium text-[14px] md:text-[18px]"
              >
                {tag.toUpperCase()}
              </div>
            );
          })}
        </div>
        <button className="bg-[#92C70F] text-gray-900 rounded-full px-8 py-4 font-medium text-[24px] cursor-pointer hover:scale-105 hover:bg-[#93c70fc3] transition-all duration-300">
          <p>Ready to speak?</p>
        </button>
      </div>
    </div>
  );
}
