import * as React from "react";
import './Header.css';

export interface HeaderProps { statement: string; };
export class Header extends React.Component<HeaderProps, undefined> {
    render() {
        return <h1>{this.props.statement} </h1>;
    }
}