import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-slate-700 text-white p-4 rounded-md font-medium hover:bg-slate-900"
      onClick={props.cuandoClick}
    >
      {props.texto}
    </button>
  );
};

export default Button;
