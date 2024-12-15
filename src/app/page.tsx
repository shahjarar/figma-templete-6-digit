

import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import { Share } from "@/components/Share";
import Testimonal from "@/components/Testimonal";
import Image from "next/image";


export default function Home() {
  return (
   <div>
    <Navbar/>
   <Hero/>
   <Product/>
   <Testimonal/>
   <Share/>
   <Footer/>

    </div>

  )
}