import { Component, Vue } from 'vue-property-decorator';
import WithRender from './App.html';
import getConfig from './_config';
import { SmartQuery } from 'vue-apollo-decorator';
import JJAL from '@/graphql/query/jjal.gql';
import Card from '@/components/Card';

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
            q: this.searchText,
          };
        },
      })
    private jjal!: IImages[];

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
    }
}

