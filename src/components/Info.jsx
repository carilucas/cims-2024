import { useState } from "react"


const Info = () => {

    const [toggleInfo, setToggleInfo] = useState(true);

    const handleToggle = ()=>{
        setToggleInfo(!toggleInfo)
    }

    return (
        <div className="p-2 pb-5">
            <div className="m-auto w-full max-w-[800px]">
                <button 
                    className="flex justify-between items-center w-full p-3 border-slate-200 border-[1px] rounded-md"
                    onClick={ handleToggle}
                >
                    <span className="f">¿Qué es Score CIMS?</span>
                    <svg data-accordion-icon className={`w-3 h-3 shrink-0 ${toggleInfo && 'rotate-180' }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
                {
                    toggleInfo  &&
                    <>
                    <p className="p-3 ms-2 text-sm text-gray-900 mb-4 font-thin">
                        El estudio titulado "Development and validation of a scoring system to predict mortality in patients hospitalized with COVID-19: A retrospective cohort study in two large hospitals in Ecuador" se centra en la creación y validación de un sistema de puntuación destinado a predecir la mortalidad en pacientes hospitalizados debido a COVID-19. Realizado en dos hospitales grandes en Ecuador, el estudio analizó datos de más de 5,000 pacientes, identificando características clínicas y demográficas que influyen en los resultados de salud. Los investigadores utilizaron un enfoque retrospectivo para recopilar información sobre los pacientes, lo que les permitió identificar factores de riesgo significativos asociados con la mortalidad.
                    </p>
                    <p className="p-3 ms-2 text-sm text-gray-900 mb-4 font-thin">
                        El estudio titulado "Development and validation of a scoring system to predict mortality in patients hospitalized with COVID-19: A retrospective cohort study in two large hospitals in Ecuador" se centra en la creación y validación de un sistema de puntuación destinado a predecir la mortalidad en pacientes hospitalizados debido a COVID-19. Realizado en dos hospitales grandes en Ecuador, el estudio analizó datos de más de 5,000 pacientes, identificando características clínicas y demográficas que influyen en los resultados de salud. Los investigadores utilizaron un enfoque retrospectivo para recopilar información sobre los pacientes, lo que les permitió identificar factores de riesgo significativos asociados con la mortalidad.
                    </p>
                    </>
                }
            </div>
        </div>

    )
}

export default Info
