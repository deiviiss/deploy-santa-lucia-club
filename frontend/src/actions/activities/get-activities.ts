'use server'

const activities = [
  {
    image: 'clientes.png',
    title: 'Deportes'
  },
  {
    image: 'gestion.png',
    title: 'Actividades recreativas'
  },
  {
    image: 'comunicacion.png',
    title: 'Descuentos'
  },
  {
    image: 'clientes.png',
    title: 'Talleres del club'
  }
]

export const getActivities = async () => {
  try {
    //!  data test call to the api
    const response = {
      ok: true,
      message: 'Actividades obtenidas correctamente',
      activities: activities,
    }


    if (!response.ok) {
      return {
        ok: false,
        message: 'No hay actividades disponibles'
      }
    }

    if (!activities) {
      return {
        ok: false,
        message: 'Actividades no encontradas'
      }
    }

    return {
      ok: true,
      message: 'Sessión iniciada correctamente',
      activities: activities,
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Error al obtener las actividades'
    }
  }
}