import React from "react";



class App extends React.Component{
// dont have return
// have "render()"
state = {
  count: 0
}


add = () => {
  let add = 0;
  add = this.state.count+1;
  return console.log(add);
}
minus = () => {
  console.log("Minus");
}


render(){
  return (
    <div>
      <h1>The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  );
  }


}
export default App;
