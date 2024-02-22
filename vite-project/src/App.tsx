import './App.css'
import tree from './imgs/tree.png'
import kids from './imgs/kids.png'
import transport from './imgs/transport.png'
import doctor from './imgs/doctor.png'
import weight from './imgs/weight.png'
import plant from './imgs/plant.png'
import shower from './imgs/shower.png'
import route from './imgs/route.png'
import Benefits from './components/benefits'
import Tab from './components/tab'

function App() {

  return (
    <>
      <div className='mx-auto sm:mx-8 content-center items-center max-w-fit'>
        <h1 className='text-primary text-center text-3xl font-semibold m-10'>Plusy</h1>
        <div className="max-w-7xl grid grid-cols-4 gap-4 lg:grid-cols-2 ">
          <Benefits icon={tree} text="1 ha soukromého lesoparku" />
          <Benefits icon={plant} text="Wellness s bazénem a saunou" />
          <Benefits icon={weight} text="Venkovní posilovna a tělocvična v interiéru" />
          <Benefits icon={shower} text="Umývárna kol a psů" />
          <Benefits icon={doctor} text="Místnost pro rodinného lékaře" />
          <Benefits icon={transport} text="Shuttle - privátní doprava" />
          <Benefits icon={kids} text="Dětský klub" />
          <Benefits icon={route} text="Přímé napojení na cyklostezku" />
        </div>
        <Tab/>
      </div>
    </>
  )
}

export default App
