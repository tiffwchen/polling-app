<template>
  <div class="answer">
    <ul class="list-group">
        <!-- <li class="list-group-item"
            v-for="(answer, index) in answerStudentName"
            :key="index"
            >
            {{ answer.studentName }}({{ answer.studentId }}) answered: {{ answer.answer }}
        </li> -->
        <li class="list-group-item"
            v-for="(answer, index) in answers"
            :key="index"
            >
            Student {{answer.studentId}} answered: {{ answer.answer }}
        </li>
    </ul>
  </div>
</template>

<script>
import QuestionDataService from "../services/QuestionDataService";
//import StudentDataService from "../services/StudentDataService";

export default {
  name: "question-view",
  data() {
    return {
      question: {},
      answers: [],
      answerStudentName: [],
      currentAnswer: null,
      currentIndex: -1
    };
  },
  methods: {
    retrieveAnswers(id) {
      QuestionDataService.get(id) 
        .then(response => {
          this.question = response.data;
          this.answers = this.question.answers;
        })
        .catch(e => {
          console.log(e);
        });
      //this.retrieveStudentNames();
    },
    // retrieveStudentNames(){
    //   this.answers.forEach(answer => this.retrieveStudentName(answer));
    // },
    // retrieveStudentName(answer){
    //   StudentDataService.get(answer.studentId) 
    //     .then(response => {
    //       this.student = response.data;
    //       this.answerStudentName.push({answer: answer.answer, studentId: this.student.id, studentName: this.student.name});
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }
  },
  mounted() {
    var id = parseInt(this.$route.params.id);
    this.retrieveAnswers(id);
  }
};
</script>