import React from 'react'

const Intro = () => {
    return (
        <>
            <div className="p-2 mt-10">
                <div className="w-full max-w-[800px] m-auto flex flex-col justify-center items-start">
                    <p className='ms-2 text-sm text-gray-900 mb-4 font-thin' >
                        Si está manejando un paciente hospitalizado con COVID-19, puede utilizar el score CIMS para evaluar el riesgo de mortalidad intrahospitalaria.
                    </p>
                    <p className='ms-2 text-sm text-gray-900 mb-4 font-thin'>
                        A continuación, se presenta el score:
                    </p>
                </div>
            </div>
        </>
    )
}

export default Intro
