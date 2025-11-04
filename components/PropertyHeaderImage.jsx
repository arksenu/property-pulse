
import Image from "next/image"

const PropertyHeaderImage = ({ image }) => {
  if (!image) return null
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`}
            alt="Property"
            className="object-cover h-[400px] w-full"
            width={1200}
            height={400}
            sizes='100vw'
            priority={true}
          />
        </div>
      </div>
    </section>
  )
}

export default PropertyHeaderImage