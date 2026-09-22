import { getDictionary } from "./dictionaries";

const Home = async () => {
  const dict = await getDictionary();

  const parts = dict.home.welcome.split("{name}");

  return (
    <>
      <div className="h-[calc(100svh-10rem)] flex flex-col justify-center gap-10">
        <h1 className="text-7xl">
          {parts[0]}
          <strong className="capitalize text-sky-500">
            {dict.system.name}
          </strong>
          {parts[1]}
        </h1>
        <p className="text-xl">{dict.home.desc}</p>
      </div>
    </>
  );
};

export default Home;
