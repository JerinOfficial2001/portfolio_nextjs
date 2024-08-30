import React from "react";

export default function FlipCard({ front, back, normal }) {
  return (
    <>
      {normal ? (
        front
      ) : (
        <div className="flipcard">
          <div className="content">
            <div className="front">{front}</div>
            <div className="back">{back}</div>
          </div>
        </div>
      )}
    </>
  );
}
