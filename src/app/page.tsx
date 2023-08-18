import Image from "next/image";
import styles from "./page.module.css";
import Card from "./component/card";
import Banner from "./component/banner";
export default function Home() {
  return (
    <div>
      <Card />
      <Banner />
    </div>
  );
}
