const Button = ({ children, ...props }) => {
  return (
    <button className='flex-1 bg-yellow-300 px-20 py-3' {...props}>
      {children}
    </button>
  );
};

export default Button;
