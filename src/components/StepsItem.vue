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
              @input="
                formData.contact[0] === '8'
                  ? '+7' + formData.contact.slice(1)
                  : formData.contact
              "
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

  <el-dialog class="dialog" v-model="openInfoSubmit">
    <div class="dialog__content" v-show="submitType === 'success'">
      <img
        src="@/assets/img/step-ok.svg"
        alt="Иллюстрация."
        class="dialog__img"
      />
      <span class="dialog__msg"
        >Заявка на&nbsp;участие в&nbsp;розыгрыше успешно отправлена!</span
      >
    </div>
    <div class="dialog__content" v-show="submitType === 'error'">
      <img
        src="@/assets/img/step-error.svg"
        alt="Иллюстрация."
        class="dialog__img"
      />
      <span class="dialog__msg"
        >Что-то пошло не&nbsp;так. Попробуйте позднее.</span
      >
    </div>
  </el-dialog>
</template>

<script>
import { validateEmail, validateContact } from "@/utils/validate.js";
// import axios from "axios";
// import { ElMessageBox } from "element-plus";

export default {
  name: "StepsItem",

  data() {
    var checkValidEmail = (rule, value, callback) => {
      if (value === "") {
        console.error("Обязательное поле");
        return callback(new Error("Обязательное поле"));
      } else if (!validateEmail(value)) {
        console.error("Неверный формат электронной почты");
        return callback(new Error("Неверный формат электронной почты"));
      } else {
        callback();
      }
    };
    var checkValidContact = (rule, value, callback) => {
      if (value === "") {
        console.error("Обязательное поле");
        return callback(new Error("Обязательное поле"));
      } else if (!validateContact(value)) {
        console.error("Неверный формат электронной почты");
        return callback(new Error("Неверный формат электронной почты"));
      } else {
        callback();
      }
    };
    return {
      openInfoSubmit: false,
      submitType: "success",
      formData: {
        email: "",
        contact: "",
      },
      rules: {
        email: [{ validator: checkValidEmail, trigger: "blur" }],
        contact: [{ validator: checkValidContact, trigger: "blur" }],
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

          this.openInfoSubmit = true;
          this.submitType = "success";
          // const mindboxData = {
          //   pointOfContact: "LendingDetskieYolki",
          //   customer: {
          //     email: this.formData.email,
          //     mobilePhone:
          //       this.formData.contact[0] == "+" ? this.formData.contact : "",
          //     customFields: {
          //       tGNickname:
          //         this.formData.contact[0] == "@" ? this.formData.contact : "",
          //     },
          //     subscriptions: [
          //       {
          //         brand: "Afisha",
          //         pointOfContact: "Email",
          //       },
          //     ],
          //   },
          // };

          // fetch("/mb-afisha/campaigns/operations/8457", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify(mindboxData),
          // })
          //   .then((response) => {
          //     console.log(response.data);
          //     // ElMessageBox.alert("Заявка на участие в розыгрыше отправлена.", "Поздравляем!", {
          //     //   type: "success",
          //     // });
          //   })
          //   .catch((error) => {
          //     console.error(error);
          //     // ElMessageBox.alert(
          //     //   "Что-то пошло не так. Попробуйте позднее.",
          //     //   "Ошибка!",
          //     //   {
          //     //     type: "error",
          //     //   },
          //     // );
          //   });
        } else {
          this.openInfoSubmit = true;
          this.submitType = "error";
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
