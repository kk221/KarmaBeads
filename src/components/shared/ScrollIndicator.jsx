export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-[#d3ae8b] rounded-full flex items-center justify-center">
        <div className="w-1 h-2 bg-[#d3ae8b] rounded-full animate-scroll" />
      </div>
    </div>
  )
}
