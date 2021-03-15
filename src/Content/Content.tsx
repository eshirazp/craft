import { FunctionComponent } from "react";
import "./Content.scss";

interface IContentProps {}

const Content: FunctionComponent<IContentProps> = () => (
  <div className="contentWrapper">
    <h1 className="title">{"Intuit Craft"}</h1>
  </div>
);

export default Content;
