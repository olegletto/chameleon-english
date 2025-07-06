export default function FirstScreen() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F4F3F0] w-full mt-[80px] md:mt-[132px] py-10 2xl:px-[140px]">
      <h1 className="text-[48px] font-semibold lg:text-[136px] md:font-bold text-center">
        Cha
        <span className="relative inline-block">
          m
          <img
            src="./chameleon.svg"
            alt="Chameleon"
            className="absolute top-10 left-0 hidden lg:block"
          />
        </span>
        eleon English
      </h1>
    </div>
  );
}
