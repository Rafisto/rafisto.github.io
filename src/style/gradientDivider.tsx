import React from 'react'

const AppColors = {
  primary: '#3f4756',
  secondary: '#009bff',
  secondaryLight: '#00bcff',
  text: '#a3acbd',
}

const gradientDividerStyle = {
    background: `linear-gradient(to right, ${AppColors.secondary}, ${AppColors.secondaryLight})`,
    height: '1px',
    border: '0',
    margin: 'auto',
    width: '100%',
    maskImage: 'linear-gradient(to left, rgba(0, 0, 0, 00), rgba(0, 0, 0, 1)), linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
    maskSize: '100% 50%',
    maskRepeat: 'no-repeat',
    maskPosition: 'left top, left bottom',
}

const GradientDivider = () => {
  return (
    <hr style={gradientDividerStyle}/>
  )
}

export default GradientDivider