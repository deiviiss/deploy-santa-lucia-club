"use client";

import React, { useState } from "react";
import { ModalEvents } from "./utils/ModalEvents";
import { dataEvent } from "./upcomingEvents.helper";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
  Button,
  AvatarGroup,
  Avatar,
} from "@nextui-org/react";
import { AvatarRandomGroups } from "./utils/AvatarGroups";
import { IEventData } from "@/interfaces/upcomingEvents.interface";
import UpcomingEventsDesktop from "./eventComponents/UpcomingEventsDesktop";
import UpcomingEventsCards from "./eventComponents/UpcomingEventsCards";

type Props = {};

export function UpcomingEvents({}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentEvents, setCurrentEvents] = useState<IEventData[]>(dataEvent);
  const [modalData, setModalData] = useState<IEventData | null>(null);

  const handleOpenModal = (data: IEventData) => {
    setModalData(data);
    onOpen();
  };

  const handleConfirm = (id: string) => {
    const newImageURL = "https://i.pravatar.cc/150?u=a042581f4e39024704d";

    setCurrentEvents((prevEvents) =>
      prevEvents.map((event) => {
        if (event.id === id) {
          const updatedImages = event.eventConfirmation
            ? event.images.filter((img) => img !== newImageURL)
            : [newImageURL, ...event.images];
          return {
            ...event,
            eventConfirmation: !event.eventConfirmation,
            images: updatedImages,
          };
        }
        return event;
      })
    );

    // Actualizar el estado del evento seleccionado
    if (modalData && modalData.id === id) {
      const updatedImages = modalData.eventConfirmation
        ? modalData.images.filter((img) => img !== newImageURL)
        : [newImageURL, ...modalData.images];
      setModalData({
        ...modalData,
        eventConfirmation: !modalData.eventConfirmation,
        images: updatedImages,
      });
    }
  };

  return (
    <>
      <section className="w-full">
        <h2 className="text-2xl font-medium font-poppins text-primary-400-D py-4">
          Proximos Eventos del club
        </h2>
        <UpcomingEventsDesktop
          currentEvents={currentEvents}
          handleOpenModal={handleOpenModal}
        />
        <UpcomingEventsCards
          currentEvents={currentEvents}
          handleOpenModal={handleOpenModal}
        />

        {modalData && (
          <ModalEvents
            isOpen={isOpen}
            onClose={onOpen}
            onOpenChange={onOpenChange}
            modalData={modalData}
            onConfirm={handleConfirm}
          />
        )}
      </section>
    </>
  );
}

