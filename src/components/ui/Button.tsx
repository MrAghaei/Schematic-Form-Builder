export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="cursor-pointer bg-blue-500 text-white rounded-xl px-2 py-1 text-[16px]"
    >
      {children}
    </button>
  );
}
