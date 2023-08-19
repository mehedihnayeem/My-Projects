import React from "react";
import Data from "./Data";
import FAQ from "./FAQ";

export default function FAQs() {
  return (
    <div className="faq">
      {Data.map((item) => (
        <FAQ key={item.id} {...item} />
      ))}
    </div>
  );
}
