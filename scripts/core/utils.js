export function setCookie(name, value) {
  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  document.cookie = updatedCookie;
  console.log(document.cookie);
}

export function getCookie(name) {
    let cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        let splitted = cookie.split("=");
        if (name == splitted[0].trim()) return splitted[1].trim();
    }
    return undefined;
}