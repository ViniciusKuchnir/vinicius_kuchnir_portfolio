import MeImage from "@/assets/images/me.jpeg";

const Image = () => {
  return (
    <div className="w-full flex items-center justify-center">
        <img
          className="w-80 h-80 rounded-full object-left-bottom object-cover"
          src={MeImage}
          alt="A photo of me smiling with the sea and houses in the background"
        />
      </div>
  )
}

export default Image