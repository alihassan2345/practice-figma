import Image from "next/image";
import Topheader from "./components/Topheader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import Categories from "./components/Categories";





export default function Home() {
  return (<div>
<Topheader/>
<Header/>
<Hero/>
<Sales/>
<Categories/>
</div>
  );
}
