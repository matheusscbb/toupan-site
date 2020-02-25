import React from 'react';

/** 
  * @Name: Botão Padrão
  * @Data: 2020
  * @Desc: Botão Padrão do Sistema. 
  * @props:
  *     
  *     className: 'Condição do botão (altera seu estilo)'
  *     disabled: true e false 
  */

const ButtonComponent = (props) => {
    const { className, disabled, children, click, hidden, type = "button" } = props;

    const values = `button ${className ? className : ''} ${disabled ? " disabled" : ""}`;

    return (
        <React.Fragment>
            <button
                disabled={disabled}
                className={values}
                onClick={click && click} hidden={hidden} type={type}>
                {children}
            </button>
        </React.Fragment>
    )
}

export default ButtonComponent;