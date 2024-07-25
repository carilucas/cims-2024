

export const resultado = (sexo, edad, hipoxemia, glucosa, ast, pcr, ph, globulosBlancos)=>{

    const sexoVal = Number(sexo);
    const edadVal = (Number(edad) >= 45 && Number(edad) <=57) ? 9 : (Number(edad) >= 58 && Number(edad) <= 68) ? 20 : (Number(edad) >= 69 && Number(edad) <=102 ) ? 24 : 0;
    const hipoxemiaVal = hipoxemia ? 7 : 0;
    const glucosaVal = Number(glucosa);
    const astVal = ast ? 9 : 0;
    const pcrVal = pcr ? 8 : 0;
    const phval = Number(ph)
    const globulosBlancosVal = globulosBlancos ? 9 : 0;

    const res = sexoVal + edadVal + hipoxemiaVal + glucosaVal + astVal + pcrVal + phval + globulosBlancosVal;
    return res;
}