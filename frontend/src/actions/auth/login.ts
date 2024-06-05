'use server'

interface ILogin {
  username: string
  password: string
}

export const login = async (data: ILogin) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/v1/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(response)
    if (!response.ok) {
      return {
        ok: false,
        message: 'Error al iniciar sesión'
      }
    }

    const rta = await response.json()

    if (!rta) {
      return {
        ok: rta.success,
        message: 'Error al iniciar sesión'
      }
    }

    const user = rta.data.account.user
    console.log(user)
    return {
      ok: rta.success,
      message: 'Sessión iniciada correctamente',
      user
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Error al iniciar sesión'
    }
  }
}