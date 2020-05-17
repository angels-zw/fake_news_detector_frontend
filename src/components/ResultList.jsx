import React from "react";
import ResultItem from "./ResultItem";

export default function ResultList({ value }) {
  const { results } = value;

  return (
    <div className="container-fluid">
      {results.map((item) => {
        return <ResultItem key={item.id} item={item} />;
      })}
    </div>
  );
}
