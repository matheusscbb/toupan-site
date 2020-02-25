import React from 'react';


const TitleComponent = (props) => {
  const { title, subtitle } = props

  return (
    <div className="TitleComponent">
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  )
}

export default TitleComponent;