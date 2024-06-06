'use server';

export const getUserStatus = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/v1/users/one/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkMjQzOGQ3Zi1kMmJkLTQ2MmMtOWNmNy1lN2IxMDc3OTA0ZWQiLCJ1c2VyIjoiNzkzZDdkNmQtOTZiOC00MTNhLWJkNmUtOGY5ZGU1Y2U1MjY0Iiwicm9sZSI6Ijc4NWRlY2E5LWUwYzktNDQ5OS05ZTI5LWQwYjUxN2VjNzI5ZCIsImlhdCI6MTcxNzYxNDExOSwiZXhwIjoxNzE3NzAwNTE5fQ.roC0S0SQsB69hehtRBewHtxUAR0AMx77SBMTZR2hTQE'
        },
      }
    );

    if (!response.ok) {
      return {
        ok: false,
        message: 'No se puede obtener el estatus del usuario'
      }
    }

    const data = await response.json()

    return {
      ok: true,
      message: 'Estatus del usuario obtenido correctamente',
      userStatus: data
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Error al obtener el estatus del usuario'
    }
  }
}