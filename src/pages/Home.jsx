// import { useState } from "react"
import Button from '../components/Button'
import Card from '../components/Card'

export default function Home() {
  // let variabelBiasa = 1
  // const [stateSatu, setStateSatu] = useState(10)

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
    <main className="w-full min-h-screen bg-gray-50 flex justify-center items-center">
      <div>
        <header>
          <h1 className="font-bold text-5xl text-pink-600">Halo dunia</h1>
        </header>
        <body>
          <div>
            <Card judul="Ini card pertama" konten="Props adalah singkatan dari properti , props itu punya fungsi sebagai data yang dapat dikirimkan ke dalam sebuah komponen sehingga komponen tersebut dapat menggunakan data yang dikirmkan." />

            <Card judul="bldsadlapd" konten="dasjdioahdahdasod" />
            <Button>
              Klik disini
            </Button>
          </div>
        </body>
      </div>
    </main>
  )
}