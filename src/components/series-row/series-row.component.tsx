import { FC, useState } from "react";
import { Series } from "../../store/gallery/gallery.slice";

import Modal from "../../components/modal/modal.component";

import {
  ShopRow,
  ShopRowImage,
  ShopRowItemContainer,
} from "./series-row.styles";
import { SmallInvertedLeafButton } from "../button/button.styles";

export interface SeriesRowProps {
  readonly series: Series;
  className?: string;
  key: string;
}

export const SeriesRow: FC<SeriesRowProps> = ({ series }) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(showModal ? false : true);
  };

  return (
    <>
      <h3>{series.title}</h3>
      <ShopRow>
        {series.pieces.map((piece) => (
          <ShopRowItemContainer key={"shop_row_key" + piece.title}>
            <ShopRowImage src={piece.smallImageUrl} alt={piece.title} />
            <SmallInvertedLeafButton onClick={showModalHandler}>
              {piece.title}
            </SmallInvertedLeafButton>
            {showModal && (
              <Modal piece={piece} showModalHandler={showModalHandler} />
            )}
          </ShopRowItemContainer>
        ))}
      </ShopRow>
    </>
  );
};

export default SeriesRow;
