import { ButtonCancelSubscription, ConfigAccount } from "@/components";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>
        <ConfigAccount />
      </div>
      <div className="flex gap-4">
        <ButtonCancelSubscription />

        <Button as={Link} href="/dashboard/selectMembershipType">
          Seleccionar membresía
        </Button>
      </div>
    </>
  );
};

