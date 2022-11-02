import { useAppSelector } from "../../store/hooks/hooks";

import { FC } from "react";

const imageCache = {};

export type SuspenseImageProps = {
  src: string;
};

// export const SuspenseImage: FC<SuspenseImageProps> = ({ src }) => {
//   imageCache.read(src);
//   return <img src={src} alt={src} />;
// };
