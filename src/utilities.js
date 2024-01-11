/**
 * Esta función te permite hacer un reset de los campos selecciónados por el usuario.
 * No se retorna nada. recuerda que algunos valores se hace el reset a 0, otros a 1
 */
export function reset(billInput,customPercentageBtn,peopleInput,tipAmountInput,totalInput) {
  billInput.value = 0;
  peopleInput.value = 1;
  customPercentageBtn.value = "";
  tipAmountInput.textContent = 0;
  totalInput.textContent = 0;

}

/**
 * Esta función te permite calcular el tip(propina) que se recibirá
 * por cada persona.
 * @returns el monto de tip por persona.
 */
export function calcularTip(bill, tip, people) {
  let propina = ((bill * (tip / 100)) / people).toFixed(2);

  if (people !== 0) {
    //Esta condicion es para que no me de como resultado infinito
    return propina;
  }
}

/**
 * Calcula el total a pagar por cada persona, incluyendo el tip que
 * le corresponde.
 * @returns el monto total por persona.
 */
export function calcularTotal(bill, tip, people) {
  let elTotal = ((bill * (1 + tip / 100)) / people).toFixed(2);
  if (people !== 0) {
    //Esta condicion es para que no me de como resultado infinito
    return elTotal;
  }
}

/**
 * Valida si el valor de un campo es 0 o no, si lo es retorna true, si no, retorna false
 */
export function esCero(input) {
  let valor = parseFloat(input.value);
  
  if (valor === 0) {
    input.classList.add("input-invalid");
    
  } else {
    input.classList.remove("input-invalid");
  }

}


/**
 * Añade la clase "active" al elemento.
 * @param { Node } input - un elemento input de html.
 * puedes investigar sobre : uso de classList en los elementos DOM. añadir, remover.
 */

let ññ = null;
export function claseActivo(button) {
    if (button.value !== undefined) {
        if (ññ !== null) {
            ññ.classList.remove("active")
        }
        if (ññ !== button) {
            button.classList.add("active")
            ññ=button
        } else{
            ññ=null
        }
        
    }
}
/*
*esto lo ejemplifico el prof Harold pero tengo errores que no se resolver
* PIPIPIPI
*/

// export function claseActivo(button) {
//   // console.log(button.value)
//   const activos = document.querySelectorAll(".active");
  
//   if (activos.length === 1) {
//     activos[0].classList.remove("active");
//     // console.log(activos.length)
//   } 
//   if (button.value !== undefined) {
//     button.classList.add("active");
//   }
// }
