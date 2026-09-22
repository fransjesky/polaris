import Link from "next/link";
import { getDictionary } from "@/[lang]/dictionaries";

export const Header = async () => {
  const dict = await getDictionary();
  const languages = dict.system.locale;

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
