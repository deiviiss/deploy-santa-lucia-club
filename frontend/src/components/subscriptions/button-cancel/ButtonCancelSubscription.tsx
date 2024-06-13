'use client'

import { cancelSubscription } from "@/actions"
import { Button } from "@nextui-org/react"

const handleClicked = async () => {
  // Call the changeStateSubscription function
  console.log('Cancel subscription')
  const rta = await cancelSubscription()

  console.log(rta)
}

export const ButtonCancelSubscription = () => {
  return (
    <Button
      type="button"
      onClick={() => handleClicked()}
      variant="bordered"
      className="border-red-600"
    >
      Cancelar
    </Button>
  )
}
