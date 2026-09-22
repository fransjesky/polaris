import Link from "next/link";

export const Header = () => {
  const languages = [
    {
      name: "english",
      locale: "en",
    },
    {
      name: "japanese",
      locale: "ja",
    },
  ];

  return (
    <div className="h-20 w-full flex justify-center items-center gap-6">
      {languages.map((lang) => {
        return (
          <Link
            key={crypto.randomUUID()}
            href={`/${lang.locale}`}
            className="capitalize"
          >
            {lang.name}
          </Link>
        );
      })}
    </div>
  );
};
