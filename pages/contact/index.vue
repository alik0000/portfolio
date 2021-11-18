<template>
<section class="contact">
  <div class="container contact-container">
    <h2 class="title">Contact me</h2>
    <div class="contact__content">
      <div class="column__left">
        <div class="title-container">Get in Touch</div>
        <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
        <div class="contact__icons">
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
        <validation-observer v-slot="{ handleSubmit }">
          <form class="form" @submit.prevent="handleSubmit(send)">
            <div class="contact__field">
              <div class="form__field field__name">
                <input type="text" placeholder="Name" v-model="dataForm.name" required>
              </div>
              <div class="form__field field__email">
                <validation-provider
                  rules="email"
                  v-slot="{ errors }">
                <input type="email" placeholder="Email" v-model="dataForm.email" :class="{invalid: errors[0]}">
                  <div class="error">{{ errors[0] }}</div>
                </validation-provider>
              </div>
            </div>
            <div class="form__field field__text">
              <input type="text" placeholder="Subject" v-model="dataForm.subject" required>
            </div>
            <div class="form__field field__textarea">
              <textarea cols="30" rows="10" placeholder="Message.." v-model="dataForm.message" required></textarea>
            </div>
            <button type="submit" class="btn btn_margin" :disabled="invalid" title="Available after filling all field!">Send message</button>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: "index",
  data () {
    return {
      dataForm: {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    }
  },
  methods: {
    send() {
      try {
        this.$mail.send({
          from: this.email,
          subject: this.subject,
          text: this.message
        })
        console.log('Success')
        this.dataForm.name = ''
        this.dataForm.email = ''
        this.dataForm.subject = ''
        this.dataForm.message = ''
      } catch (err) {
        console.error('Error', err)
      }

    }
  },
  computed: {
    invalid() {
      return !this.dataForm.name || !this.dataForm.email || !this.dataForm.subject || !this.dataForm.message
    }
  },
  components: {
    'validation-observer': ValidationObserver,
    'validation-provider': ValidationProvider,
  }
}
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 90px;
}
.contact-container {
  padding: 0;
}
.contact__content {
  position: relative;
  display: flex;
  flex-wrap: wrap;
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
.column__right {
  position: relative;
  width: 50%;
}

.row {
  width: fit-content;
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
.contact__field{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 49%);
  justify-content: space-between;
}
.form__field{
  position: relative;
  height: 45px;
  margin-bottom: 25px;
}
.invalid {
  border-color: crimson;
  color: crimson;
}
input,
textarea{
  height: 100%;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 6px;
  outline: none;
  padding: 5px 15px;
  font-size: 17px;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s ease;
  box-sizing: border-box;
}
input:focus,
textarea:focus{
  border-color: #545454;
}
@media (max-width: 370px) {
  .column__left {
    position: relative;
    width: fit-content;
  }
  .column__right {
    position: relative;
    width: 100%;
  }
  .contact__field{
    grid-template-columns: 100%;
  }
  .form {
    position: relative;
    width: 100%;
  }
}
</style>
