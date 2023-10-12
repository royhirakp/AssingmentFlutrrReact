import React from "react";
import { useParams } from "react-router-dom";
const BookDisplay = () => {
  const { id } = useParams();
  return <div>book dispaly {id} </div>;
};

export default BookDisplay;
