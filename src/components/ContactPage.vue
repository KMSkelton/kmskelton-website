<template>
  <div class="container">
    <form id="contact-form" name="contact-form" method="POST" action="/" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="form-name" value="contact-form" /> 
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input name="email" type="email" class="form-control" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input name="name" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">City</label>
        <input name="city" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label for="textArea" class="form-label">Message:</label>
        <textarea name="message" type="text" class="form-control" id="textArea" rows="3"></textarea>
      </div>
      <div>
        <input name="drawCaptcha" type="button" id="btn-refresh" value="Refresh Numbers" @click="drawCaptcha()" />
        <input name="txtCaptcha" type="text" id="txt-captcha" readonly="readonly" value="txtCaptcha" />
      </div>
      <input name="textVal" autocomplete="off" type="text" id="txt-input" placeholder="Enter numbers as shown above" v-model="textVal" @input="check(textVal)"
        required /> 
      <br> <br> <br>
      <input v-if="doesMatch" type="submit" id="submit" name="submit" value="Submit" class="btn btn-secondary" />
    </form>
    <div class="resume">
      <iframe src="../assets/KMSkelton_Feb2022.pdf"  style="width: 100%; height: 100%; border: none">
        View my resume as PDF
      </iframe>
    </div>
  </div>
</template>

<style scoped>
.honeypot {
  display: none;
}
</style>

<script>
import { drawCaptcha, check } from "@/services/flipper.js"
export default {
  data() {
    return {
      textVal: "",
      txtCaptcha: "",
      doesMatch: false
    }
  },
  mounted() {
    drawCaptcha()
  },
  methods: {
    drawCaptcha() {
      },
    check(e) {
      this.txtCaptcha = document.getElementById("txt-captcha").value
      check(e)
      return this.doesMatch = this.textVal === this.txtCaptcha.replace(/\s+/g, '')
    }
  }
}
</script>
<style scoped>
.resume {
  position: absolute;
  bottom: -30%;
  left: 50%;
  right: 50%;
  width: 30%;
}
.resume a {
  color: #D8AA4795;
  font-size: 130%;
}

</style>