import React, { FC } from "react";
import { useState } from "react";
import { addRating } from "../../store/filmsSlice/filmsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import "./StarRating.css";

export interface IRating {
  i: number
}

const StarRating: FC<IRating> = ({ i }) => {

    const dispatch = useAppDispatch();
    const [hover, setHover] = useState(0);

    let rating = useAppSelector((state) => state.films.films[i].rating);

    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || Number(rating)) ? "on" : "off"}
              onClick={() => dispatch(addRating( { rating: index, id: i}))}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(Number(rating))}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };


export default StarRating;