'use server'

interface ILogin {
  email: string
  password: string
}

export const login = async (data: ILogin) => {
  try {

    //!  data test call to the api
    const response = {
      ok: true,
      message: 'Sessión iniciada correctamente',
      json: async () => ({ password: `${data.password}`, data: `${data.email}` }),
    }


    if (!response.ok) {
      return {
        ok: false,
        message: 'Error al iniciar sesión'
      }
    }

    const user = await response.json()

    if (!user) {
      return {
        ok: false,
        message: 'Error al iniciar sesión'
      }
    }

    const { password: _, ...userWithoutPassword } = user

    return {
      ok: true,
      message: 'Sessión iniciada correctamente',
      userWithoutPassword
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Error al iniciar sesión'
    }
  }
}