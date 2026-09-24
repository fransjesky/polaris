import { getDictionary } from "@/[lang]/dictionaries";

export const Footer = async () => {
  const dict = await getDictionary();
  const year = new Date().getFullYear();

  const parts = dict.system.copyright.split("{year}");

  return (
    <div className="h-20 flex justify-center items-center">
      <p className="text-slate-500">
        {parts[0]} {year} {parts[1]}
      </p>
    </div>
  );
};
