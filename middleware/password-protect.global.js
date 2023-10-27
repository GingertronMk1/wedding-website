export default defineNuxtRouteMiddleware((to, from) => {
  if (typeof window !== "undefined") {
    const localStorageItem = "ji-wedding-pw";
    const pw = "boat party";
    const hasEntered = window.localStorage.getItem(localStorageItem);
    if (hasEntered !== null && atob(hasEntered) === pw) {
      return;
    }

    let enteredPw = "";
    while (enteredPw !== pw) {
      enteredPw = window.prompt("Please enter the password");
      if (enteredPw === null) {
        window.close();
      }
    }
    window.localStorage.setItem(localStorageItem, btoa(enteredPw));
  }
});
