interface Props {
  img: string;
  title: string;
  description: string;
}
const Card = ({ description, title, img }: Props) => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 p-5 text-center">
      <img className="w-[100px]" src={"/hero/"+img} alt="client" />
      <h1 className="text-3xl text-secondary">{title}</h1>
      <p className="text-grey">{description}</p>
    </div>
  );
};

export default Card;
