/* eslint-disable react/prop-types */
import Button from './Button'

export default function Card({ judul = "judul default", konten }) {
  return (
    <div className="bg-white shadow-md flex flex-col justify-center items-center p-16 rounded-sm mt-10">
      <h4 className='text-2xl font-bold'>{judul}</h4>
      <p>
        {konten}
      </p>
      <Button />
    </div>
  )
}