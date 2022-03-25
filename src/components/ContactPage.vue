<template>
  <div class="container">
    <form id="contact-form" name="contact form" method="post" netlify-honeypot="bot-field" netlify>
      <span class="honeypot">
        <label>Don't complete this if you're human:
          <input name="bot-field" /> 
        </label>
      </span>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" placeholder="name@example.com">
      </div>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">City</label>
        <input type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label for="textArea" class="form-label">Message:</label>
        <textarea class="form-control" id="textArea" rows="3"></textarea>
      </div>
      <div>
        <input type="button" id="btn-refresh" value="Refresh Numbers" @click="drawCaptcha()" />
        <input type="text" id="txt-captcha" readonly="readonly" value="txtCaptcha" />
      </div>
      <input autocomplete="off" type="text" id="txt-input" placeholder="Enter numbers as shown above" v-model="textVal" @input="check(textVal)"
        required /> 
      <br> <br> <br>
      <input v-if="doesMatch" type="submit" id="submit" name="submit" value="Submit" class="btn btn-secondary" />
    </form>
    <div class="resume">
      <a href="../assets/KMSkelton_Feb2022.pdf" target="_blank">Download my resume as PDF</a>
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