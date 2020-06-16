import axios from 'axios';
export const Request = {
  async Header() {
    return axios.create({
      baseURL: 'url weather',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  async GET(url) {
    const api = await this.Header();
    const data = await api.get(url);
    return data;
  },

  async POST(body, url) {
    try {
      console.log('postAPI', JSON.stringify(body), url);
      const api = await this.Header();
      const res = await api.post(url, body);
      if (res) {
        return res.data;
      }
    } catch (error) {
      console.log('Err POST Res', error);
    }
  },
};
