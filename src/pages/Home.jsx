import { useState } from "react"
import Button from '../components/Button'
import Card from '../components/Card'

export default function Home() {
  const [stateSatu] = useState([
    {
      nama: "sendhyrama",
      umur: 22
    },
    {
      nama: "hilman",
      umur: 21
    },
    {
      nama: "rendi",
      umur: 21
    },
    {
      nama: "jose",
      umur: 21
    },
  ])

  // function ubahState(e) {
  //   e.preventDefault()

  //   setStateSatu(stateSatu + 1)
  // }

  // function ubahVariabelBiasa(e) {
  //   e.preventDefault()

  //   variabelBiasa = variabelBiasa + 1
  //   console.log(variabelBiasa)
  // }

  return (
    <main className="w-full min-h-screen bg-gray-50 flex justify-center items-center p-20">
      <di className="w-full">
        <header>
          <h1 className="font-bold text-5xl text-pink-600">Halo dunia</h1>
        </header>
        <body>
          <div>
            <Card judul="Ini card pertama" >
              Props adalah singkatan dari properti , props itu punya fungsi sebagai data yang dapat dikirimkan ke dalam sebuah komponen sehingga komponen tersebut dapat menggunakan data yang dikirmkan.
            </Card>

            <Card judul="bldsadlapd">
              Props adalah singkatan dari properti , props itu punya fungsi sebagai data yang dapat dikirimkan ke dalam sebuah komponen sehingga komponen tersebut dapat menggunakan data yang dikirmkan.</Card>
            <Button action='delete'>
              Klik disini
            </Button>
          </div>
        </body>
      </di>
    </main>
  )
}