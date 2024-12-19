import { cookies } from "next/headers";
import { notFound } from "next/navigation";


export async function getDataAction<T>(path: string, query: string): Promise<T | null> {
  const baseUrl = process.env.BACKEND_URL as string;
   const extendedPath = `/api/v1${path}`
  // const language = outContext ? 'en' : await getLanguage();
  // &locale=${language}
  const url = new URL(extendedPath, baseUrl);
  url.search = `${query}`;

  const cookieStore = await cookies()
  const idToken = cookieStore.get('id_token')

  try {
    const response = await fetch(url.href, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(idToken?.value && { 'Authorization': `Bearer ${idToken.value}` }),
      }
    })

    const resault = await response.json()

    // console.log('resault', resault)
    // console.log('first', resault?.message || resault?.error)
    if (resault?.message || resault?.error) {
      notFound()
    }
    return resault
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}