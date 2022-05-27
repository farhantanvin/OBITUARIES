import React from "react";
import CoverImg from "../../assets/books/Obituary Book Golden cover.svg";
export const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <img src={CoverImg} alt="cover-page"></img>
      </div>
    </div>
  );
});
