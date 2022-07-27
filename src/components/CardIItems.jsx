import React from "react";

const CardItems = ({ icon, title, description }) => {
  return (
    <article>
      <figure>{icon}</figure>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default CardItems;
