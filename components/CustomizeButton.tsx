import React from "react";
import { Button } from "./ui/button";

const CostomizeButton = ({ title, className}: { title: string; className: string }) => {
  return <Button className={className}>{title}</Button>;
};

export default CostomizeButton;
