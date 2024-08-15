
export const alert = (Swal, score, reset) => {
    score < 31
        ?
        Swal.fire({
            title: "Resultados",
            html: `
            <div>
                <div class="flex items-center justify-center mb-3">
                        <img class="w-[100px]" src="./02-caution.svg"/>
                </div>
                <div class="text-sm">
                    <p>
                        <b>El score del paciente es:</b> ${score}
                    </p>
                    <p>
                        <b>Riesgo de mortalidad:</b>Moderado
                    </p>
                    <p>
                        <b>Mortalidad</b>: 35 por 10,000 personas-día.
                    </p>          
                    <p class="text-[11px] mt-5 leading-3">
                        Esto indica que los pacientes en esta tercera categoría tienen un riesgo de fallecimiento intrahospitalario relativamente bajo.
                    </p>          
                </div>
            </div>
        `,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Nueva evaluación"
        }).then((result) => {
            if (result.isConfirmed) {
                reset({
                    form: {
                        sexo: "",
                        edad: "",
                        hipoxemia: false,
                        glucosa: '',
                        ast: "",
                        alt: "",
                        astalt: false,
                        pcr: false,
                        ph: '',
                        globulosBlancos: false
                    }
                });
            }
        })
        :
        (score >= 31 && score < 66)
            ?
            Swal.fire({
                title: "Resultados",
                html: `
            <div>
                <div class="flex items-center justify-center mb-3">
                        <img class="w-[100px]" src="./01-warning.svg"/>
                </div>
                <div class="text-sm">
                    <p>
                        <b>El score del paciente es:</b> ${score}
                    </p>
                    <p>
                        <b>Riesgo de mortalidad:</b>Alto
                    </p>
                    <p>
                        <b>Mortalidad</b>: 276 por 10,000 personas-día.
                    </p>          
                    <p class="text-[11px] mt-5 leading-3">
                        Esto indica que los pacientes en esta categoría de riesgo – muy alto – tiene un riesgo 5.4 veces mayor de fallecimiento intrahospitalario en comparación con los pacientes en la categoría de riesgo “Moderado” (la primera categoría del score CIMS y < 31 puntos).
                    </p>          
                </div>
            </div>
        `,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Nueva evaluación"
            }).then((result) => {
                if (result.isConfirmed) {
                    reset({
                        form: {
                            sexo: "",
                            edad: "",
                            hipoxemia: false,
                            glucosa: '',
                            ast: "",
                            alt: "",
                            astalt: false,
                            pcr: false,
                            ph: '',
                            globulosBlancos: false
                        }
                    });
                }
            })
            :
            Swal.fire({
                title: "Resultados",
                html: `
        <div>
            <div class="flex items-center justify-center mb-3">
                    <img class="w-[100px]" src="./01-warning.svg"/>
            </div>
            <div class="text-sm">
                <p>
                    <b>El score del paciente es:</b> ${score}
                </p>
                <p>
                    <b>Riesgo de mortalidad:</b>  Muy Alto
                </p>
                <p>
                    <b>Mortalidad</b>: 547 por 10,000 personas-día.
                </p>          
                <p class="text-[11px] mt-5 leading-3">
                    Esto indica que los pacientes en esta categoría de riesgo – muy alto – tienen un riesgo 12.2 veces mayor de fallecimiento intrahospitalario en comparación con los pacientes en la categoría de riesgo “Moderado” (la primera categoría del score CIMS y menor a 31 puntos).
                </p>          
            </div>
        </div>
            
        `,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Nueva evaluación"
            }).then((result) => {
                if (result.isConfirmed) {
                    reset({
                        form: {
                            sexo: "",
                            edad: "",
                            hipoxemia: false,
                            glucosa: '',
                            ast: "",
                            alt: "",
                            astalt: false,
                            pcr: false,
                            ph: '',
                            globulosBlancos: false
                        }
                    });
                }
            });
}