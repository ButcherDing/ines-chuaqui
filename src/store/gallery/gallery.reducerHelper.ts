import { GalleryState } from "./gallery.slice";

export type UpdateCurSlideHelperReturn = void | {
  newSlideIndex: number;
  newSlideUrl: string;
};

export const updateCurSlideHelper = (
  state: GalleryState,
  payload: number
): UpdateCurSlideHelperReturn => {
  console.log(state);
  const { seriesData, curSeriesIndex, storeUrls } = state;
  if (payload >= seriesData[curSeriesIndex].pieces.length || payload < 0)
    return;
  // otherwise update the state with the action
  const newSlideIndex: number = payload;
  const newModFetchPath: string = seriesData[curSeriesIndex].pieces[
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
