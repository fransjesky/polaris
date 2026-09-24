import { getDictionary } from "./dictionaries";
import { HomeInteractiveButton } from "./_components/HomeInteractiveButton";

const Home = async () => {
  const dict = await getDictionary();

  const parts = dict.home.welcome.split("{name}");

  return (
    <>
      <div className="py-10 h-[calc(100svh-10rem)] flex flex-col justify-center gap-8">
        <span className="uppercase text-center text-slate-500 tracking-[0.2em]">
          {dict.home.tagline}
        </span>
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl text-center">
            {parts[0]}
            <strong className="capitalize text-sky-500">
              {dict.system.name}
            </strong>
            {parts[1]}
          </h1>
          <p className="text-xl text-center">{dict.home.desc}</p>
        </div>
        <div className="flex justify-center">
          <HomeInteractiveButton />
        </div>
      </div>
    </>
  );
};

export default Home;
