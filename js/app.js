const toDoS = [
  {
    text: "Fare i compiti",
    done: false,
  },
  {
    text: "Fare la spesa",
    done: false,
  },
  {
    text: "Buttare spazzatura",
    done: false,
  },
  {
    text: "Fare la doccia",
    done: false,
  },
];

const app = new Vue({
  el: "#app",
  data: {
    todos: toDoS,
    newTodo: "",
  },

  computed: {
    todosDone() {
      return this.todos.filter((todo) => todo.done);
    },
  },

  methods: {
    toggleDoneOf(todo) {
      todo.done = !todo.done;
    },
    onEnter() {
      this.addTodo();
    },

    addTodo() {
      this.newTodo = this.newTodo.trim();

      if (!this.newTodo) return;

      this.todos.push({
        text: this.newTodo,
        done: false,
      });

      this.newTodo = "";
    },
  },
});
