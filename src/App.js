import React from 'react';
import './App.css';
import {CSSTransition} from 'react-transition-group';
import Input from './Components/Input';
import Modal from './Components/Modal';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mounted : false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.setState({mounted: true});
    console.log("In mount block");
  }

  handleSubmit = (e) => {
    this.setState({mounted: false});
    e.preventDefault();
  }
  render(){
    console.log("render");
    var child;
    if(this.state.mounted){
      child = (<Modal onSubmit={this.handleSubmit} />);
    }
    else
      child = (<div></div>);

    return(
    <div className="App">
      <CSSTransition
        classNames="example"
        timeout={500}>
          {child}
      </CSSTransition>


    </div>

    );
  }

}

export default App;
