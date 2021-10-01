function OpcionRadioEstado() {
    return(
        <section>
         <div className="form-check">
             <input className="form-check-input" type="radio" name="Radios1" id="Radios11" value="option1"/>
             <label className="form-check-label" for="Radios11">
             Pendiente
             </label>
         </div>
         <div class="form-check">
             <input className="form-check-input" type="radio" name="Radios1" id="Radios12" value="option2"/>
             <label className="form-check-label" for="Radios12">
             Autorizado
             </label>
         </div>
         <div class="form-check">
             <input className="form-check-input" type="radio" name="Radios1" id="Radios13" value="option3"/>
             <label className="form-check-label" for="Radios13">
             No Autorizado
             </label>
         </div>
         </section>        
    )         
}

export default OpcionRadioEstado;