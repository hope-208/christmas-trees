<template>
  <div class="steps">
    <div class="step">
      <el-text class="step__number">1</el-text>
      <div class="step__content">
        <el-text class="step__title">Купите билет<br />на ёлку</el-text>
        <el-text class="step__desc"
          >Покупайте билеты на сайте или в&nbsp;мобильном приложении
          Афиши</el-text
        >
      </div>
      <el-link
        href="https://www.afisha.ru/msk/new-year-for-kids/"
        class="step__button-link"
        target="_blank"
      >
        Купить&nbsp;билет</el-link
      >
    </div>

    <div class="step-group">
      <div class="step">
        <el-text class="step__number">2</el-text>
        <div class="step__content">
          <el-text class="step__title"
            >Отметьтесь здесь, что вы&nbsp;хотите участвовать в&nbsp;розыгрыше
          </el-text>
          <el-text class="step__desc"
            >Подписываясь, вы принимаете&nbsp;
            <el-link class="step__link">Правила рассылок</el-link></el-text
          >
        </div>
      </div>
      <div class="step step__form-container">
        <el-form
          ref="refForm"
          class="step__form"
          :model="formData"
          :rules="rules"
          @submit.prevent="submitForm"
        >
          <el-form-item
            class="step__form-item"
            prop="email"
            :show-message="false"
          >
            <el-input
              class="step__form-input"
              v-model="formData.email"
              type="email"
              placeholder="example@mail.ru"
            />
          </el-form-item>
          <el-text class="step__desc step__desc-form"
            >Введите email, который вы указывали при покупке билета</el-text
          >
          <!-- <el-text
            class="step__desc step__desc-form"
            :class="{
              'step__desc-form_error': checkValidateField('email'),
            }"
            >{{
              checkValidateField("email")
                ? "Введите email, который вы указывали при покупке билета"
                : "Кажется, email введён неверно. Пожалуйста, проверьте, и подтвердите участие ещё раз"
            }}</el-text
          > -->
          <el-form-item
            class="step__form-item"
            prop="contact"
            :show-message="false"
          >
            <el-input
              class="step__form-input"
              v-model="formData.contact"
              placeholder="@nickname / +7 999 000 00 00"
            />
          </el-form-item>
          <el-text class="step__desc step__desc-form"
            >Оставьте свой ник в телеграме или номер телефона, чтобы мы
            связались с вами в случае выигрыша</el-text
          >
        </el-form>
        <el-button
          href="#"
          class="step__button"
          type="primary"
          @click="submitForm"
          >Участвую</el-button
        >
      </div>
      <img
        src="@/assets/img/step-ok.svg"
        alt="Иллюстрация."
        class="step__img"
      />
    </div>

    <div class="step">
      <el-text class="step__number">3</el-text>
      <div class="step__content">
        <el-text class="step__title"
          >До&nbsp;31&nbsp;января раз в&nbsp;неделю проверяйте почту
          и&nbsp;телеграм</el-text
        >
        <el-text class="step__desc"
          >Проверяйте папку входящие и&nbsp;спам, чтобы не&nbsp;пропустить
          важное сообщение о&nbsp;победе</el-text
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ElForm } from "element-plus";
export default {
  name: "StepsItem",
  components: {
    ElForm,
  },
  data() {
    //     const validatePass2 = (rule: any, value: any, callback: any) => {
    //   if (value === '') {
    //     callback(new Error('Please input the password again'))
    //   } else if (value !== ruleForm.pass) {
    //     callback(new Error("Two inputs don't match!"))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      formData: {
        email: "",
        contact: "",
      },
      rules: {
        email: [
          // pass: [{ validator: validatePass, trigger: 'blur' }],
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
        ],
        contact: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    checkValidateField(field) {
      console.log("%c%s", "color: #99614d", field);
      this.$refs.refForm.validateField(field).then((valid) => {
        return valid;
      });
    },
    submitForm() {
      this.$refs.refForm.validate((valid) => {
        if (valid) {
          console.log("%c%s", "color: #00736b", "this.formData", this.formData);

          // const mindboxData = {
          //   email: this.formData.email,
          //   contact: this.formData.contact,
          // };

          // if (this.formData.contact.charAt(0) == "@") {
          //   mindboxData.tg = this.formData.contact;
          // }

          // if (
          //   this.formData.contact.charAt(0) == "+" ||
          //   this.formData.contact.charAt(0) == "8"
          // ) {
          //   mindboxData.mobilePhone = this.formData.contact;
          // }

          // https://api.mindbox.ru/v3/operations/{синхронная/асинхронная операция}?endpointId={уникальный идентификатор сайта/мобильного приложения/и т.п.}&operation={название операции}&deviceUUID={уникальный идентификатор устройства}
          //   axios.post('https://api.mindbox.ru/api/v3/track', formData)
          // .then(response => {
          //   console.log(response.data);
          // })
          // .catch(error => {
          //   console.error(error);
          // });

          // mindbox("async", {
          //   operation: "popup",
          //   data: {
          //     customer: {
          //       email: "pivan@mindbox.ru",
          //       subscriptions: [
          //         {
          //           pointOfContact: "Email",
          //         },
          //       ],
          //     },
          //   },
          // });
        } else {
          console.log("error submit!");
        }
      });
    },
    resetForm() {
      this.$refs.refForm.resetFields();
    },
  },
};
</script>
