import { cookies } from "next/headers";

interface Params {
  url: string;
  method?: string;
  body?: any | null;
}

export async function getAccessToken() {
  const cookieStore = await cookies()
  return cookieStore.get('id_token')?.value;
}

async function fetchData({ url, method = 'GET', body = null }: Params) {
  try {

    const token = await getAccessToken();
    // Default headers
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }), // Add token if it exists
    };

    // Build fetch options
    const options: RequestInit = {
      method,
      headers,
    };

    // Add body if it's a POST, PUT, or PATCH request
    if (body && ['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())) {
      options.body = JSON.stringify(body);
    }

    // Perform the fetch
    const response = await fetch(url, options);

    // Return the response directly
    return response;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // Rethrow the error for the caller to handle
  }
}

export default fetchData;
