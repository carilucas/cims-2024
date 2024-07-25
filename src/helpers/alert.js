
export const alert = (Swal, score, reset) => {
    score < 31
    ?
    Swal.fire({
        title: "Resultados",
        html: `
            El score del paciente es: <b> ${score}</b><br/><br/>
            Densidad de mortalidad por 10.000 personas-día:<br/>
            <b>Moderado 35</b>
        `,
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Nueva evaluación"
    }).then((result) => {
        if (result.isConfirmed) {
            reset({
                form: {
                    sexo: "",
                    edad: "",
                    hipoxemia: false,
                    glucosa:'',
                    ast:false,
                    pcr:false,
                    ph:'',
                    globulosBlancos:false
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
            El score del paciente es: <b>${score}</b><br/><br/>
            Densidad de mortalidad por 10.000 personas-día:<br/>
            <b>Alta 276</b>
        `,
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Nueva evaluación"
    }).then((result) => {
        if (result.isConfirmed) {
            reset({
                form: {
                    sexo: "",
                    edad: "",
                    hipoxemia: false,
                    glucosa:'',
                    ast:false,
                    pcr:false,
                    ph:'',
                    globulosBlancos:false
                }
            });
        }
    })
    :
    Swal.fire({
        title: "Resultados",
        html: `
            El score del paciente es: <b>${score}</b><br/><br/>
            Densidad de mortalidad por 10.000 personas-día:<br/>
            <b>Muy Alta 547</b>
        `,
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Nueva evaluación"
    }).then((result) => {
        if (result.isConfirmed) {
            reset({
                form: {
                    sexo: "",
                    edad: "",
                    hipoxemia: false,
                    glucosa:'',
                    ast:false,
                    pcr:false,
                    ph:'',
                    globulosBlancos:false
                }
            });
        }
    });
}