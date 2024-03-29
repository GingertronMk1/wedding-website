export default defineNuxtRouteMiddleware(() => {
  if (typeof window !== "undefined") {
    const localStorageItem = "ji-wedding-pw";
    const pw = "boat party";
    const hasEntered = window.localStorage.getItem(localStorageItem);

    if (window.location.hash === "#invitation-link") {
      window.localStorage.setItem(localStorageItem, btoa(pw));
      return;
    }
    if (hasEntered !== null && atob(hasEntered) === pw) {
      return;
    }

    window.localStorage.removeItem(localStorageItem);

    let enteredPw = "";
    while (enteredPw !== pw) {
      enteredPw = window.prompt("Please enter the password");
      if (enteredPw === null) {
        throw createError({
          statusCode: 403,
        });
      }
    }
    window.localStorage.setItem(localStorageItem, btoa(enteredPw));
  }
});
