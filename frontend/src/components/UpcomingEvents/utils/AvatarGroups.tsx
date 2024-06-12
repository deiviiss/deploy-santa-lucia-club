import { IAvatarGroupProps } from "@/interfaces/upcomingEvents.interface";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import React from "react";

export const AvatarRandomGroups: React.FC<IAvatarGroupProps> = ({
  size,
  max,
  total,
  images,
}) => {
  const avatarUrls = "https://i.pravatar.cc/150?u=a042581f4e39024704d";
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
