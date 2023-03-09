export const getGhostImgPath = (
  baseUrl: string,
  imgUrl: string,
  width = 0
): string => {
  if (!imgUrl) return "";
  if (!imgUrl.startsWith(baseUrl)) {
    return imgUrl;
  }
  const relativePath = imgUrl.substring(`${baseUrl}/content/images`.length);
  const cleanedBaseUrl = baseUrl.replace(/\/~/, "");
  if (width && width > 0) {
    return `${cleanedBaseUrl}/content/images/size/w${width}/${relativePath}`;
  }
  return `${cleanedBaseUrl}/content/images/${width}${relativePath}`;
};

export const truncate = (input: string, size: number): string =>
  input.length > size ? `${input.substring(0, size)}...` : input;

export const formatDate = (dateInput: string): string => {
  const dateObject = new Date(dateInput);
  return dateObject.toDateString();
};

export const uniqWith = <T>(
  arr: Array<T>,
  fn: (element: T, step: T) => number
): Array<T> =>
  arr.filter(
    (element, index) => arr.findIndex((step) => fn(element, step)) === index
  );
