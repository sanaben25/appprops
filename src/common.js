import React from "react";

export const Photo = (props) => {
    return <img src={ props.src }  />;
  };
  export const Title = (props) => {
    return <h1>{props.children}</h1>;
  };

