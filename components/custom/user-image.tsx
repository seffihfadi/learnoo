import { File } from "@/types/file"
import LazyImage from "./lazy-image"

interface Props {
  avatar: File | undefined
  fullName: string
}

export default function UserImage({avatar, fullName}: Props) {
  return (
    <>
      {avatar 
      ? 
        <LazyImage
          className="w-full h-full object-top object-cover" 
          src={avatar.url} 
          alt={fullName}
          width={avatar.width || 500} 
          height={avatar.height || 500} 
          thumbnailSrc={avatar.thumbnail_url}
        />
      :
        <div className="bg-primary text-xl font-semibold w-full h-full flex justify-center items-center capitalize">
          {fullName.charAt(0)}
        </div>
      }
    </>
  )
}