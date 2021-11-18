<template>
  <section class="blog">
    <div class="container blog-container">
      <h4 class="title-content">Blog</h4>
      <article class="blog__content">
        <div class="blog__item">
          <h4 class="title-content">
            UI Interactions of the week
          </h4>
          <div class="posts__info">
            <p>12 Feb 2019 | Express, Handlebars</p>
          </div>
          <p class="text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div class="blog__item">
          <h4 class="title-content">
            UI Interactions of the week
          </h4>
          <div class="posts__info">
            <p>12 Feb 2019 | Express, Handlebars</p>
          </div>
          <p class="text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
<!--        <div class="blog__item">
          <h4 class="title-content">
            UI Interactions of the week
          </h4>
          <div class="posts__info">
            <p>12 Feb 2019 | Express, Handlebars</p>
          </div>
          <p class="text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div class="blog__item">
          <h4 class="title-content">
            UI Interactions of the week
          </h4>
          <div class="posts__info">
            <p>12 Feb 2019 | Express, Handlebars</p>
          </div>
          <p class="text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>-->
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>
.blog {
  margin-top: 90px;
}
.blog__item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid rgba(68, 68, 68, 0.44);
  padding: 20px 0;
}
</style>
