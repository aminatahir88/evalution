<template>
    <div>
      <h2>Task List</h2>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          {{ task.title }} - {{ task.description }} - {{ task.completed ? 'Completed' : 'Not Completed' }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      tasks() {
        return this.$store.state.tasks;
      },
    },
  };
  </script>
  