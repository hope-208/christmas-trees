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
              v-model.trim="formData.email"
              type="email"
              placeholder="example@mail.ru"
            />
          </el-form-item>
          <el-text class="step__desc step__desc-form" id="emailInfo"
            >Введите email, который вы указывали при покупке билета</el-text
          >
          <el-form-item
            class="step__form-item"
            prop="contact"
            :show-message="false"
          >
            <el-input
              class="step__form-input"
              v-model.trim="formData.contact"
              placeholder="@nickname / +7 999 000 00 00"
            />
          </el-form-item>
          <el-text
            class="step__desc step__desc-form step__desc-form_two-child"
            id="contactInfo"
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
    <div class="dialog__content">
      <img
        v-show="submitType === 'success' || submitType === 'warning'"
        src="@/assets/img/step-ok.svg"
        alt="Иллюстрация."
        class="dialog__img"
      />
      <img
        v-show="submitType === 'error'"
        src="@/assets/img/step-error.svg"
        alt="Иллюстрация."
        class="dialog__img"
      />
      <span class="dialog__msg" v-show="submitType === 'success'"
        >Заявка на&nbsp;участие в&nbsp;розыгрыше успешно отправлена!</span
      >
      <span class="dialog__msg" v-show="submitType === 'error'"
        >Что-то пошло не&nbsp;так. Попробуйте позднее.</span
      >
      <span class="dialog__msg" v-show="submitType === 'warning'"
        >Пожалуйста, заполните корректно все поля, чтобы мы могли связаться с
        вами.</span
      >
    </div>
  </el-dialog>
</template>

<script>
import { validateEmail, validateContact } from "@/utils/validate.js";

export default {
  name: "StepsItem",

  data() {
    var checkValidEmail = (rule, value, callback) => {
      const emailElInfo = document.getElementById("emailInfo");
      if (value === "" || !validateEmail(value)) {
        emailElInfo.classList.add("step__desc-form_error");
        emailElInfo.textContent =
          "Кажется, email введён неверно. Пожалуйста, проверьте, и подтвердите участие ещё раз";
        return callback(
          new Error(
            "Кажется, email введён неверно. Пожалуйста, проверьте, и подтвердите участие ещё раз",
          ),
        );
      } else {
        if (emailElInfo.classList.contains("step__desc-form_error")) {
          emailElInfo.classList.remove("step__desc-form_error");
          emailElInfo.textContent =
            "Введите email, который вы указывали при покупке билета";
        }
        callback();
      }
    };
    var checkValidContact = (rule, value, callback) => {
      const contactElInfo = document.getElementById("contactInfo");
      if (value === "" || !validateContact(value)) {
        contactElInfo.classList.add("step__desc-form_error");
        contactElInfo.textContent =
          "Пожалуйста, заполните все поля, чтобы мы могли связаться с вами";
        return callback(
          new Error(
            "Пожалуйста, заполните все поля, чтобы мы могли связаться с вами",
          ),
        );
      } else {
        if (contactElInfo.classList.contains("step__desc-form_error")) {
          contactElInfo.classList.remove("step__desc-form_error");
          contactElInfo.textContent =
            "Оставьте свой ник в телеграме или номер телефона, чтобы мы связались с вами в случае выигрыша";
        }
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
    submitForm() {
      this.$refs.refForm.validate((valid) => {
        if (valid) {
          console.log("%c%s", "color: #0088cc", typeof this.formData.contact);
          const mindboxData = {
            operation: "ChildrenChristmasTrees",
            data: {
              pointOfContact: "LendingDetskieYolki",
              customer: {
                email: this.formData.email,
                mobilePhone:
                  this.formData.contact[0] == "+" &&
                  this.formData.contact[1] == "7"
                    ? this.formData.contact
                    : this.formData.contact[0] == "7"
                      ? "+" + this.formData.contact.slice(1)
                      : this.formData.contact[0] == "8"
                        ? "+7" + this.formData.contact.slice(1)
                        : "",
                customFields: {
                  tGNickname:
                    this.formData.contact[0] == "@"
                      ? this.formData.contact
                      : "",
                },
                subscriptions: [
                  {
                    brand: "Afisha",
                    pointOfContact: "Email",
                  },
                ],
              },
            },
          };
          //  fetch("/mb-afisha/campaigns/operations/8457", {
          fetch("https://afisha.mindbox.ru/campaigns/operations/8457", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "SecretKey Pvy4NXkI1ufWaSlPJC0cK5anxe3SuhpL",
              Accept: "application/json",
            },
            body: JSON.stringify(mindboxData),
          })
            .then(() => {
              this.submitType = "success";
              this.openInfoSubmit = true;
              this.resetForm();
            })
            .catch((error) => {
              console.error(error);
              this.submitType = "error";
              this.openInfoSubmit = true;
            });
        } else {
          this.openInfoSubmit = true;
          this.submitType = "warning";
          console.log("Поля формы заполнены некорректно!");
        }
      });
    },
    resetForm() {
      this.$refs.refForm.resetFields();
    },
  },
};
</script>
