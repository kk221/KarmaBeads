export default function Button({ children, variant = 'primary', ...props }) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300"
  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50",
    ghost: "bg-transparent text-purple-600 hover:bg-purple-50"
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`} 
      {...props}
    >
      {children}
    </button>
  )
}
