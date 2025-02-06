export default function Button({ children, variant = 'primary', ...props }) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300"
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/25",
    secondary: "bg-purple-900/20 text-purple-100 border border-purple-500/30 hover:bg-purple-800/30",
    ghost: "bg-transparent text-purple-300 hover:bg-purple-900/20"
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
