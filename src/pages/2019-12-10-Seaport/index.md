---
title: 'Quizmate'
description: A REST/GraphQL API experiment delivering trivia questions.
date: '2019-12-11T0900'
image: Capture.PNG
github: https://github.com/itsjustkevin/Quizmate
---

## Introduction

Quizmate is a thought experiment, attempting to build a REST API and a GraphQL API attached to a single source of data. <br /><br />

### Technologies Used

**PHP**<br />
**Laravel**<br />
**PostgreSQL**<br />
**GraphQL**<br />
**Lighthouse**<br />
<br />

### API Usage

<br />

#### Questions

**Url:** /api/questions

value(int): All questions with the requested value.

category(string): All questions in the requested category.<br /><br />

##### Example Query

```
https://quiz-mate-api.herokuapp.com/api/questions?value=100
https://quiz-mate-api.herokuapp.com/api/questions?category=movies
```

<br />

#### Categories

**Url:** /api/categories

##### Example Query

```
https://quiz-mate-api.herokuapp.com/api/categories
```

<br />

#### GraphQL

**Url:** /GraphQL-playground

##### Example Query 1

```
{
  allCategories {
    name
  }
}
```

<br />

##### Example Query 2

```
{
  category(id:9) {
    name
  }
}
```

<br />

##### Example Query 3

```
{
  category(id:9) {
    name
    questions {
      question_text
      answer_text
      value
  }
}
```

<br />

### Lessons Learned

- GraphQL APIs are much more difficult to implement throttling on. I have been researching some methods to get it done, but the implementation is not as simple as with REST APIs.
- A token based authentication system would have worked well for a project like this.
- Creating a separate front-end in Vue or React would have made for more simple GraphQL queries.
- If clients were originally using my REST API, it would have been a fiasco, as I changed too much. I could have approached it with a better solution for versioning such as "test.com/api/v1/questions" which would have made for an easier transition if I had to make a version 2 of the API.<br /><br />

### Final Thoughts

This most important thing I learned through this project is to thoroughly plan before implementing anything. A proper plan would have made building the REST and GraphQL schemas painless.
