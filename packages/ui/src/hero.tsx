"use client";

import { Button } from "./button";
import { HeroTitle } from "./hero-title";

export function Hero({
  someServerActionHandler,
  someClientHandler,
  title,
}: {
  title: string;
  someServerActionHandler?: () => void;
  someClientHandler?: () => void;
}) {
  return (
    <div>
      <HeroTitle title={title} />
      <Button
        clientClickHandler={someClientHandler}
        serverClickHandler={someServerActionHandler}
      >
        Test
      </Button>
    </div>
  );
}
