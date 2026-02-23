export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="cursor-pointer bg-gray-950 hover:bg-gray-800 transition-colors duration-300 text-white rounded-xl px-2 py-1 xl:px-4 xl:py-2 text-[10px] xl:text-[16px]"
    >
      {children}
    </button>
  );
}
