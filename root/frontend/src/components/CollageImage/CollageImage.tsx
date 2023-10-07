import { CollageImageProps } from "../../vite-env";

export const CollageImage = ({ items }: CollageImageProps) => {
  if (!items) {
    return <img src="../../public/animenoto_logo.png" />;
  } else if (items.length > 3) {
    items.slice(0, 3).map((item) => {
      return <img className="" src={item.images.jpg.image_url} />;
    });
  } else {
    return <img src={items![0].images.jpg.image_url} />;
  }
};
