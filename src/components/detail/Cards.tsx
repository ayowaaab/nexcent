interface cardProps {
  img: string;
  title: string;
  description: string;
}
export const Card = ({ description, title, img }: cardProps) => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 p-5 text-center">
      <img className="w-[100px]" src={"/hero/" + img} alt="client" />
      <h1 className="text-3xl text-secondary">{title}</h1>
      <p className="text-grey">{description}</p>
    </div>
  );
};
interface ReadeMoreProps {
  title: string;
}
export const ReadMoreCard = ({ title }: ReadeMoreProps) => {
  return (
    <div className="bg-silver rounded-md shadow-lg flex flex-col items-center justify-between gap-2 p-5 text-center w-full md:w-1/3">
      <h1 className="text-lg font-semibold text-dgrey">{title}</h1>
      <button className="text-primary font-semibold">Readmore →</button>
    </div>
  );
};
