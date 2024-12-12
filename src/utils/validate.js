export function validateEmail(str) {
  const reg =
    /^(([^<>()[\]\\.,;:\s@\\""]+(\.[^<>()[\]\\.,;:\s@\\""]+)*)|("".+""))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // /^[\p{L}0-9_\-!#$%&'*+/=?^`{|}~][\p{L}0-9_\-!#$%&'*+/=?^`{|}~.]*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;

  return reg.test(str);
}
// https://help.mindbox.ru/docs/%D0%BA%D0%B0%D0%BA%D0%B8%D0%B5-%D0%B5%D1%81%D1%82%D1%8C-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D0%B2%D0%B0%D0%BB%D0%B8%D0%B4%D0%B0%D1%86%D0%B8%D0%B8-%D0%BF%D0%BE%D0%BB%D0%B5%D0%B8

export function validateContact(str) {
  if (str[0] === "@") {
    const reg = /^@[^\s@]+$/;
    // /^@[a-zA-Z0-9_]{5,32}$/
    return reg.test(str);
  } else {
    const reg =
      /(?:\+7|7|8)?\s*(?:\(?\d{3}\)?[\s-]?|\d{3})?\s*\d{3}[\s-]?\d{2}[\s-]?\d{2}|\(?\d{3}\)?[\s-]?\d{7}|\d{3}[\s-]?\d{2}[\s-]?\d{2}|\d{10,15}/g;
    return reg.test(str);
  }
}
