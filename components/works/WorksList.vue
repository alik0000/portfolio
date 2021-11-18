<template>
  <article class="works__content">
    <div v-for="post in loadedPosts" :key="post.id" class="works__item">
      <div class="works_margin-img image-dashboard">
<!--        <img src="~/assets/img/portraits.png" alt="portraits">-->
      </div>
      <div class="works__body">
        <h4 class="works__title">
          {{ post.name }}
        </h4>
        <div class="works__info">
          <div class="works__year">{{ post.created_at }}</div>
          <div class="works__category">{{ post.visibility }}</div>
        </div>
        <p class="text">
          {{ post.description }}
        </p>
      </div>
    </div>

<!--    <div class="works__item">
      <div class="works_margin-img image-portraits">
&lt;!&ndash;        <img src="~/assets/img/designing.png" alt="">&ndash;&gt;
      </div>
      <div class="works__body">
        <h4 class="works__title">
          Vibrant Portraits of 2020
        </h4>
        <div class="works__info">
          <div class="works__year">2018</div>
          <div class="works__category">Illustration</div>
        </div>
        <p class="text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>

    <div class="works__item">
      <div class="works_margin-img image-typography">
&lt;!&ndash;        <img src="~/assets/img/typography.png" alt="">&ndash;&gt;
      </div>
      <div class="works__body">
        <h4 class="works__title">
          36 Days of Malayalam type
        </h4>
        <div class="works__info">
          <div class="works__year">2018</div>
          <div class="works__category">Typography</div>
        </div>
        <p class="text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>-->

  </article>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "WorksList",
  computed: {
    ...mapGetters({
      loadedPosts: 'initRepo/loadedPosts'
    }),
  },
}
</script>

<style lang="scss" scoped>
.works {
  &__item {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid rgba(68, 68, 68, 0.44);
    padding: 20px 0;
  }
  &_margin-img {
    margin-right: 10px;
  }
  &__title {
    font-family: Heebo, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #21243D;
  }
}
.image-portraits {
  @include img("~/assets/img/portraits.png");
}
.image-dashboard {
  @include img("~/assets/img/designing.png");
}
.image-typography {
  @include img("~/assets/img/typography.png");
}

@media (max-width: 370px) {
  .works {
    &__item {
      justify-content: center;
      text-align: center;
    }
    &__title {
      font-weight: bold;
      font-size: 20px;
      margin-top: 10px;
    }
  }
}
</style>
