import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { ClockIcon } from "../assets";
import { AvatarRandomGroups } from "../utils/AvatarGroups";
import { IEventData } from "@/interfaces/upcomingEvents.interface";

type Props = {
  currentEvents: IEventData[];
  handleOpenModal: (data: IEventData) => void;
};

export default function UpcomingEventsCards({
  currentEvents,
  handleOpenModal,
}: Props) {
  return (
    <>
      {currentEvents.map((event) => (
        <Card
          key={event.id}
          radius="sm"
          className="w-56 bg-bone-card shadow-mini-card p-1"
        >
          <CardHeader>
            <h3 className="text-sm text-primary-400-D font-semibold font-poppins">
              {event.title}
            </h3>
          </CardHeader>
          <CardBody className="inline-flex flex-row items-center gap-2">
            <ClockIcon />
            <p className="text-green-600 font-medium text-sm font-poppins">
              Hoy a las {event.date}
            </p>
          </CardBody>
          <CardFooter className="flex justify-between">
            <AvatarRandomGroups
              size="sm"
              max={2}
              total={event.assistans}
              images={event.images}
            />
            {/* <Button size="sm" variant="flat">
              Ver evento
            </Button> */}
            <Button
              key={event.id}
              onPress={() => handleOpenModal(event)}
              size="sm"
              variant="flat"
            >
              Ver evento
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
