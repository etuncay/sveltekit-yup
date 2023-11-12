export const isInvalid = (schema, name, fields)=>{
    let bool = false;
    try {
        schema.validateSyncAt(name, fields);
    }
    catch(error){
        bool = true;
    }
    return bool;
}

export const errorMessages = (schema, fields) => {
    let errorMessage = "";
    Object.keys(fields).forEach(async f => {
        try{
          await schema.validateSyncAt(f,fields)
         }catch(error){
          errorMessage+= `<li>${error.errors[0]}</li>`;
        }
    });
    return `<ol>${errorMessage}</ol>`;
}
