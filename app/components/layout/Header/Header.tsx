import Link from "next/link";
import { getDictionary } from "@/[lang]/dictionaries";

export const Header = async () => {
  const dict = await getDictionary();
  const languages = dict.system.locale;

  return (
    <div className="h-20 w-full flex justify-center items-center gap-4">
      {languages.map((lang) => {
        return (
          <Link
            key={crypto.randomUUID()}
            href={`/${lang.locale}`}
            className={`capitalize py-1 border-b-[3px] ${lang.locale == dict.system.language ? "border-b-sky-500" : "border-transparent"}`}
            aria-disabled={lang.locale == dict.system.language}
          >
            {lang.name}
          </Link>
        );
      })}
    </div>
  );
};
