import React from "react";
import { IoExpandSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

interface CardDashboardProps {
  title: string;
  viewReport: string;
  url: string;
  children?: React.ReactNode;
}

export const CardDashboard: React.FC<CardDashboardProps> = ({
  title,
  url,
  viewReport,
  children,
}) => {
  return (
    <div className="flex flex-col justify-between p-4 bg-white rounded">
      <div className="flex justify-between ">
        <h2 className="font-semibold">{title}</h2>
        <Link to={`1`}>
          <IoExpandSharp />
        </Link>
      </div>
      <div className="px-4">{children}</div>
      <a href={url} className="font-semibold text-blue-500">
        {viewReport}
      </a>
    </div>
  );
};
