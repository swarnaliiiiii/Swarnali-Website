import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg'
const Button = ({className,href,onclick,children,px,white}) => {
  const classes = `button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-5'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;
  const spanClasses = "relatve z-10";
  const RenderButton = () => (
    <button className={classes}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white)}
    </button>
  );
  

  const RenderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  )

  return href ? RenderLink(): RenderButton();
};

export default Button;