import { useEffect, useState } from "react";
import getContent from "../hooks/getContent";
import Content from "./Content";

const ContentContainer = () => {
  useEffect(() => {
    const url = "intuit.com";
    getContent(url).then((response: any) => {});
  }, []);

  return Content({});
};

export default ContentContainer;
