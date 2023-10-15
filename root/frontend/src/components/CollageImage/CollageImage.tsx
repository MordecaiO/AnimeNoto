import { CollageImageProps } from "../../vite-env";
import "./CollageImage.css";
export const CollageImage = ({ items }: CollageImageProps) => {
  let image;
  if (items?.length == 0 || items == undefined) {
    image = (
      <img
        className="def-img"
        src="../../animenoto_logo.png"
        alt="AnimeList cover photo"
      />
    );
  } else if (items!.length > 3) {
    image = items!.slice(0, 4).map((item) => {
      return (
        <img
          className="collage-img"
          src={item.images.jpg.image_url}
          alt="AnimeList cover photo"
        />
      );
    });
  } else {
    image = (
      <img
        className="first-img"
        src={items[0].images.jpg.image_url}
        alt="AnimeList cover photo"
      />
    );
  }
  return <div className="collage-img-wrapper"> {image} </div>;
};
