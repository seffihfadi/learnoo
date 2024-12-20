// "use client"
// import {useCallback, useState} from 'react'
// import {useDropzone} from 'react-dropzone'

// import Image from "next/image";

// export default function CreateCourse() {
//   const [selectedImage, setSelectedImage] = useState<File | null>(null)
//   const [selectedVideo, setSelectedVideo] = useState<File | null>(null)

//   const onDrop = useCallback((acceptedFiles: File[]) => {
//     setSelectedImage(acceptedFiles[0])
//   }, [])

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
//     onDrop, 
//     multiple: false,  
//     accept: {
//       'image/jpeg': ['.jpeg', '.png', '.jpg']
//     }
//   })


//   const onDropVideo = useCallback((acceptedFiles: File[]) => {
//     setSelectedVideo(acceptedFiles[0])
//   }, [])

//   const { 
//     getRootProps: getRootPropsVid, 
//     getInputProps: getInputPropsVid, 
//     isDragActive: isDragActiveVid 
//   } = useDropzone({ 
//     onDrop: onDropVideo, 
//     multiple: false,  
//     accept: {
//       'video/mp4': ['.mp4', '.mov']
//     }
//   })
//   // console.log('selectedImage', selectedImage)
//   return (
//     <form className="py-20">
//       <div className="flex items-center my-10">
//         <div className="grid grid-cols-12 gap-10 w-full">
//           <div className="col-span-8 flex flex-col justify-center">
//             <input placeholder="JavaScript Programming with React" className="text-4xl bg-background outline-none w-full h-20" type="text" />
//             <textarea placeholder="Lum dolor sit amet consectetur adipisicing elit. Magni, autem! Reiciendis unde neque velit, vel exercitationem rerum vero, obcaecati incidunt, sunt sint ad libero magni et. Deleniti neque aperiam magnam" className="bg-background w-full text-lg mt-5 h-[60%] outline-none" name="" id=""></textarea>
//           </div>
//           <div className="col-span-4">
//             {
//               !!selectedImage 
//               ? 
//                   <div key={selectedImage.lastModified} className="w-full aspect-video overflow-hidden rounded-lg relative">
//                     <Image src={`${URL.createObjectURL(selectedImage)}`} alt="" width={600} height={600} />
//                     <button className='absolute top-2 right-2' onClick={() => setSelectedImage(null)} >
//                       <i className="uil uil-multiply text-white text-sm"></i>
//                     </button>
//                   </div>
//               : 
//                 <div {...getRootProps()} className="w-full rounded-lg aspect-video border-border border-2 border-dashed flex justify-center items-center cursor-pointer">
//                   <input {...getInputProps()} />
//                   <p className="text-muted-foreground text-center px-5">
//                     {isDragActive ? 'Drop image here ...' : 'Drag and drop image here, or click to select'}
//                   </p>
//                 </div>
//             }
//           </div>

          
//         </div>
//       </div>

//       <div className="grid grid-cols-12 gap-10 my-10">
//         <div className="col-span-4">
          
//           {
//             !!selectedVideo
//             ? 
//                 <div key={selectedVideo.lastModified} className="w-full aspect-video overflow-hidden rounded-lg relative">
//                   <video controls src={`${URL.createObjectURL(selectedVideo)}`} className='w-full h-full' />
//                   <button className='absolute top-2 right-2' onClick={() => setSelectedVideo(null)} >
//                     <i className="uil uil-multiply text-white text-sm"></i>
//                   </button>
//                 </div>
//             : 
//               <div {...getRootPropsVid()} className="w-full rounded-lg aspect-video border-border border-2 border-dashed flex justify-center items-center cursor-pointer">
//                 <input {...getInputPropsVid()} />
//                 <p className="text-muted-foreground text-center px-5">
//                   {isDragActiveVid ? 'Drop video here ...' : 'Drag and drop video here, or click to select'}
//                 </p>
//               </div>
//           }


//         </div>
//         <div className="col-span-8 grid grid-cols-12 gap-5">

//           <div className="group col-span-12">
//             <input defaultValue={0} id="price" name="price" type="number" required />
//             <label htmlFor="price">price</label>
//             <div className="absolute right-12 top-3 font-semibold text-secondary">DZD</div>

//             {/* {state?.email && <span className='error'>{state.email}</span>} */}
//           </div>
//           <div className="group col-span-8">
//             <select name="level" id="level">
//               <option value="beginer">Beginner</option>
//               <option value="medium">Intermediate</option>
//               <option value="advanced">Advanced</option>
//             </select>
//             <label htmlFor="level">level</label>
//             {/* {state?.email && <span className='error'>{state.email}</span>} */}
//           </div>
//           <div className="group col-span-4">
//             <select name="language" id="language">
//               <option value="ar">Arabic</option>
//               <option value="en">English</option>
//               <option value="fr">Francais</option>
//             </select>
//             <label htmlFor="language">language</label>
//             {/* {state?.email && <span className='error'>{state.email}</span>} */}
//           </div>
//           <div className="group col-span-12">
//             <input defaultValue={5} id="duration" name="duration" type="number" required />
//             <label htmlFor="duration">duration</label>
//             <div className="absolute right-12 top-3 font-semibold text-primary">Hours</div>
//             {/* {state?.email && <span className='error'>{state.email}</span>} */}
//           </div>

