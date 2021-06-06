import React, { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-3xl sm:text-5xl text-gray-900 font-bold whitespace-pre-line ">
      {props.title}
    </h1>
    <div className="text-base sm:text-3xl mt-4 mb-16">{props.description}</div>
  </header>
);

export { HeroOneButton };
