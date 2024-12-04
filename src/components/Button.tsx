type ButtonProps = {
    path: string;
    text: string;
    textColor: string;
    bgColor: string;
    bgOpacity: string;
  };
  
  const Button = ({ path, text, textColor, bgColor , bgOpacity }: ButtonProps) => {
    return (
      <a
        href={path}
        className={`inline-block rounded-[10px] px-5 py-[18px] hover:shadow-gray-900 hover:shadow-2xl text-${textColor} ${bgColor} ${bgOpacity} font-medium text-xl leading-6`}
      >
        {text}
      </a>
    );
  };
  
  export default Button;
  