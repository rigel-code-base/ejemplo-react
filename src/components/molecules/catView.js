import React from "react";

const catView = (props) => {
  const id = 50;

  return (
    <div className="flex items-center flex-col mt-10">
      <img src={props.imagen} alt={props.id} className="w-1/2 h-1/2" />
      <h2 className="font-bold text-4xl my-16">{"Id: " + props.id}</h2>
    </div>
  );
};

export default catView;
