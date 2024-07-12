import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFselect from "../../ui/RHFselect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerield from "../../ui/DatePickerield";
import useCategories from "../../hooks/useCategories";
import Loading from "../../ui/Loading";
import useProjectApi from "./useProjectApi";
import useEditeProject from "./useEditeProject";

function CreateProject({ onclose, projectEdite = {} }) {
  const { _id: editeId } = projectEdite;
  const isEditeSession = Boolean(editeId);
  const {
    title,
    category,
    budget,
    deadline,
    tags: prevTags,
    description,
  } = projectEdite;
  let editeValue = {};
  if (isEditeSession) {
    editeValue = { title, description, budget, category: category._id };
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editeValue });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(deadline || new Date());

  const {isEditing, editeProject} = useEditeProject();
  const { isFetched, categories } = useCategories() || [];
  // console.log(categories);
  //console.log(isFetched);

  const { isPending, createProject } = useProjectApi();
  //console.log(createProject);

  const onSubmit = (data) => {
    const newProject = {...data,deadline:new Date(date).toDateString(),tags:tags}
    console.log(newProject)
    console.log(data);
    if (isEditeSession) {
      editeProject(
        {id:editeId,newProject },
       { onSuccess:()=>{
        console.log("success")
        onclose();
        reset();
       }},
      )
    } else {
      console.log({ ...data, tags, deadline: new Date(date).toISOString() });
      createProject(
        { ...data, tags, deadline: new Date(date).toISOString() },
        {
          onSuccess: () => {
            onclose();
            reset();
          },
        }
      );
      console.log(data);
    }
  };

  return (
    <div className="flex flex-col self-center">
      {isFetched == undefined ? (
        <Loading />
      ) : (
        <form
          className="space-y-1 self-center w-1/2 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            label={"عنوان پروژه"}
            name={"title"}
            register={register}
            required
            type={"text"}
            validationScheme={{
              required: "درج عنوان ضروری است",
              vlaue: 10,
              message: "عنوان کوتاه است",
            }}
            errors={errors}
          />

          <TextField
            label={"توضیحات"}
            name={"description"}
            register={register}
            type={"text"}
            required
            validationScheme={{
              required: "درج توضیحات ضروری است",
              vlaue: 10,
              message: "توضیحات کوتاه است",
            }}
            errors={errors}
          />

          <TextField
            label={"بودجه"}
            name={"budget"}
            type={"number"}
            register={register}
            required
            validationScheme={{
              required: "درج بودجه ضروری است",
              vlaue: 10,
              message: "بودجه کوتاه است",
            }}
            errors={errors}
          />
          <RHFselect
            label="دسته بندی"
            required
            name="category"
            register={register}
            options={categories}
          />
          <div>
            <label className="mb-2 block text-secondary-700">تگ ها</label>
            <TagsInput value={tags} onChange={setTags} name="tags" />
          </div>
          <label className="mb-2 block text-secondary-700">ددلاین</label>
          <DatePickerield date={date} setDate={setDate} name="tags" />
          <button type="submit" className="btn btn--primary w-1/2 self-center">
            تائید
          </button>
        </form>
      )}
    </div>
  );
}

export default CreateProject;
