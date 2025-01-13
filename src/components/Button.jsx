import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'
const Button = ({className,href,onclick,children,px,white}) => {
  const classes = `button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-5'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;
  const RenderButton = () => (
    <button className={classes}>
        <span>{children}</span>
        {ButtonSvg(white)}
    </button>
  );
  return RenderButton();
};

export default Button;