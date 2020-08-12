import axios from 'axios'

interface Url {
    code: string,
    url: string
}

export async function shortenUrl(url: string): Promise<Url> {
    const baseURL = "http://localhost:8082"
    const response = await axios.post<Url>(`${baseURL}/api/url`, { "url": url })
    return response.data
}