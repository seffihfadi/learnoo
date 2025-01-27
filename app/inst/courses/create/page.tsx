"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { createCourseAction } from "@/actions/courseActions";

export default function CreateCourse() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle image drop
  const onDropImage = useCallback((acceptedFiles: File[]) => {
    setSelectedImage(acceptedFiles[0]);
  }, []);

  const {
    getRootProps: getRootPropsImage,
    getInputProps: getInputPropsImage,
    isDragActive: isDragActiveImage,
  } = useDropzone({
    onDrop: onDropImage,
    multiple: false,
    accept: {
      "image/jpeg": [".jpeg", ".png", ".jpg"],
    },
  });

  // Handle video drop
  const onDropVideo = useCallback((acceptedFiles: File[]) => {
    setSelectedVideo(acceptedFiles[0]);
  }, []);

  const {
    getRootProps: getRootPropsVideo,
    getInputProps: getInputPropsVideo,
    isDragActive: isDragActiveVideo,
  } = useDropzone({
    onDrop: onDropVideo,
    multiple: false,
    accept: {
      "video/mp4": [".mp4", ".mov"],
    },
  });

  // Handle form submission
  const onSubmit = async (data: any) => {
    if (!selectedImage || !selectedVideo) {
      setErrorMessage("Please select both an image and a video.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("level", data.level);
      formData.append("language", data.language);
      formData.append("duration", (Number(data.duration) * 60).toString()); // Convert hours to minutes
      formData.append("image", selectedImage);
      formData.append("video", selectedVideo);

      const response = await createCourseAction(formData);

      if (response?.error) {
        setErrorMessage(response.error); // Set error message
      } else {
        setSuccessMessage("Course created successfully!"); // Set success message
        reset();
        setSelectedImage(null);
        setSelectedVideo(null);
      }
    } catch (error) {
      setErrorMessage("An error occurred while creating the course."); // Set generic error message
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="py-20" onSubmit={handleSubmit(onSubmit)}>
      {/* Display success or error messages */}
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

      <div className="flex items-center my-10">
        <div className="grid grid-cols-12 gap-10 w-full">
          {/* Title and Description */}
          <div className="col-span-8 flex flex-col justify-center">
            <input
              {...register("title", { required: "Title is required" })}
              placeholder="JavaScript Programming with React"
              className="text-4xl bg-background outline-none w-full h-20"
              type="text"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
            )}

            <textarea
              {...register("description", { required: "Description is required" })}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est voluptates odit expedita quod quasi labore quia doloremque quae recusandae doloribus delectus deserunt ab voluptas quo, explicabo officia facere praesentium"
              className="bg-background w-full text-lg mt-5 h-[60%] outline-none"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div className="col-span-4">
            {!!selectedImage ? (
              <div
                key={selectedImage.lastModified}
                className="w-full aspect-video overflow-hidden rounded-lg relative"
              >
                <Image
                  src={`${URL.createObjectURL(selectedImage)}`}
                  alt=""
                  width={600}
                  height={600}
                />
                <button
                  className="absolute top-2 right-2"
                  onClick={() => setSelectedImage(null)}
                >
                  <i className="uil uil-multiply text-white text-sm"></i>
                </button>
              </div>
            ) : (
              <div
                {...getRootPropsImage()}
                className="w-full rounded-lg aspect-video border-border border-2 border-dashed flex justify-center items-center cursor-pointer"
              >
                <input {...getInputPropsImage()} />
                <p className="text-muted-foreground text-center px-5">
                  {isDragActiveImage
                    ? "Drop image here ..."
                    : "Drag and drop image here, or click to select"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10 my-10">
        {/* Video Upload */}
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

        {/* Form Fields */}
        <div className="col-span-8 grid grid-cols-12 gap-5">
          <div className="group col-span-12">
            <input
              {...register("price", { required: "Price is required", min: 0 })}
              id="price"
              name="price"
              type="number"
              defaultValue={0}
            />
            <label htmlFor="price">Price</label>
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
            )}
            <div className="absolute right-12 top-3 font-semibold text-secondary">DZD</div>
          </div>

          <div className="group col-span-8">
            <select {...register("level", { required: "Level is required" })} id="level">
              <option value="bigener">Beginner</option>
              <option value="medium">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <label htmlFor="level">Level</label>
            {errors.level && (
              <p className="text-red-500 text-sm mt-1">{errors.level.message}</p>
            )}
          </div>

          <div className="group col-span-4">
            <select
              {...register("language", { required: "Language is required" })}
              id="language"
            >
              <option value="ar">Arabic</option>
              <option value="en">English</option>
              <option value="fr">Francais</option>
            </select>
            <label htmlFor="language">Language</label>
            {errors.language && (
              <p className="text-red-500 text-sm mt-1">{errors.language.message}</p>
            )}
          </div>

          <div className="group col-span-12">
            <input
              {...register("duration", {
                required: "Duration is required",
                min: { value: 1, message: "Duration must be at least 1 hour" },
              })}
              id="duration"
              name="duration"
              type="number"
              defaultValue={5}
            />
            <label htmlFor="duration">Duration</label>
            {errors.duration && (
              <p className="text-red-500 text-sm mt-1">{errors.duration.message}</p>
            )}
            <div className="absolute right-12 top-3 font-semibold text-primary">Hours</div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-12 flex">
          <button type="submit" className="primary ml-auto" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create"}
          </button>
        </div>
      </div>
    </form>
  );
}