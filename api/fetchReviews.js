import axios from "axios"
export default async function fetchReviews() {
    const url = 'https://6348b82ea59874146b0f8c0a.mockapi.io/'
    const apiKey = '28349117-93ec80a92256e0e2caaa1ba86'
    const response = await axios({

        url: 'https://6348b82ea59874146b0f8c0a.mockapi.io/'
    }
    )
    console.log(response);
    // const res = await response.json();
    return response
}


