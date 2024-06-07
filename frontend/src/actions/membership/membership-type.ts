'use server'

import { IMemberShipType, IResponseMemberShipType } from "@/interfaces/memberShipType.interface";
import { getUserSessionServer } from "../auth/get-user-server-session";

export const getMemberShipTypes = async () => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/v1/memberships`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      }
    );

    if (response.status !== 200) {
      return {
        ok: false,
        message: 'No hay membresías disponibles',
        membershipTypes: null
      }
    }

    const data: IResponseMemberShipType = await response.json()

    // should be a array of IMemberShipType but is not so we need to cast it
    const responseData = data.date as IMemberShipType[]

    return {
      ok: true,
      message: 'Membresías obtenidas correctamente',
      membershipTypes: responseData
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Error al obtener las membresías',
      membershipTypes: null
    }
  }
}