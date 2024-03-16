import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Btngohome = () => {
  return (
    <Link
      to="/"
      className="w-[40px] h-[40px] bg-blue-gray-500 flex justify-center items-center rounded-2xl text-white hover:scale-125  "
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
  );
};

export default Btngohome;
