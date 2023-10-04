"use client";

import Banner from "./component/banner";
import PromoteCard from "./component/promotecard";

export default function Home() {
  return (
    <div>
      <div className="">
        <Banner />
        <div className="flex justify-center items-center">
          <PromoteCard />
        </div>
      </div>
    </div>
  );
}
