import * as React from "react";
const Select  = require("react-select");
import 'react-select/dist/react-select.css';
import './OperatorSelector.css';
declare var require: any;
 	

export interface OperatorState { operator:string };
export interface OperatorProps { onChange:any };
export class Selector extends React.Component <OperatorProps, OperatorState> {

	constructor(props: any){
        super(props);
        this.state = { operator : "sin" };  

    };

    private options : any[] = [
      { value: 'sin', label: 'Sin' },
      { value: 'cos', label: 'Cos' },
      { value: 'square', label: 'X^2' },
      { value: 'increment', label: 'X+1' },

   ];

    componentWillMount = () : void => {
    this.props.onChange(this.state.operator);  
   };

 
   shouldComponentUpdate = (newProps: any, newState : any) :boolean => {
      return true;
   };

 

  	private updateState = (newOperator:any) : void => {     
        this.state={operator:newOperator.value};
        this.props.onChange(newOperator.value);  
    };

      render() {    
      return(
      <div className="section">
      <Select	name="form-field-name" value={this.state.operator} options={this.options} onChange={this.updateState.bind(this)}	/>
      </div>
      );
    }
}