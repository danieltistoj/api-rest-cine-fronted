import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"

const Proyectos = () => {
  const { proyectos, alerta } = useProyectos()
  const { msg } = alerta

  return (
    <>
        <h1 className="text-4xl font-black">Peliculas</h1>

        {msg && <Alerta alerta={alerta} />}

        <div className="bg-white shadow mt-10 rounded-lg flex  flex-wrap space-x-6 px-16 py-10">
            {proyectos.length ? 
              proyectos.map(proyecto => (
                  <PreviewProyecto 
                  className=""
                      key={proyecto._id}
                      proyecto={proyecto}
                  />
              ))
            : <p className=" text-center text-gray-600 uppercase  p-5">No Existen Peliculas aún</p>}
        </div>
    </>
  )
}

export default Proyectos