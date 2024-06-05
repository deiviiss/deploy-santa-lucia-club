interface IActivity {
  image: string;
  title: string;
}

export const ActivityCard = ({ title, image }: IActivity) => {
  return (
    <div className="flex flex-col items-center gap-[15px]">
      {/*  TODO: replace with img */}
      <div className="w-[55px] h-[55px] object-cover rounded-full bg-[#ADB3B3]" ></div>
      <h3 className=" font-medium text-base text-[#232323]">{title}</h3>
    </div>
  )
}
