import React from "react";

export default function ResultItem({ item, value }) {
  const { url, name, headline, stance } = item;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <span className="">{url} </span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="">{name} </span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="">{headline} </span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="">{stance}</span>
      </div>
    </div>
  );
}
