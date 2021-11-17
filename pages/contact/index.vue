<template>
<section class="contact">
  <div class="container contact-container">
    <h2 class="title">Contact me</h2>
    <div class="contact__content">
      <div class="column__left">
        <div class="title-container">Get in Touch</div>
        <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
        <div class="icons">
          <div class="row">
            <fa :icon="['fas', 'user']" size="2x"/>
            <div class="info">
              <div class="head">Name</div>
              <div class="sub-title">Ali</div>
            </div>
          </div>
          <div class="row">
            <fa :icon="['fas', 'search-location']" size="2x"/>
            <div class="info">
              <div class="head">Address</div>
              <div class="sub-title">Tomsk, Usova 21/2</div>
            </div>
          </div>
          <div class="row">
            <fa :icon="['fas', 'envelope']" size="2x"/>
            <div class="info">
              <div class="head">Email</div>
              <div class="sub-title">alijon.kurbanov.99@mail.ru</div>
            </div>
          </div>
        </div>
      </div>
      <div class="column__right">
        <div class="title-container">Message me</div>
        <form action="#" class="from">
          <div class="contact__fields">
            <div class="form__field field__name">
              <input type="text" placeholder="Name" required>
            </div>
            <div class="form__field field__email">
              <input type="email" placeholder="Email" required>
            </div>
          </div>
          <div class="form__field field__text">
            <input type="text" placeholder="Subject" required>
          </div>
          <div class="form__field field__textarea">
            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
          </div>
          <button type="submit" class="btn btn_margin">Send message</button>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="scss" scoped>
.contact__content {
  display: flex;
  margin-top: 20px;
}
.title {
  font-family: Heebo, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 38px;
  color: #21243D;
  text-align: center;
}
.column__left {
  font-family: Heebo, sans-serif;
  font-style: normal;
  font-weight: normal;
  width: 50%;
}
.row {
  display: flex;
  align-items: center;
  margin-top: 15px;
}
.sub-title {
  color: rgba(0, 0, 0, 0.34);
}
.info {
  margin-left: 10px;
}
.form__field{
  height: 45px;
  width: 100%;
  margin-bottom: 15px;
}
.contact__fields {
  display: flex;
  justify-content: space-between;
  grid-column-gap: 50px;
}
.field__textarea{
  height: 80px;
  width: 100%;
}
input,
textarea{
  height: 70%;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 6px;
  outline: none;
  padding: 5px 15px;
  font-size: 17px;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;

}
.form__field .field__input:focus,
.form__field .field__textarea .field__textarea:focus{
  border-color: #b3b3b3;
}
//.btn_margin {
  //margin-top: 10px;
//}
</style>
