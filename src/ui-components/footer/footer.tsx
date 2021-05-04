import React from 'react';
import styled from 'styled-components';

export class Footer extends React.Component{
  private wrapper =  styled.div`
    width: 100%;
    height: var(--footer-size);
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;
  `

  render(){
    return (
      <this.wrapper>
        <p> I'm Footer</p>
      </this.wrapper>
    )
  }
}
