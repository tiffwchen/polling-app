<template>
    <section v-if="student.name" class="student">
        <div class="student"> 
            <h1>{{ student.name }}'s Answers</h1>
        </div>
    </section>
</template>

<script>
    import StudentDataService from "../services/StudentDataService";

    export default {
    name: "student-view",
    data() {
      return {
        student: {},
        questions: [],
        currentQuestion: null,
        currentIndex: -1
      };
    },
    methods: {
      retrieveStudent() {
        StudentDataService.get(1) 
          .then(response => {
            this.student = response.data;
            this.questions = this.teacher.questions;
            console.log(response.data);
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