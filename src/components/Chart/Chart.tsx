import * as React from "react";
const ReactDOM  = require('react-dom');
import { Selector } from "./../OperatorSelector/OperatorSelector";
import { RangeSelector } from "./../RangeSelector/RangeSelector";
import './Chart.css';
import {chartProperties} from './../../Model/ChartProperties';
import {sin,cos,square,increment} from './../../Utils/CalculationUtils';
import {Line} from 'react-chartjs-2';
declare var require: any;

export interface ChartProps { compiler: string; framework: string; };
export class Chart extends React.Component<undefined, any> {
    constructor(props: any){
        super(props);
        this.state = chartProperties ;    
        console.log(this);    
    }; 
    
  [key:string]: any;
  private sin : any = sin;
  private cos : any =cos;
  private square : any =square;
  private increment : any =increment;

  private populate = (funcName : string)  : void => {
    this.emptyArray(this.state.data);
    let step = (this.state.final - this.state.initial)/45 ;
    for( var i=this.state.initial ; i<=this.state.final ; i+=step)
    {    
      this.state.data.labels.push(i);
      this.state.data.datasets[0].data.push(this[funcName](i));
    }
    this.state.data.datasets[0].label = funcName.toUpperCase() + " GRAPH" 
    this.forceUpdate();
    };


    private setRange = (initialValue : number, finalValue : number)  : void => {
     this.state.initial = initialValue;
     this.state.final = finalValue;
     this.populate(ReactDOM.findDOMNode(this.refs.selectorNode).childNodes[0].childNodes[0].value);   
    }

  
   shouldComponentUpdate(newProps: any, newState : any) {
      return true;
   };

   private emptyArray = (inputObject : any) : void => {
   inputObject.labels.splice(0,inputObject.labels.length);
   inputObject.datasets[0].data.splice(0,inputObject.datasets[0].data.length);
   }
  

    render() { 
    return(
       <div>
       <div className="sectionChart">
   		<Line data={this.state.data} redraw/>
      </div>
      <Selector ref = "selectorNode" onChange = {this.populate.bind(this)} />
      <RangeSelector onChange= {this.setRange.bind(this)}/>
      </div>            
    )
    }
}

