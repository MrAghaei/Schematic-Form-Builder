export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="cursor-pointer bg-blue-500 text-white rounded-xl p-2"
    >
      {children}
    </button>
  );
}
