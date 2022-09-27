// Your API key: 29475496-a0d14b96a759a0122b7f266e2

const axios = require('axios').default;
const API_KEY = '29475496-a0d14b96a759a0122b7f266e2';
const BASE_URL = 'https://pixabay.com/api';
const QUANTITY = 40;

export default class CartApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.totalHits = 0;
  }

  async fetchCart() {
    console.log(this);

    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&language=en&per_page=${QUANTITY}&page=${this.page}`;
    try {
      const response = await axios.get(url);
      
      const data = response.data;
      
      this.incrementPage();

      this.totalHits = data.totalHits;
      return data.hits;
    } catch (error) {
      console.error(error);
    }
  }

   incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}