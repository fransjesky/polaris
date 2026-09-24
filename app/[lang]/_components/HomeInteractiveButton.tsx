"use client";

import { Button } from "@/components/ui";

export const HomeInteractiveButton = () => {
  const handleClick = () => {
    console.log("Button clicked in the browser!");
  };

  return <Button name="Read Blogs" variant="accent" onClick={handleClick} />;
};
