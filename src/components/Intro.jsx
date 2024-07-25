import React from 'react'

const Intro = () => {
    return (
        <>
            <div className="p-2 mt-10">
                <div className="w-full max-w-[800px] m-auto flex flex-col justify-center items-start">
                    <p className='ms-2 text-sm text-gray-900 mb-4 font-thin' >
                        Score CIMS es una aplicación que se centra en el análisis de datos para predecir el índice de mortalidad en pacientes hospitalizados debido a COVID-19.
                    </p>
                    <p className='ms-2 text-sm text-gray-900 mb-4 font-thin'>
                        Llene el formulario a continuación de acuerdo a las indicaciones:
                    </p>
                </div>
            </div>
        </>
    )
}

export default Intro
