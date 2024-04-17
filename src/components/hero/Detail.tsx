interface Props {
  img: string;
  title: string;
  description: string;
}
const Detail = ({ description, title, img }: Props) => {
  return (
    <div className="flex justify-between items-center my-20">
      <img className="w-1/2 hidden md:block" src={"/hero/" + img} alt="Detail-img" />
      <div className="flex flex-col gap-5 md:gap-10 items-start">
        <h1 className="md:text-4xl text-2xl font-medium text-secondary">{title}</h1>
        <p className="text-md text-grey">{description}</p>
        <button className="bg-primary hover:bg-info transition  mt-5 md:px-6 px-12 py-3 rounded-md text-white">Learn More</button>
      </div>
    </div>
  );
};

export default Detail;
