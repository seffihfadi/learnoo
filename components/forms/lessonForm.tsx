'use client'
import React, { useCallback, useState } from 'react'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { useDropzone } from 'react-dropzone';
// import { useForm } from 'react-hook-form';
// import { createLessonAction } from '@/actions/courseActions';
 const lessonForm = () => {
    //   const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
    //   const [isSubmitting, setIsSubmitting] = useState(false);
    //   const [errorMessage, setErrorMessage] = useState<string | null>(null);
    //   const [successMessage, setSuccessMessage] = useState<string | null>(null);
    
    // const onDropVideo = useCallback((acceptedFiles: File[]) => {
    //     setSelectedVideo(acceptedFiles[0]);
    //   }, []);
    
    //   const {
    //     getRootProps: getRootPropsVideo,
    //     getInputProps: getInputPropsVideo,
    //     isDragActive: isDragActiveVideo,
    //   } = useDropzone({
    //     onDrop: onDropVideo,
    //     multiple: false,
    //     accept: {
    //       "video/mp4": [".mp4", ".mov"],
    //     },
    //   });
    //  const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //     reset,
    //   } = useForm();
    //     const onSubmit = async (data: any) => {
    //       const formData = new FormData();
    //       formData.append("title", data.title); 
    //       formData.append("description","jjjjjj")
    //       formData.append("video", selectedVideo);
       
    //       if (!course) {
    //         setErrorMessage("Course is not available.");
    //         return;
    //       }
    //       try{
    //           setIsSubmitting(true)
    //       const response = await createLessonAction(formData, course.id,course.chapter.id);
    //       if (response?.error) {
    //           setErrorMessage(response.error); // Set error message
    //         } else {
    //           setSuccessMessage("Course created successfully!"); // Set success message
    //           reset();
          
    //         }
    //       } catch (error) {
    //         setErrorMessage("An error occurred while creating the course."); // Set generic error message
    //         console.error("Error:", error);
    //       } finally {
    //         setIsSubmitting(false);
    //       }
    //     };
  return (

    <div>
      {/* {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {errorMessage}
        </div>
      )} */}
      fddfd
          {/* <form className="max-w-3xl w-full mx-auto" onSubmit={handleSubmit(onSubmit) }>
    <Tabs defaultValue="video" className="w-full my-8">
      <TabsList>
        <TabsTrigger value="video">Video Lecture</TabsTrigger>
        <TabsTrigger value="doc">Doc Lecture</TabsTrigger>
      </TabsList>
      <TabsContent value="video">
        <div className="flex items-center gap-3 my-5">
          <i className="uil uil-airplay text-[30px]"></i>
        <input
              {...register("title", { required: "Title is required" })}
              placeholder="title"
              className="text-2xl bg-background outline-none w-full placeholder:text-muted-foreground"
              type="text"
            />
          <p className="text-2xl font-semibold ml-auto">#5</p>
        </div>
        <div className="col-span-4">
      {!!selectedVideo ? (
        <div
          key={selectedVideo.lastModified}
          className="w-full aspect-video overflow-hidden rounded-lg relative"
        >
          <video
            controls
            src={`${URL.createObjectURL(selectedVideo)}`}
            className="w-full h-full"
          />
          <button
            className="absolute top-2 right-2"
            onClick={() => setSelectedVideo(null)}
          >
            <i className="uil uil-multiply text-white text-sm"></i>
          </button>
        </div>
      ) : (
        <div
          {...getRootPropsVideo()}
          className="w-full rounded-lg aspect-video border-border border-2 border-dashed flex justify-center items-center cursor-pointer"
        >
          <input {...getInputPropsVideo()} />
          <p className="text-muted-foreground text-center px-5">
            {isDragActiveVideo
              ? "Drop video here ..."
              : "Drag and drop video here, or click to select"}
          </p>
        </div>
      )}
    </div>
      </TabsContent>
      <TabsContent value="doc">
        <div className="flex items-center gap-3 my-5">
          <i className="uil uil-file-info-alt text-[30px]"></i>
          <input className="text-2xl bg-background outline-none w-full placeholder:text-muted-foreground" placeholder="Java Data Types" type="text" />
          <p className="text-2xl font-semibold ml-auto">#6</p>
        </div>
        <div className="w-full aspect-video border-2 border-border border-dashed rounded-2xl flex justify-center items-center text-lg text-muted-foreground">
          Reach Text
        </div>
      </TabsContent>
      <button className="primary mt-5 !rounded-md !py-1">       {isSubmitting ? "Creating..." : "Create"}</button>
        
    </Tabs>
    
  </form> */}
  </div>

  )
}
export default lessonForm