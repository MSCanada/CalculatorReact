let sin = (input:number) : number => {
  return parseFloat(Math.sin(toRadians(input)).toFixed(2)) ;
}

let toDegrees = (angle:number):number => {
  return angle * (180 / Math.PI);
}

let toRadians  = (angle:number):number => {
  return angle * (Math.PI / 180);
}

let cos = (input:number) : number => {
  return parseFloat(Math.cos(toRadians(input)).toFixed(2)) ;
}

let square = (input:number) : number => {
  return input*input ;
}



let increment = (input:number) : number => {
  return input + 1 ;
}


export {sin,cos,square,increment};