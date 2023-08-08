<template>
    <div>
      <h2>Create Task</h2>
      <form @submit.prevent="createTask">
        <label>Title:</label>
        <input v-model="task.title" required>
        <label>Description:</label>
        <textarea v-model="task.description" required></textarea>
        <button type="submit">Create Task to add in the list</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        task: {
          title: '',
          description: '',
          completed: false,
        },
      };
    },
    methods: {
      createTask() {
        this.$store.commit('addTask', this.task);
        this.$router.push('/tasks'); // Redirect to task list
      },
    },
  };
  </script>
  