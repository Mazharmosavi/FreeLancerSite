import React from "react";

function TextField({
  label,
  name,
  register,
  errors,
  validationScheme,
  required,
  type ,
}) {
   // console.log(errors);
   // console.log(name);
  return (
    <div className="flex flex-col">
      <label className="mb-2 block">
        {label} {required && <span className="text-error ">*</span>}
      </label>
      <input
        className="textField__input"
        id={name}
        {...register(name, validationScheme,{required:true,minLength:10})}
        autoComplete="on"
        type={type}
      />
        {errors && errors[name] && <span className="text-error">{errors[name]?.message}</span>}
      
    </div>
  );
}

export default TextField;
