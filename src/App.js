import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './component/Card'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      numero: "",
      nom:"",
      date:"",
       
    }

}
handlechange=(e)=>{
this.setState({[e.target.name]: e.target.value})
}
PureNumber = number => {
 
  return number.replace(/\D/g ,'');
}
PureName = nom=> {
 
  return nom.replace(/\d/g ,'');
}
render(){
  
  return (
    <div className="App">
     <Card numero={this.PureNumber(this.state.numero)} name={this.PureName(this.state.nom)} date={this.PureNumber(this.state.date)} />
     <div className='form'>
          {/* <input type='number' onChange={this.handlechange} maxlength='16' name='numero' pattern='[0..9]+' placeholder='type number' /> {!this.PureNumber(this.state.numero)&&<h6>tapper numero</h6>}  */}
          <input type='text'className={(!this.PureNumber(this.state.numero)&&(this.state.numero.length>0))?'tt':null}  onChange={this.handlechange} maxlength='16' name='numero' placeholder='type number' /> {(!this.PureNumber(this.state.numero)&&(this.state.numero.length>0))?<h6>tapper numero</h6>:null}
          <input type='text' onChange={this.handlechange}  name='nom' placeholder='type name' pattern='[a..z][A..Z]+'/>
          <input type='text' onChange={this.handlechange}  maxlength='4' name='date' placeholder='type date'/>
     </div>
    </div>
  );}
}

export default App;
