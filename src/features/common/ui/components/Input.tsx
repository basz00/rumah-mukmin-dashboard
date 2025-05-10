const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="height rounded-sm border border-solid bg-white px-1 py-1.5 leading-[1.5715]"
      {...props}
    />
  );
};

export default Input;
