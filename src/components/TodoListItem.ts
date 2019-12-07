import { Vue, Component, Prop, PropSync, Watch } from 'vue-property-decorator';
import WithRender from './TodoListItem.html';
import { ITodo } from './TodoList';
import './TodoListItem.scss';

@WithRender
@Component({
  props: {
    index: Number,
  },
})
export default class TodoListItem extends Vue {
  @Prop(Object)
  private item!: ITodo;

  private isEdit: boolean = false;
  private task: string = '';

  private createdAt: string = '';

  private setEdit() {
    this.task = this.item.task;
    this.isEdit = true;
    this.$nextTick(() => {
      (this.$refs.inputEdit as HTMLInputElement).focus();
    });
  }

  @Watch('item.isCompleted')
  private onCompletechange(newVal: boolean, oldVal: boolean) {
    this.$emit('update', this.item.id, { isCompleted: newVal });
  }

  private updateTask() {
    this.$emit('update', this.item.id, { task: this.task });
    this.isEdit = false;
  }

  private deleteTask() {
    this.$emit('remove', this.item.id);
  }

  private created() {
    this.updateCreatedAt();
    setInterval(this.updateCreatedAt, 60 * 1000);
  }

  private updateCreatedAt() {
    this.createdAt = this.$moment(this.item.createdAt).fromNow();
  }
}
