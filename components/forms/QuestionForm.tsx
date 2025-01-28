"use client";
import { createQuestionAction } from "@/actions/courseActions";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const QuestionForm = ({courseId,chapterId}:{ courseId: string; chapterId: string }) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data) 
// const formData=new FormData()
// formData.append("content", data.content);
// formData.append("duration",(Number(data.duration)).toString());
// formData.append("description", data.description || "");
// data.options.forEach((option: any, index: number) => {
//     formData.append(`options[${index}].content`, option.content);
//     formData.append(`options[${index}].is_correct`, option.is_correct ? "true" : "false");
// });
    try{
        setIsSubmitting(true)
    const response = await createQuestionAction(data, courseId,chapterId);
    if (response?.error) {
        setErrorMessage(response.error); // Set error message
      } else {
        setSuccessMessage("question created successfully!"); // Set success message
        reset();
    
      }
    } catch (error) {
      setErrorMessage("An error occurred while creating the course."); // Set generic error message
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit) }  className="p-5 border-b-[1px] border-border">
          {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {errorMessage}
        </div>
      )}
      
      <div  className=""  >
        <div className="flex items-center gap-3">
          <span className="text-muted-foreground text-lg">#2</span>
          <input
            {...register("content", {
              required: "Content is required",
            })}
            className="text-lg bg-background outline-none w-full placeholder:text-muted-foreground"
            placeholder=" Lequel des cas suivants est une attaque dans laquelle?"
            type="text"
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">{errors.content?.message as string}</p>
          )}
          {/* <p className="text-green-600 text-lg ml-auto">30s</p> */}
          <input
           {...register("duration", {
            required: "Duration is required",
            min: { value: 10, message: "Duration must be at least 10 seconds" },
          })}
          id="duration"
          name="duration"
          type="number"
          defaultValue={10}
            className="w-8 bg-background outline-none text-green-600 text-lg ml-auto"
       
           
          />
          <span className="text-green-600 text-lg">s</span> {errors.duration && (
            <p className="text-red-500 text-sm mt-1">{errors.duration?.message as string}</p>
          )}
        </div>
        <textarea
          {...register("description")}
          rows={3}
          className="w-full bg-background outline-none mt-4"
          placeholder="Quos quas totam explicabo quae reiciendis neque dolorem nostrum delectus facere eaque accusamus, illo libero natus tempore dicta blanditiis modi quibusdam architecto"
         
         
        />
         {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description?.message as string}</p>
          )}
        <div className="pl-5">
          <ul className="list-decimal pl-10 [&>li]:my-1 mt-5">
            {[...Array(4)].map((_, index) => (
              <li key={index} className="relative">
                <input
                  {...register(`options[${index}].option`, {
                    required: `Option ${index + 1} is required`,
                  })}
                  className="outline-none bg-background w-full pr-20"
                  placeholder={`Create Choice ${index + 1}`}
                  type="text"
                />
                <div className="absolute right-0 top-0 flex items-center gap-2">
                  <label className="text-sm font-bold" htmlFor={`istrue-${index}`}>
                    Is True
                  </label>
                  <input
                    {...register(`options[${index}].is_correct`)}
                    className=""
                    type="checkbox"
                    id={`istrue-${index}`}
                  />
                </div>
                {(errors.options as any)?.[index]?.content && (
                  <p className="text-red-500 text-sm mt-1">{(errors.options as any)[index].content.message}</p>
                )}
              </li>
            ))}
            {/* <li>
            Interception <span className="text-green-500">(true)</span>
          </li>
          <li>Modification</li>
          <li className="relative">
            <input
              className="outline-none bg-background w-full pr-20"
              placeholder="Create Choice 3"
              type="text"
            />
            <div className="absolute right-0 top-0 flex items-center gap-2">
              <label className="text-sm font-bold" htmlFor="istrue">
                Is True
              </label>
              <input className="" type="checkbox" name="" id="istrue" />
            </div>
          </li> */}
          </ul>
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <button className="primary mt-5 !rounded-md !py-1">       {isSubmitting ? "Creating..." : "Create"}</button>
        </div>
    </form>
  );
};
export default QuestionForm;
