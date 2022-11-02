import { FC } from "react";

export type ImageProps = {
  url: string;
};

export const Image: FC<ImageProps> = ({ url }) => {
  const onLoad = () => {
    console.log("loaded");
  };
  return <img src={url} alt={`artist's work`}></img>;
};
