const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat leading-none text-white">
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 h-5 w-5 rounded-full"
      />
    </button>
  );
};

export default Button;