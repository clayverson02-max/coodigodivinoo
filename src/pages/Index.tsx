import { Hero } from "@/components/sections/Hero";
import { WhatIs } from "@/components/sections/WhatIs";
import { Includes } from "@/components/sections/Includes";
import { ForWhom } from "@/components/sections/ForWhom";
import { Bonuses } from "@/components/sections/Bonuses";
import { Offer } from "@/components/sections/Offer";
import { Guarantee } from "@/components/sections/Guarantee";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main>
      <Hero />
      <WhatIs />
      <Includes />
      <ForWhom />
      <Bonuses />
      <Offer />
      <Guarantee />
      <Faq />
      <Footer />
    </main>
  );
};

export default Index;
