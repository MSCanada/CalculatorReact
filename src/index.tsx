import * as React from "react";
import * as ReactDOM from "react-dom";

import { Header } from "./components/Header/Header";
import { Chart } from "./components/Chart/Chart";


ReactDOM.render(
    <div><Header statement = "SPA Developer Task"/><div><Chart /></div></div>,
    document.getElementById("example")
);