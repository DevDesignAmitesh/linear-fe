type ButtonProps = {
  type: "secondary" | "primary",
  label: string
}

export default function Button({ label, type }: ButtonProps) {
  return (
   <button 
    className={`text-[13px] rounded-full py-2 px-4 ${type === "secondary" ? "bg-transparent text-gray-400" : "bg-neutral-200 text-neutral-800 font-medium"}`}>
    {label}
  </button>
  )
}