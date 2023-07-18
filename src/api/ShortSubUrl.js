import service from "../util/request";
let url = import.meta.env.VITE_APP_MYURLS_DEFAULT_BACKEND + "/short";

export function api(data) {
  return service.request({
    url: url,
    method: "post",
    headers: {
      "Content-Type": "application/form-data; charset=utf-8",
    },
    data,
  });
}
