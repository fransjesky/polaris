import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";

const Home = async ({ params }: PageProps<"/[lang]">) => {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  const parts = dict.home.welcome.split("{name}");

  return (
    <>
      <div className="h-[calc(100svh-10rem)] flex flex-col justify-center gap-10">
        <h1 className="text-7xl">
          {parts[0]}
          <strong className="capitalize">{dict.home.name}</strong>
          {parts[1]}
        </h1>
        <p className="text-xl">{dict.home.desc}</p>
      </div>
    </>
  );
};

export default Home;
