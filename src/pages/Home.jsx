import { useState } from "react"
import Button from '../components/Button'
import Card from '../components/Card'

export default function Home() {

  const [valueInputBaru, setValueInputBaru] = useState("Mahasiswa")
  const [mahasiswa, setMahasiswa] = useState([
    {
      nama: "sendhyrama",
      umur: 22,
      deskripsi: "sidjiadjsaodjosaidoiiowqiodjioawjdioajdoia"
    },
    {
      nama: "hilman",
      umur: 21,
      deskripsi: "sidjiadjsaodjosaidoiiowqiodjioawjdioajdoia"
    },
    {
      nama: "rendi",
      umur: 21,
      deskripsi: "sidjiadjsaodjosaidoiiowqiodjioawjdioajdoia"
    },
    {
      nama: "jose",
      umur: 21,
      deskripsi: "sidjiadjsaodjosaidoiiowqiodjioawjdioajdoia"
    },
  ])

  return (
    <main className="w-full min-h-screen bg-gray-50 flex justify-center items-center p-20">
      <di className="w-full">
        <header>
          <h1 className="font-bold text-5xl text-pink-600">Halo dunia</h1>
        </header>
        <body>
          <div className="flex gap-2 flex-wrap">
            {mahasiswa.map((value,index) => {
              return (
                <Card judul={value.nama} key={index} buttonTitle={value.umur}>
                  {value.deskripsi}
                </Card>
              )
            })}
          </div>
          <input type="text" value={valueInputBaru} onChange={(e)=>{setValueInputBaru(e.target.value)}} />
          <Button actionOnClick={() => {
            setMahasiswa([...mahasiswa, {nama: valueInputBaru}])
          }}>
            Tambah list mahasiswa
          </Button>

          <Button action="delete" actionOnClick={() => {
            setMahasiswa(mahasiswa.filter((value) => {
              return value.nama !== "hilman" 
            }))
          }}>
            Hapus list mahasiswa
          </Button>

          <Button action="update" actionOnClick={() => {
            setMahasiswa(mahasiswa.map((value) => {
              if (value.nama === "hilman") {
                return {nama: value.nama, umur: value.umur, deskripsi: "Hilman adalah anak informatika"}
              }
              return value
            }))
          }}>
            Update
          </Button>
        </body>
      </di>
    </main>
  )
}