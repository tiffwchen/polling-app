# Polling App

Work in progress polling application for the purpose of learning Vue.js. A teacher can create questions, and students can respond from a scale of 1-5. 

## Roadmap

High-level functional requirements of the prototype:

1. The teacher enters and submits a text-based question in a teacher-facing view
2. Students can see the most recent question in a student-facing view and are able to submit their response (fist to five, i.e. 0-5) along with their name
3. The teacher is able to see responses for a single question in a teacher-facing view, both individual responses and some aggregation of the responses, ideally in a visual way
4. The teacher should be able to ask subsequent questions which would start steps 1-3 again

## Dependencies 

Clone polling-app-backend: https://github.com/tiffwchen/polling-app-backend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
