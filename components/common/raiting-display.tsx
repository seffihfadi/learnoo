import Image from 'next/image'

export default function RaitingDisplay({rate}: {rate: number}) {
  const fullStars = Math.floor( Number(rate))
  const decimalPart =  Number(rate) % 1
  const halfStar = decimalPart >= 0.4 && decimalPart <= 0.9 ? 1 : 0
  const emptyStars = 5 - fullStars - halfStar
  return (
    <div className="raiting_display flex justify-center items-center w-fit mx-1">
      {[...Array(fullStars)].map((_, i) => (
        <Image key={`full-${i}`} src="/star.svg" alt={`full-${i}`} width={25} height={25} />
      ))}

      {halfStar === 1 && <Image src="/star_half.svg" alt="star_half" width={25} height={25} />}

      {[...Array(emptyStars)].map((_, i) => (
        <Image key={`empty-${i}`} src="/star_out.svg" alt="star_outline" width={25} height={25} />
      ))}
    </div>
  )
}
