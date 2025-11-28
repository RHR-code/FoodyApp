import Image from "next/image";
import Banner from "../../components/Banner";
import LatestFoods from "../../components/LatestFoods";
import DownloadApp from "../../components/DownloadApp";
import Achievement from "../../components/Achievement";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Banner />
      <LatestFoods />
      <DownloadApp />
      <Achievement />
      <NewsLetter />
    </div>
  );
}
