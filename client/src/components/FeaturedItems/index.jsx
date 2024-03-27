import CarouselItems from "../FeaturedItems/CarouselItems";
import { useState } from "react";
import React from "react";

const FeaturedItems = () => {
  const items = [
    {
      title: "Nvidia RTX 3080",
      description: "This is a description of the item",
      image: import("../../assets/zotac-rtx-3080.jpg"),
    },
    {
      title: "Nvidia RTX 3080",
      description: "This is a description of the item",
    //   image: require("../../assets/zotac-rtx-3080.jpg"),
    },
    {
      title: "Nvidia RTX 3080",
      description: "This is a description of the item",
    //   image: require("../../assets/zotac-rtx-3080.jpg"),
    },
  ];
  return (
    <div className="carousel">
      <div className="inner">
        {items.map((item) => {
          return <CarouselItems item={item} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedItems;
