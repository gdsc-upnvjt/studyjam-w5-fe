// eslint-disable-next-line react/prop-types
export default function Button({ children = "button", action = "default" }) {
  if (action === "default") {    
    return (
      <button className="mt-10 rounded px-8 py-2 bg-cyan-100 text-cyan-600 font-semibold">
        {children}
      </button>
    )
  }
  else if (action === "update") {
    return (
      <button className="mt-10 rounded px-8 py-2 bg-yellow-100 text-yellow-600 font-semibold">
        {children}
      </button>
    )
  }
  else if (action === "delete") {
    return (
      <button className="mt-10 rounded px-8 py-2 bg-red-100 text-red-600 font-semibold">
        {children}
      </button>
    )
  }
}