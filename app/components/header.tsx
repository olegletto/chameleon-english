export default function Header() {
  return (
    <div className="z-10 fixed top-0 flex justify-between items-center py-3 px-4 md:px-10  2xl:px-[140px] w-full bg-[#E9E8E2] rounded-b-[40px] shadow-xl">
      <button className="h-[54px] md:h-[100px] w-[50px] md:w-[101px]">
        <img
          src="./ChamLogo.svg"
          alt="Chameleon English"
          className="w-full h-full"
        />
      </button>
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-black rounded-full p-2 w-[54] h-[54] flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-gray-800 transition-all duration-300">
          <img src="./TTlogo.svg" alt="Tik Tok" width={24} height={24} />
        </button>
        <button className="bg-black rounded-full p-2 w-[54] h-[54] flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-gray-800 transition-all duration-300">
          <img src="./INlogo.svg" alt="Instagram" width={24} height={24} />
        </button>
        <button className="bg-black rounded-full p-2 w-[54] h-[54] flex items-center justify-center cursor-pointer hover:scale-105 hover:bg-gray-800 transition-all duration-300">
          <img src="./YTlogo.svg" alt="YouTube" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
