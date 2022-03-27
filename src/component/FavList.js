import React from "react";
import { CustomCard } from "./CustomCard";

export const FavList = ({ favList }) => {
  return (
    <div>
      <h4>My Fav Robo List 🐱‍🏍</h4>
      <div className="robot-list">
        {favList.map((nm, i) => (
          <CustomCard key={i} name={nm} />
        ))}
      </div>
    </div>
  );
};
