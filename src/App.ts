import { Component, Vue } from 'vue-property-decorator';
import WithRender from './App.html';
import getConfig from './_config';
import {image_search} from 'duckduckgo-images-api';

@WithRender
@Component({
  props: {},
})
export default class App extends Vue {
    private searchText:string = '';
    get title() {
        return getConfig().title;
    }

    async getImages() {
        console.log(this.searchText);
        image_search({ query: this.searchText, moderate: true }).then(
            results=>console.log(results)
            );
    }
}
