<template>
    <section v-if="teacher.name" class="teacher">
        <div class="teacher"> 
            <h1>{{ teacher.name }}'s Question List</h1>
        </div>
        <div class="question">
            <ul class="list-group">
                <li class="list-group-item"
                    :class="{ active: index == currentIndex }"
                    v-for="(question, index) in questions"
                    :key="index"
                    @click="setActiveQuestion(question, index)"
                    >
                    {{ question.question }}
                </li>
            </ul>
        </div>
        <div v-if="currentQuestion">
            <router-link 
            :to="{
                    name: 'question-view',
                    params: { id: currentQuestion.id },
                 }"
                >
            See Answers To Question {{ currentQuestion.id }}: "{{currentQuestion.question}}"
            </router-link>
        </div>
        <div>
            <input v-model="question" placeholder="Add Question" />
            <button class="btn btn-primary"
                type="button"
              @click="addQuestion">Add Question</button>
        </div>
    </section>
</template>

<script>
  import TeacherDataService from "../services/TeacherDataService";
  import QuestionDataService from "../services/QuestionDataService";

  export default {
    name: "teacher-view",
    data() {
      return {
        teacher: {},
        questions: [],
        currentQuestion: null,
        currentIndex: -1
      };
    },
    methods: {
      retrieveTeacher() {
        TeacherDataService.get(1) 
          .then(response => {
            this.teacher = response.data;
            this.questions = this.teacher.questions;
          })
          .catch(e => {
            console.log(e);
          });
      },
      addQuestion() {
        QuestionDataService.create({ question: this.question, teacherId: this.teacher.id})
          .then(response => {
            this.tutorials = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
        this.refreshList();
      },
      setActiveQuestion(question, index) {
        this.currentQuestion = question;
        this.currentIndex = question ? index : -1;
      },
  
      refreshList() {
        this.retrieveTeacher();
        this.currentQuestion = null;
        this.currentIndex = -1;
      },
  

  
    //   removeAllTutorials() {
    //     TutorialDataService.deleteAll()
    //       .then(response => {
    //         console.log(response.data);
    //         this.refreshList();
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   },
      
    //   searchTitle() {
    //     TutorialDataService.findByTitle(this.title)
    //       .then(response => {
    //         this.tutorials = response.data;
    //         this.setActiveTutorial(null);
    //         console.log(response.data);
    //       })
    //       .catch(e => {
    //         console.log(e);
    //       });
    //   }
    },
    mounted() {
      this.retrieveTeacher();
    }
  };
  
</script>