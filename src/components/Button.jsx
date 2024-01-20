// eslint-disable-next-line react/prop-types
export default function Button({children = "button"}) {
  return (
    <button className="mt-10 rounded px-8 py-2 bg-orange-100 text-orange-600 font-semibold">
      {children}
    </button>
  )
}