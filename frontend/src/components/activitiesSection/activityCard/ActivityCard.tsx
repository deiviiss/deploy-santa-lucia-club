interface IActivity {
  image: string;
  title: string;
}

export const ActivityCard = ({ title, image }: IActivity) => {
  return (
    <div className="relative flex-shrink-0 w-[180px] h-[125px] ">
      <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
        <h3 className="font-semibold text-2xl text-white text-center">{title}</h3>
      </div>
    </div>
  )
}
