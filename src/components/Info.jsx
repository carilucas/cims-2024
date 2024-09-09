import { useState } from "react"


const Info = () => {

    const [toggleInfo, setToggleInfo] = useState(false);

    const handleToggle = () => {
        setToggleInfo(!toggleInfo)
    }

    return (
        <div className="p-2 pb-5">
            <div className="m-auto w-full max-w-[800px]">
                <h4 className="text-gray-900 text-sm font-bold mb-2">Descargo</h4>
                <p className="text-sm text-gray-900 mb-4 font-thin">
                    Este puntaje es una herramienta auxiliar y no reemplaza el juicio clínico. Los resultados deben interpretarse en el contexto de la situación clínica completa del paciente. Consulte siempre a un profesional de la salud calificado antes de tomar decisiones médicas basadas en estos resultados.
                </p>
            </div>
            <div className="m-auto w-full max-w-[800px]">
                <button
                    className="flex justify-between items-center w-full p-3 border-slate-200 border-[1px] rounded-md"
                    onClick={handleToggle}
                >
                    <span className="f">¿Qué es Score CIMS?</span>
                    <svg data-accordion-icon className={`w-3 h-3 shrink-0 ${toggleInfo && 'rotate-180'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
                {
                    toggleInfo &&
                    <>
                        <p className="p-3 ms-2 text-sm text-gray-900 mb-4 font-thin">
                            El estudio titulado "Development and validation of a scoring system to predict mortality in patients hospitalized with COVID-19: A retrospective cohort study in two large hospitals in Ecuador" se centra en la creación y validación de un sistema de puntuación destinado a predecir la mortalidad en pacientes hospitalizados debido a COVID-19. Realizado en dos hospitales grandes en Ecuador, el estudio analizó datos de más de 5,000 pacientes, identificando características clínicas y demográficas que influyen en los resultados de salud. Los investigadores utilizaron un enfoque retrospectivo para recopilar información sobre los pacientes, lo que les permitió identificar factores de riesgo significativos asociados con la mortalidad.
                        </p>
                    </>
                }
            </div>
            <div className="m-auto w-full max-w-[800px]">
                <h4 className="text-gray-900 text-sm font-bold mt-5 mb-2">Bibliografía científica de base:</h4>
                <p className="text-sm text-gray-900 mb-4 font-thin">
                    I. Dueñas-Espín, M. Echeverría-Mora, C. Montenegro-Fárez, M. Baldeón, L. Chantong-Villacres, H. Espejo-Cárdenas, et al., Development and validation of a scoring system to predict mortality in patients hospitalized with COVID-19: a retrospective cohort study in two large hospitals in, PLoS One. 1 (2023) 1–21. <a href="https://doi.org/10.1371/journal.pone.0288106" target="_blank" rel="noopener noreferrer">https://doi.org/10.1371/journal.pone.0288106</a>.

                </p>
            </div>
        </div>

    )
}

export default Info
