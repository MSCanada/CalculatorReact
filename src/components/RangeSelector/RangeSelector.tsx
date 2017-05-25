import * as React from "react";
const Slider  = require('rc-slider/dist/rc-slider');
let Range = Slider.Range ;
import 'rc-slider/assets/index.css';
import './RangeSelector.css';
declare var require: any;

export interface RangeSelectorProps { onChange:any };
export class RangeSelector extends React.Component <RangeSelectorProps, undefined> {

	private update = (value : any) : void =>{
	this.props.onChange(value[0],value[1]);  
	}

	public render() {
	 return(
	 <div className="rangeSection"><Range dots  step={90}  defaultValue={[-180, 360]} min={-180} max={360} onAfterChange={this.update.bind(this)} /></div>
	 );
	}

}