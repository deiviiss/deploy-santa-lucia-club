import { ButtonCancelSubscription } from "@/components"
import { Button } from "@nextui-org/react"
import Link from "next/link"

const page = () => {
  return (
    <>
      <h1>Página de account</h1>
      <div className="flex gap-4">
        <ButtonCancelSubscription />

        <Button as={Link} href="/dashboard/selectMembershipType">
          Seleccionar membresía
        </Button>
      </div>
    </>
  )
}

export default page
