const OpcionRadioRol=()=>{
    return(
        <section>
          <div className="form-check">
              <input className="form-check-input" type="radio" name="Radios2" id="Radios21" value="option1"/>
              <label className="form-check-label" for="Radios21">
              Administrador
              </label>
          </div>
          <div className="form-check">
              <input className="form-check-input" type="radio" name="Radios2" id="Radios22" value="option2"/>
              <label className="form-check-label" for="Radios22">
               Vendedor
              </label>
          </div> 
        </section>
    )      
}

export default OpcionRadioRol;