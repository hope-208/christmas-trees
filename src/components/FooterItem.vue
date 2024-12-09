<template>
  <footer class="footer">
    <el-link href="https://www.afisha.ru/" target="_blank"
      ><img src="@/assets/img/afisha-logo.svg" class="footer__logo"
    /></el-link>

    <div class="footer__info">
      <el-text class="footer__info-text"
        >ООО «Компания Афиша» ОГРН 1157746368999 ИНН 7704314221</el-text
      >
      <el-text class="footer__info-text">
        На информационном ресурсе применяются рекомендательные технологии в
        соответствии с Правилами.
        <el-link
          href="https://www.afisha.ru/article/usloviya-ispolzovaniya/"
          target="_blank"
          class="footer__info-link"
          >Условия&nbsp;использования</el-link
        >,&nbsp;<el-link
          href="https://www.afisha.ru/article/privacy-policy/"
          target="_blank"
          class="footer__info-link"
          >Политика&nbsp;конфиденциальности</el-link
        ></el-text
      >
      <el-text class="footer__info-text">
        ©&nbsp;ООО «Компания Афиша» 1999-2024. 18+</el-text
      >

      <el-text class="footer__info-text"
        >Количество бесплатных билетов на Ёлку от Афиши 6 января равна
        количеству купленных билетов на ёлки на сайте afisha.ru. При возврате
        купленных билетов бесплатные билеты на Ёлку от Афиши
        аннулируются.</el-text
      >
      <el-text class="footer__info-text"
        ><el-link
          href="https://www.afisha.ru/article/pravila-akcii-novogodniy-detskiy-boks-ot-afishi/"
          target="_blank"
          class="footer__info-link"
          >Полные&nbsp;правила</el-link
        >&nbsp;акции «новогодний бокс от Афиши»</el-text
      >
      <el-text class="footer__info-text">
        <el-link href="#" target="_blank" class="footer__info-link"
          >Полные&nbsp;правила</el-link
        >&nbsp;акции «Ёлка от Афиши и Москино»</el-text
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterItem",
};
</script>
