import Image from "next/image";
import Banner from "../../components/Banner";
import LatestFoods from "../../components/LatestFoods";
import DownloadApp from "../../components/DownloadApp";
import Achievement from "../../components/Achievement";

export default function Home() {
  return (
    <div>
      <Banner />
      <LatestFoods />
      <DownloadApp />
      <Achievement />
    </div>
  );
}
