import { Avatar, AvatarGroup } from "@nextui-org/react";
import React from "react";

/* type Props = {
  AvatarGroups: {
    size: "sm" | "md" | "lg";
    max: number;
    total: number;
    addAvatar?: string | null;
  };
}; */

interface AvatarGroupProps {
  size: "sm" | "md" | "lg";
  max: number;
  total: number;
  images: string[];
  addAvatar?: boolean | null;
}

export const AvatarRandomGroups: React.FC<AvatarGroupProps> = ({
  size,
  max,
  total,
  images,
  addAvatar = null,
}) => {
  const avatarUrls = "https://i.pravatar.cc/150?u=a042581f4e39024704d";
  console.log("SE RENDERIZA");
  /* let avatarUrls: string[] = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a04258a2462d826712d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026302d",
    "https://i.pravatar.cc/150?u=a04258114e29026702d",
    "https://i.pravatar.cc/150?u=a04258114e29026708c",
  ]; 

  /* const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const randomAvatarMix = shuffleArray([...avatarUrls]);
 */
  /* if (addAvatar) {
    avatarUrls.unshift(addAvatar);
  } */

  /* .slice(0, AvatarGroups.max). */

  return (
    <>
      <AvatarGroup size={size} max={max} total={total}>
        {images.map((url, index) => (
          <Avatar
            key={index}
            isBordered
            color={url === avatarUrls ? "success" : "default"}
            src={url}
          />
        ))}
      </AvatarGroup>
    </>
  );
};
