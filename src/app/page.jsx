import Image from "next/image";
import Banner from "../../components/Banner";
import LatestFoods from "../../components/LatestFoods";
import DownloadApp from "../../components/DownloadApp";

export default function Home() {
  return (
    <div>
      <Banner />
      <LatestFoods />
      <DownloadApp />
    </div>
  );
}
