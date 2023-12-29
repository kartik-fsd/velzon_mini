import flagus from "../assets/flags/us.svg";
import flagspain from "../assets/flags/spain.svg";
import flaggermany from "../assets/flags/germany.svg";
import flagitaly from "../assets/flags/italy.svg";
import flagrussia from "../assets/flags/russia.svg";
import flagchina from "../assets/flags/china.svg";
import flagfrench from "../assets/flags/french.svg";
import flagarabic from "../assets/flags/ar.svg";


const languages = {
  sp: {
    label: "Española",
    flag: flagspain,
  },
  gr: {
    label: "Deutsche",
    flag: flaggermany,
  },
  it: {
    label: "Italiana",
    flag: flagitaly,
  },
  rs: {
    label: "русский",
    flag: flagrussia,
  },
  en: {
    label: "English",
    flag: flagus,
  },
  cn: {
    label: "中国人",
    flag: flagchina,
  },
  fr: {
    label: "français",
    flag: flagfrench,
  },
  ar: {
    label: "Arabic",
    flag: flagarabic,
  },
}

export default languages
