export default function Footer() {
  return (
    <div className="bg-white text-[#13322B] w-screen rounded-t-[60px] px-1 md:px-[46px] xl:px-[40px] py-8 md:py-[75px] gap-5">
      <div className="relative flex flex-col justify-center items-center w-full min-h-[350px]">
        <img
          src="./Footer-bg.svg"
          alt="Footer Background"
          className="min-w-full h-full object-cover hidden md:block"
        />
        <img
          src="./Footer-bg-vr.svg"
          alt="Footer Background"
          className="w-full h-full object-cover md:hidden"
        />
        <div className="absolute top-10 md:top-20 flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-10 xl:px-[100px] xl:mx-[115px]">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="./ChamLogo.svg"
                alt="Logo"
                className="self-start w-24 h-24 mb-4"
              />
              <h4 className="text-[22px] md:text-[32px] font-semibold md:font-medium mb-2">
                Chameleon English
              </h4>
            </div>
            <div className="flex items-center gap-4 py-10 md:py-0">
              <button className="bg-black rounded-full p-2 w-[54] h-[54] flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-gray-800 transition-all duration-300">
                <img src="./TTlogo.svg" alt="Tik Tok" width={24} height={24} />
              </button>
              <button className="bg-black rounded-full p-2 w-[54] h-[54] flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-gray-800 transition-all duration-300">
                <img
                  src="./INlogo.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </button>
              <button className="bg-black rounded-full p-2 w-[54] h-[54] flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-gray-800 transition-all duration-300">
                <img src="./YTlogo.svg" alt="YouTube" width={24} height={24} />
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full pt-10 md:pt-0 text-[#13322B]/40 px-10 xl:px-[100px] xl:mx-[115px]">
            <div className="flex flex-col md:flex-row">
              <p className="pr-4 py-2">Powered by</p>
              <a
                href="https://www.opinionatedschools.com/"
                target="_blank"
                className="underline py-2 hover:text-gray-800 transition-all duration-300"
              >
                Opinionated Schools
              </a>
            </div>
            <div className="flex flex-col md:flex-row">
              <a
                className="pr-4 py-2 hover:text-gray-800 transition-all duration-300"
                href="https://www.opinionatedschools.com/terms"
                target="_blank"
              >
                Terms & Conditions
              </a>
              <a
                className="pr-4 py-2 hover:text-gray-800 transition-all duration-300"
                href="https://www.opinionatedschools.com/privacy"
                target="_blank"
              >
                Privacy Policy
              </a>
              <p className="py-2">© 2025 Chameleon English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
