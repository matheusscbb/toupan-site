import React from 'react';


const BannerLayoutContainer = ({ title, children, auxiliarClass, style }) => {
  return (
    <section className={`BannerLayoutContainer ${auxiliarClass ? auxiliarClass : ''}`}>
      <h1 style={style}>{ title }</h1>

      { children }
    </section>
  )
}

export default BannerLayoutContainer;