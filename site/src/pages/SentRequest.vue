<template>
  <div class="center">
    <div v-show="!isSent">
      <h2 class="top__content__title">Оставьте вашу заявку</h2>
      <div class="form__box">
        <input type="text" placeholder="name" v-model="name" autofocus />
        <input type="email" placeholder="email" v-model="email" />
        <button @click="sentRequest">Send</button>
      </div>
    </div>
    <div v-show="isSent">
      <h2>thanks for your application</h2>
    </div>
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp.vue";

export default {
  data() {
    return {
      name: "",
      email: "",
      isSent: false,
    };
  },
  methods: {
    async sentRequest() {
      const client = {
        name: this.name,
        email: this.email,
      };
      this.isSent = true;
      // try {
      //   const response = await fetch('........', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(client),
      //   });

      //   if (!response.ok) {
      //     throw new Error('Ошибка при отправке данных');
      //   }

      //   const data = await response.json();
      //   console.log('Ответ от сервера:', data);
      //   this.isSent = true;

      // } catch (error) {
      //   console.log(error);
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
.top__content__title {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}
.form__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
input {
  padding: 4px;
  min-width: 300px;
  max-width: 400px;
  height: 50px;
  font-size: 20px;
  border-radius: 12px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2) inset;
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2) inset;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2) inset;
  border-color: none;
}
button {
  padding: 4px;
  min-width: 300px;
  max-width: 400px;
  height: 50px;
  font-size: 20px;
  border-radius: 12px;
  border-color: none;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
</style>
