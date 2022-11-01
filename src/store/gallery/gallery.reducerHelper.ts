import { GalleryState } from "./gallery.slice";

export type UpdateCurSlideHelperReturn = void | {
  newSlideIndex: number;
  newSlideUrl: string;
};

export const updateSliderHelper = (
  state: GalleryState,
  newSlideIndex: number,
  newSeriesIndex: number
): UpdateCurSlideHelperReturn => {
  const stateCopy = JSON.parse(JSON.stringify(state));
  const { seriesData, storeUrls } = stateCopy;
  if (
    newSlideIndex >= seriesData[newSeriesIndex].pieces.length ||
    newSlideIndex < 0
  )
    return;
  // otherwise update the state with the new series and slide indices
  const newModFetchPath: string = seriesData[newSeriesIndex].pieces[
    newSlideIndex
  ].fetchPath
    .slice(1)
    .replace("/", "%2F");

  const newSlideUrl = (state.curSlideUrl = storeUrls.filter((url: string) =>
    url.includes(newModFetchPath)
  )[0]);

  const updates = { newSlideIndex, newSlideUrl };
  return updates;
};
