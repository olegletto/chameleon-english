import Header from "./components/header";
import { Poppins } from "next/font/google";
import FirstScreen from "./components/firstscreen";
import SecondScreen from "./components/secondscreen";
import Footer from "./components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div
      className={`flex flex-col items-center bg-[#F4F3F0] ${poppins.className}`}
    >
      <Header />
      <FirstScreen />
      <SecondScreen />
      <Footer />
    </div>
  );
}
