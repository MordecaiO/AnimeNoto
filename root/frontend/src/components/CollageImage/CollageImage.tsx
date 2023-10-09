import { CollageImageProps } from "../../vite-env";

export const CollageImage = ({ items }: CollageImageProps) => {
  if (items?.length === 0) {
    return <img src="../../public/animenoto_logo.png" />;
  } else if (items !== undefined && items.length > 3) {
    items!.slice(0, 4).map((item) => {
      return <img className="collage-img" src={item.images.jpg.image_url} />;
    });
  } else {
    return <img src={items![0].images.jpg.image_url} />;
  }
};
