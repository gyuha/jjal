import Card from '@/components/Card';
import { image_search_generator } from 'duckduckgo-images-api';
import { Component, Vue } from 'vue-property-decorator';
import WithRender from './App.html';
import getConfig from './_config';

interface IImages {
  width: number;
  height: number;
  url: string;
  thumbnail: string;
  source: string;
  image: string;
}

@WithRender
@Component({
  props: {},
  components: {
    Card,
  },
})
export default class App extends Vue {
  private images: IImages[] = [];

  private searchText: string = '';

  private defaultJjal: string[] = [
    '펭수', '최신', '유행', '개구리',
  ];

  get title(): string {
    return getConfig().title;
  }

  private mounted() {
    this.searchText = this.defaultJjal[
      Math.floor(Math.random() * (this.defaultJjal.length - 1))
    ];
    this.getImages();
  }

  private async getLocalImages() {
     const images = await this.$http.get('//localhost:3000?q=' + this.searchText);
     this.images = images.data;
  }

  private async getImages() {
    if (process.env.NODE_ENV === 'development') {
      this.getLocalImages();
      return;
    }

    this.images = [];
    const query = '짤 ' + this.searchText;
    for await (const resultSet of await image_search_generator({ query, moderate: true , iterations : 1})) {
      // @ts-ignore
      resultSet.forEach((element: Images) => {
        this.images.push(element);
      });
    }
  }
}
