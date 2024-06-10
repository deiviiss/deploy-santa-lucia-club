'use server'

import { IActivity, IResponseSports } from "@/interfaces/activities.interface";

export const getSports = async (): Promise<IResponseSports> => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/v1/activities`,
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
        message: 'Error al obtener las actividades',
        sports: null
      }
    }

    const rta = await response.json()

    if (rta.data.length === 0) {
      return {
        ok: false,
        message: 'No hay actividades',
        sports: null
      }
    }

    const sports = rta.data.map((activity: IActivity) => {
      return {
        ...activity,
        image: '/activity-futbol.jpg',
      }
    })

    return {
      ok: true,
      message: 'Actividades obtenidas correctamente',
      sports,
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Error al obtener las actividades',
      sports: null
    }
  }
}