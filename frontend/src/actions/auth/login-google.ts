'use server'

import { auth } from '@/auth.config'

interface ILoginGoogle {
  code: string
  scope: string
  authuser: string
  prompt: string
}

export const loginGoogle = async (data: ILoginGoogle) => {
  const { code, scope, authuser, prompt } = data

  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/v1/auth/google/callback?code=${code}&scope=${scope}&authuser=${authuser}&prompt=${prompt}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    // Obtener la sesión actual
    const currentSession = await auth()
    console.log('currentSession')
    console.log(currentSession)

    const responseData = await response.json()
    console.log('responseData')
    console.log(responseData)

    if (!responseData.success) {
      return {
        ok: false,
        message: responseData.message
      }
    }

    const user = responseData.data

    if (currentSession !== null && currentSession !== undefined) {
      currentSession.user.accessToken = user.accessToken
      currentSession.user.email = user.account.email
      currentSession.user.username = user.account.username
    }

    return {
      ok: true,
      message: 'Sesión iniciada correctamente'
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Server error client'
    }
  }
}