import service from "../util/request"
let short = import.meta.env.VITE_APP_MYURLS_DEFAULT_BACKEND + "/short"
let upload = import.meta.env.VITE_APP_CONFIG_UPLOAD_BACKEND + "/config/upload"

export const api = {
  shortUrl(data) {
    return service.request({
      url: short,
      method: "post",
      data,
    })
  },
  uploadConfig(data) {
    return service.request({
      url: upload,
      method: "post",
      data,
    })
  },
}
