<template>
  <div class="wrapper">
    <main class="main-page">

      <section class="about">
        <div class="container about-container">
          <div class="about__content">
            <div class="about__title">
              <h2>Hi, I am Ali,</h2>
              <h2>Front-end Developer</h2>
            </div>
            <p class="text about_margin">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <a href="/resume.pdf" download="" class="btn about-btn">
              Download Resume
            </a>
          </div>
          <div class="about__avatar">
          </div>
        </div>
      </section>

      <section class="posts">
        <div class="container posts-container">
          <div class="posts__title">
            <h5 class="title-container">Recent posts</h5>
            <p><nuxt-link to="/blog" class="link__pacific-color">view all</nuxt-link></p>
          </div>
          <div class="posts__item">
            <div class="posts__content">
              <h4 class="title-content">Making a design system from scratch</h4>
              <div class="posts__info">12 Feb 2020 | Design, Pattern</div>
              <p class="text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div class="posts__content">
              <h4 class="title-content">Creating pixel perfect icons in Figma</h4>
              <div class="posts__info">
                <p>12 Feb 2020 | Figma, Icon Design</p>
              </div>
              <p class="text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="works">
        <div class="container works-container">
          <h5 class="title-container title-works">Featured works</h5>
          <works-list/>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import WorksList from "~/components/works/WorksList";

export default {
  components: {WorksList}
}
</script>
<style lang="scss" scoped>
// about page
.about {
  padding: 70px 0;
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap-reverse;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 530px;
  }
  &__title {
    font-family: Heebo, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #21243D;
    margin: 0;
  }
  &_margin{
    margin: 20px 0 40px 0;
  }
  &__avatar {
    width: 240px;
    height: 240px;
    align-self: start;
    background-image: url("../assets/img/avatar.JPG");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
  }
}
// posts page
.posts {
  background: #EDF7FA;
  padding-bottom: 10px;
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .link__pacific-color {
    color: #00A8CC;
  }
  &__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__content {
    width: 420px;
    padding: 25px;
    background-color: #ffffff;
    margin-bottom: 10px;
  }
  &__info {
    font-family: Heebo, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    color: #21243D;
    margin: 10px 0;
  }
}

@media (max-width: 370px) {
  .about {
    padding: 25px 0;
    &-container {
      justify-content: center;
      text-align: center;
      margin: 0 15px;
    }
    &__content {
      align-items: center;
    }
    &__title {
      font-size: 20px;
      line-height: 35px;
      margin-top: 10px;
    }
    &__avatar {
      width: 200px;
      height: 200px;
    }
  }
  .posts {
    &__content {
      padding: 15px;
    }
    &__info {
      font-size: 14px;
      margin: 5px 0;
    }
  }
  .title-works {
    text-align: center;
    line-height: 25px;
  }
}
</style>
