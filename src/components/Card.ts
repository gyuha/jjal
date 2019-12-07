import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './Card.html';

@WithRender
@Component({
})
export default class TodoList extends Vue {
  @Prop()
  private image: any;

  private copyToClipboard() {
    console.log('copy');
    this.$copyText(this.image.image);
  }
}
