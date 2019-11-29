import React from 'react'
import BackgroundImage from 'gatsby-background-image'


export default function BackgroundImageComp({
  img,
  styleClass,
  title,
  children
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-center display-4">{title}</h1>
      {children}
    </BackgroundImage>
  )
}

// Default Setup
BackgroundImageComp.defaultProps = {
  title: "default title",
  styleClass: "default-background"
}