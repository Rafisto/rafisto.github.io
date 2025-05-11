const lang = "app.language"
const defaultLang = "PL"

const LanguageLoad = () => {
  if(localStorage.getItem(lang) !== null){
    return (localStorage.getItem(lang) as string)
  }
  return (defaultLang)
}

const LanguageSave = (setLang: string) => {
  localStorage.setItem(lang,setLang)
}

export {LanguageLoad, LanguageSave}