const imageLoader = ({ src, width, quality }) => {
  return `https://www.groviaus.com${src}?w=${width}&q=${
    quality || 75
  }&format=webp`;
};

export default imageLoader;
