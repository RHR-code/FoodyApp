import Image from "next/image";
import Banner from "../../components/Banner";
import LatestFoods from "../../components/LatestFoods";

export default function Home() {
  return (
    <div>
      <Banner />
      <LatestFoods />
    </div>
  );
}
