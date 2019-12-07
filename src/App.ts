import Card from '@/components/Card';
import JJAL from '@/graphql/query/jjal.gql';
import { SmartQuery } from 'vue-apollo-decorator';
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
    @SmartQuery({
        query: JJAL,
        variables() {
          return {
            q: this.query,
          };
        },
      })
    private jjal!: IImages[];
    private query: string = '';

    private searchText: string = '';

    private defaultJjal: string[] = [
      '펭수', '최신', '유행', '개구리',
    ];

    get title(): string {
      return getConfig().title;
    }

    private mounted() {
      this.query = this.searchText = this.defaultJjal[
        Math.floor(Math.random() * (this.defaultJjal.length - 1))
      ];
    }

    private getImages() {
      this.query = this.searchText;
    }
}
