interface Props {
  img: string;
  title: string;
  description: string;
}
const Detail = ({ description, title, img }: Props) => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center my-20 w-[95%] lg:w-[80%] mx-auto">
      <img className="w-2/3  md:w-1/2" src={"/hero/" + img} alt="Detail-img" />
      <div className="flex flex-col gap-2 md:gap-10 items-start">
        <h1 className="md:text-4xl text-2xl font-medium text-secondary">{title}</h1>
        <p className="text-md text-grey">{description}</p>
        <button className="bg-primary hover:bg-info transition md:mx-0 mx-auto mt-5 md:text-sm px-6 text-xs py-3 rounded-md text-white">Learn More</button>
      </div>
    </div>
  );
};

export default Detail;
