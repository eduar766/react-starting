import React, { Component } from 'react';
import Segundo from './SegundoComponente';
import Tercero from './TercerComponente';

class Principal extends Component {
  render(){
    return(
      <div>
        <h3> Primer Componente de React </h3>
        <Segundo />
        <Tercero />
      </div>
    );
  }
}

export default Principal;