//         </div>
        
//         <div className="col-span-12 flex">
//           <button className="primary ml-auto">Create</button>
//         </div>
//       </div>
//     </form>
//   )
// }

"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { createCourseAction } from "@/actions/courseActions";

export default function CreateCourse() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);

  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();
  console.log('errors----------------------->', errors)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedImage(acceptedFiles[0]);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/jpeg": [".jpeg", ".png", ".jpg"],
    },
  });

  const onDropVideo = useCallback((acceptedFiles: File[]) => {
    setSelectedVideo(acceptedFiles[0]);
  }, []);

  const {
    getRootProps: getRootPropsVid,
    getInputProps: getInputPropsVid,
    isDragActive: isDragActiveVid,
  } = useDropzone({
    onDrop: onDropVideo,
    multiple: false,
    accept: {
      "video/mp4": [".mp4", ".mov"],
    },
  });

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("level", data.level);
    formData.append("language", data.language);
    formData.append("duration", (Number(data.duration) * 60).toString());
    if (selectedImage) formData.append("image", selectedImage);
    if (selectedVideo) formData.append("video", selectedVideo);

    const res = await createCourseAction(formData);
    console.log('res', res)

    // reset(); 
    // setSelectedImage(null);
    // setSelectedVideo(null);
  };

  return (
    <form className="py-20" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center my-10">
        <div className="grid grid-cols-12 gap-10 w-full">
          <div className="col-span-8 flex flex-col justify-center">
            <input
              {...register("title")}
              placeholder="JavaScript Programming with React"
              className="text-4xl bg-background outline-none w-full h-20"
              type="text"
              required
            />
            {/* {errors.title && <p className="text-red-500">{errors.title.message}</p>} */}

            <textarea
              {...register("description")}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est voluptates odit expedita quod quasi labore quia doloremque quae recusandae doloribus delectus deserunt ab voluptas quo, explicabo officia facere praesentium"
              className="bg-background w-full text-lg mt-5 h-[60%] outline-none"
              required
            />
            {/* {errors?.description && <p className="text-red-500">{errors.description}</p>} */}
          </div>

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
                {...getRootProps()}
                className="w-full rounded-lg aspect-video border-border border-2 border-dashed flex justify-center items-center cursor-pointer"
              >
                <input {...getInputProps()} />
                <p className="text-muted-foreground text-center px-5">
                  {isDragActive
                    ? "Drop image here ..."
                    : "Drag and drop image here, or click to select"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10 my-10">
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
              {...getRootPropsVid()}
              className="w-full rounded-lg aspect-video border-border border-2 border-dashed flex justify-center items-center cursor-pointer"
            >
              <input {...getInputPropsVid()} />
              <p className="text-muted-foreground text-center px-5">
                {isDragActiveVid
                  ? "Drop video here ..."
                  : "Drag and drop video here, or click to select"}
              </p>
            </div>
          )}
        </div>

        <div className="col-span-8 grid grid-cols-12 gap-5">
          <div className="group col-span-12">
            <input
              {...register("price")}
              id="price"
              name="price"
              type="number"
              defaultValue={0}
              required
            />
            <label htmlFor="price">Price</label>
            {/* {errors.price && <p className="text-red-500">{errors.price.message}</p>} */}
            <div className="absolute right-12 top-3 font-semibold text-secondary">DZD</div>
          </div>

          <div className="group col-span-8">
            <select {...register("level")} id="level">
              <option value="beginner">Beginner</option>
              <option value="medium">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            <label htmlFor="level">Level</label>
          </div>

          <div className="group col-span-4">
            <select {...register("language")} id="language">
              <option value="ar">Arabic</option>
              <option value="en">English</option>
              <option value="fr">Francais</option>
            </select>
            <label htmlFor="language">Language</label>
          </div>

          <div className="group col-span-12">
            <input
              {...register("duration")}
              id="duration"
              name="duration"
              type="number"
              defaultValue={5}
              required
            />
            <label htmlFor="duration">Duration</label>
            <div className="absolute right-12 top-3 font-semibold text-primary">Hours</div>
          </div>
        </div>

        <div className="col-span-12 flex">
          <button type="submit" className="primary ml-auto">
            Create
          </button>
        </div>
      </div>
    </form>
  );
}

