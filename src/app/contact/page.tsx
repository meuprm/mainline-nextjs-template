import React from "react";

import { Background } from "@/components/background";
import Contact from "@/components/blocks/contact";

export const dynamic = 'force-dynamic';

const Page = () => {
  return (
    <Background>
      <Contact />
    </Background>
  );
};

export default Page;
