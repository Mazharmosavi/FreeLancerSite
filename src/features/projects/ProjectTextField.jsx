import React from "react";

function ProjectTextField({
  label,
  name,
  register,
  errors,
  validationScheme,
  required,
  type = "text",
}) {
    console.log(errors)
  return (
    <div className="">
      <label className="mb-2 block">
        {label} {required && <span className="text-error ">*</span>}
      </label>
      <input
        className="textField__input"
        id={name}
        {...register(name, validationScheme)}
        autoComplete="off"
        type={type}
      />
        {errors && errors[name] && <span className="text-error">{errors[name]?.message}</span>}
      
    </div>
  );
}

export default ProjectTextField;
