interface Props {
  img: string;
  title: string;
  description: string;
}
const Reach = ({ description, title, img }: Props) => {
  return (
    <div className="flex gap-5">
      <img className="object-contain" src={img} alt="reach-img" />
      <div className="flex flex-col">
      <h1 className="font-bold text-dgrey text-2xl">{description}</h1>
      <p className="text-grey font-light">{title}</p>
      </div>
    </div>
  );
};

export default Reach;
