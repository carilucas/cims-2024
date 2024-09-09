import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';
import { resultado } from '../helpers/resultado';
import { alert } from '../helpers/alert';

const Form = () => {

    const { register, handleSubmit, formState: { errors }, reset, watch,setValue } = useForm(
        {
            mode:"onBlur"
        }
    );


    const onSubmit = (data) => {
        const { sexo, edad, hipoxemia, glucosa, astalt, pcr, ph, globulosBlancos } = data.form;
        const score = resultado(sexo, edad, hipoxemia, glucosa, astalt, pcr, ph, globulosBlancos);

        alert(Swal, score, reset)

    }

    const handleBlur = ()=>{
       const [ast,alt] =  watch(['form.ast','form.alt']);
       if (!errors.fom?.ast && !errors.form?.alt) {
        const razon = parseFloat(ast,2) / parseFloat(alt,2)
        if (razon > 1) {
            setValue('form.astalt',true)
        }else{

            setValue('form.astalt',false)
        }
       }
       
    }

    return (
        <div className='px-2 pb-5'>
            <div className='border-slate-200 border-[1px] p-[30px] w-full max-w-[800px] mx-auto mb-[20px] rounded-md bg-slate-200'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="sexo" className="block text-gray-900 text-sm font-bold mb-2">Sexo</label>
                    <div className="mb-4">
                        <select
                            id="sexo"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('form.sexo', {
                                required: {
                                    value: true,
                                    message: "Debe seleccionar una opción"
                                }
                            })}
                        >
                            <option value={''}>Elija una opción</option>
                            <option value="6">Hombre</option>
                            <option value="0">Mujer</option>
                        </select>
                        {
                            errors.form?.sexo &&
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{errors.form.sexo.message}</span>
                        }
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="edad">
                            Edad
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="edad"
                            type="text"
                            placeholder="Edad en números"
                            {...register("form.edad", {
                                required: {
                                    value: true,
                                    message: "Ingrese la edad del paciente"
                                },
                                pattern: {
                                    value: /^[0-9,$]*$/,
                                    message: "Ingrese solo números"
                                }
                            })}
                        />
                        {
                            errors.form?.edad &&
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{errors.form.edad.message}</span>
                        }
                    </div>
                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="hipoxemia" type="checkbox" value="" className="w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    {...register("form.hipoxemia")}
                                />
                            </div>
                            <label htmlFor="hipoxemia" className="ms-2 text-sm text-gray-900">
                                Paciente presenta Hipoxemia. (Hipoxemia se define como una Sat O₂ al ingreso &lt; 95% en Guayaquil y &lt;  92% en Quito.)
                            </label>
                        </div>
                    </div>
                    <h2 className='text-gray-900 my-5 font-bold'>Parámetros de laboratorio</h2>
                    <label htmlFor="glucosa" className="block text-gray-900 text-sm font-bold mb-2">Glucosa</label>
                    <div className="mb-6">
                        <select
                            id="glucosa"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('form.glucosa', {
                                required: {
                                    value: true,
                                    message: "Debe seleccionar una opción"
                                }
                            })}
                        >
                            <option value={''}>Elija una opción</option>
                            <option value="14">&lt; 70 mg/dL</option>
                            <option value="5">&gt; 140 mg/dL</option>
                            <option value="0">Entre 70 mg/dL y 140 mg/dL</option>
                        </select>
                        {
                            errors.form?.glucosa &&
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{errors.form.glucosa.message}</span>
                        }
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="ast">
                            Valor de AST en UI/L
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="ast"
                            type="text"
                            placeholder="Ingrese números"
                            {...register("form.ast", {
                                required: {
                                    value: true,
                                    message: "Ingrese el valor de AST en UI/L"
                                },
                                pattern: {
                                    value: /^[0-9,$]*$/,
                                    message: "Ingrese solo números, separe decimales con una coma (,)"
                                },
                                onBlur:  handleBlur,
                            })}
                        />
                        {
                            errors.form?.ast &&
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{errors.form.ast.message}</span>
                        }
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-900 text-sm font-bold mb-2" htmlFor="alt">
                            Valor de ALT en UI/L
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="alt"
                            type="text"
                            placeholder="Ingrese números"
                            {...register("form.alt", {
                                required: {
                                    value: true,
                                    message: "Ingrese el valor de ALT en UI/L"
                                },
                                pattern: {
                                    value: /^[0-9,$]*$/,
                                    message: "Ingrese solo números, separe decimales con una coma (,)"
                                },
                                onBlur:  handleBlur,
                            })}
                        />
                        {
                            errors.form?.alt &&
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{errors.form.alt.message}</span>
                        }
                    </div>
                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="astalt" type="checkbox" className="w-6 h-6 disabled:border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-900 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 disabled:accent-pink-500" 
                                    {...register("form.astalt")}

                                    onClick={(e)=>e.preventDefault()}
                                />
                            </div>
                            <label htmlFor="astalt" className=" ms-2 text-sm text-gray-900">
                                Razón AST/ALT &gt; 1
                            </label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="pcr" type="checkbox" value="" className="w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    {...register("form.pcr")}
                                />
                            </div>
                            <label htmlFor="pcr" className=" ms-2 text-sm text-gray-900">
                                Proteína C reactiva &gt; 10 mg/dL
                            </label>
                        </div>
                    </div>
                    <label htmlFor="ph" className="block text-gray-900 text-sm font-bold mb-2">Ph arterial</label>
                    <div className="mb-6">
                        <select
                            id="ph"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('form.ph', {
                                required: {
                                    value: true,
                                    message: "Debe seleccionar una opción"
                                }
                            })}
                        >
                            <option value={''}>Elija una opción</option>
                            <option value="7">&lt; 7.35</option>
                            <option value="2">&gt; 7.45</option>
                            <option value="0">Entre 7.35 y 7.45</option>
                        </select>
                        {
                            errors.form?.ph &&
                            <span className="text-[11px] text-red-800 bg-red-200 block mt-2 py-1 px-2 rounded-sm leading-3">{errors.form.ph.message}</span>
                        }
                    </div>
                    <div className="mb-6">
                        <div className="flex items-center mb-4">
                            <div className="min-w-6 flex items-center">
                                <input id="globulosBlancos" type="checkbox" value="" className="w-6 h-6 text-blue-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-400 dark:focus:ring-blue-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    {...register("form.globulosBlancos")}
                                />
                            </div>
                            <label htmlFor="globulosBlancos" className=" ms-2 text-sm text-gray-900">
                                Conteo de glóbulos blancos &gt; 10,000/µL ( &gt; 10 x 10<sup>3</sup>/uL )
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 w-full'
                    >
                        Calcular
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form
