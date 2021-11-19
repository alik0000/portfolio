<template>
  <article class="works__content">
    <div v-for="post in user.repositories.nodes" :key="post.name" class="works__item">
      <WorkImg :img-url="post.openGraphImageUrl"/>
      <div class="works__body">
        <h4 class="works__title">
          {{ post.name }}
        </h4>
        <div class="works__info">
          <div class="works__year">{{ post.createdAt }}</div>
          <div class="works__category">{{ post.visibility }}</div>
        </div>
        <p class="text">
          {{ post.description }}
        </p>
      </div>
    </div>

  </article>
</template>

<script>
import gql from "graphql-tag"
import WorkImg from "~/components/works/WorkImg";

export default {
  name: "WorksList",
  components: {WorkImg},
  apollo: {
    user: gql`
    query getRepos {
    user(login: "alijonKurbanov1999"){
      repositories(first: 12){
        nodes{
          name,
          description,
          createdAt,
          updatedAt,
          openGraphImageUrl
          }
        }
      }
    }`
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
//.image-portraits {
//  @include img("~/assets/img/portraits.png");
//}
//.image-dashboard {
//  @include img("~/assets/img/designing.png");
//}
//.image-typography {
//  @include img("~/assets/img/typography.png");
//}

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
