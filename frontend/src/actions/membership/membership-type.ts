'use server'

export const getMemberShipTypes = async () => {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/v1/memberships`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkMjQzOGQ3Zi1kMmJkLTQ2MmMtOWNmNy1lN2IxMDc3OTA0ZWQiLCJ1c2VyIjoiNzkzZDdkNmQtOTZiOC00MTNhLWJkNmUtOGY5ZGU1Y2U1MjY0Iiwicm9sZSI6Ijc4NWRlY2E5LWUwYzktNDQ5OS05ZTI5LWQwYjUxN2VjNzI5ZCIsImlhdCI6MTcxNzY4NTk5NiwiZXhwIjoxNzE3NzcyMzk2fQ.Q3U1xhSLE4ranNe54CuXi8D4B8Gs7j2ZqWWMYf1I9S0'
        },
      }
    );

    if (!response.ok) {
      return {
        ok: false,
        message: 'No hay membresías disponibles'
      }
    }

    const data = await response.json()

    return {
      ok: true,
      message: 'Membresías obtenidas correctamente',
      membershipTypes: data.date
    }
  } catch (error) {
    return {
      ok: false,
      message: 'Error al obtener las membresías'
    }
  }
}