'use server'

const activities = [
  {
    image: '/activity-basquet.jpg',
    title: 'Basquet'
  },
  {
    image: '/activity-gimnasio.jpg',
    title: 'Gimnasio'
  },
  {
    image: '/activity-natacion.jpg',
    title: 'Natación'
  },
  {
    image: '/activity-tenis.jpg',
    title: 'Tenis'
  },
  {
    image: '/activity-futbol.jpg',
    title: 'Fútbol'
  },
  {
    image: '/activity-yoga.jpg',
    title: 'Yoga'
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