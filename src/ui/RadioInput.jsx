import React from "react";

function RadioInput({name,id,value,htmlFor,label,watch,register,required,validationScheme,errors}) {
    
  return (
    <div className="flex items-center justify-center gap-x-2 text-secondary-600">
      <input {...register(name,validationScheme)} type="radio" name={name} id={id} value={value} checked={watch(name)==value}/>
      <label htmlFor={htmlFor}>{label}</label>
     
    </div>
  );
}

export default RadioInput;
