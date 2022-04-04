import React from 'react';
import './../App.css';
import Input from './Input';


class Modal extends React.Component {
  render() {
    return(
      <div className="Modal">
        <form onSubmit= {this.props.onSubmit} className="modalForm">
          <Input
              id="name"
              type="text"
              placeholder="Jack-Edward Oliver" />
          <Input
            id="username"
            type="email"
            placeholder="mrjackolai@gmail.com" />
          <Input
            id="password"
            type="password"
            placeholder="password" />
          <button>
            Log in <i class="fa fa-solid fa-angle-right"></i>
          </button>
        </form>
      </div>
    );

  }
}

export default Modal;
//<!--<i className="fa fa-fw fa-chevron-right"></i>-->
