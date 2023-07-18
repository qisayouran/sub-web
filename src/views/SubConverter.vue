<template>
  <div style="margin: 0 10px">
    <el-row style="margin-top: 10px">
      <el-col>
        <el-card>
          <div slot="header">
            订阅转换
            <svg-icon
              icon-class="github"
              style="margin-left: 20px"
              @click="goToProject"
            />
            <div style="display: inline-block; position: absolute; right: 20px">
              {{ backendVersion }}
            </div>
          </div>
          <el-container>
            <el-form :model="form" label-width="80px" style="width: 100%">
              <el-form-item label="模式设置:">
                <el-radio v-model="advanced" label="1">基础模式</el-radio>
                <el-radio v-model="advanced" label="2">进阶模式</el-radio>
              </el-form-item>
              <el-form-item label="订阅链接:">
                <el-input
                  v-model="form.sourceSubUrl"
                  type="textarea"
                  rows="3"
                  placeholder="支持订阅或ss/ssr/vmess链接，多个链接每行一个或用 | 分隔"
                  @blur="saveSubUrl"
                />
              </el-form-item>
              <el-form-item label="客户端:">
                <el-select v-model="form.clientType" style="width: 100%">
                  <el-option
                    v-for="(v, k) in options.clientTypes"
                    :key="k"
                    :label="k"
                    :value="v"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="后端地址:">
                <el-autocomplete
                  style="width: 100%"
                  v-model="form.customBackend"
                  :fetch-suggestions="backendSearch"
                  placeholder="http://127.0.0.1:25500/sub?"
                >
                  <el-button
                    slot="append"
                    @click="gotoGayhub"
                    icon="el-icon-link"
                    >前往项目仓库</el-button
                  >
                </el-autocomplete>
              </el-form-item>

              <el-form-item label="远程配置:">
                <el-select
                  v-model="form.remoteConfig"
                  allow-create
                  filterable
                  placeholder="请选择"
                  style="width: 100%"
                >
                  <el-option-group
                    v-for="group in options.remoteConfig"
                    :key="group.label"
                    :label="group.label"
                  >
                    <el-option
                      v-for="item in group.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-option-group>
                </el-select>
              </el-form-item>

              <div v-if="advanced === '2'">
                <el-form-item label="Include:">
                  <el-input
                    v-model="form.includeRemarks"
                    placeholder="节点名包含的关键字，支持正则"
                  />
                </el-form-item>
                <el-form-item label="Exclude:">
                  <el-input
                    v-model="form.excludeRemarks"
                    placeholder="节点名不包含的关键字，支持正则"
                  />
                </el-form-item>
                <el-form-item label="FileName:">
                  <el-input
                    v-model="form.filename"
                    placeholder="返回的订阅文件名"
                  />
                </el-form-item>
                <el-form-item label-width="0px">
                  <el-row type="flex">
                    <el-col>
                      <el-checkbox
                        v-model="form.nodeList"
                        label="输出为 Node List"
                        border
                      ></el-checkbox>
                    </el-col>
                    <el-popover placement="bottom" v-model="form.extraset">
                      <el-row>
                        <el-checkbox
                          v-model="form.emoji"
                          label="Emoji"
                        ></el-checkbox>
                      </el-row>
                      <el-row>
                        <el-checkbox
                          v-model="form.scv"
                          label="跳过证书验证"
                        ></el-checkbox>
                      </el-row>
                      <el-row>
                        <el-checkbox
                          v-model="form.udp"
                          @change="needUdp = true"
                          label="启用 UDP"
                        ></el-checkbox>
                      </el-row>
                      <el-row>
                        <el-checkbox
                          v-model="form.appendType"
                          label="节点类型"
                        ></el-checkbox>
                      </el-row>
                      <el-row>
                        <el-checkbox
                          v-model="form.sort"
                          label="排序节点"
                        ></el-checkbox>
                      </el-row>
                      <el-row>
                        <el-checkbox
                          v-model="form.fdn"
                          label="过滤非法节点"
                        ></el-checkbox>
                      </el-row>
                      <el-button slot="reference">更多选项</el-button>
                    </el-popover>
                    <el-popover placement="bottom" style="margin-left: 10px">
                      <el-row>
                        <el-checkbox
                          v-model="form.tpl.surge.doh"
                          label="Surge.DoH"
                        ></el-checkbox>
                      </el-row>
                      <el-row>
                        <el-checkbox
                          v-model="form.tpl.clash.doh"
                          label="Clash.DoH"
                        ></el-checkbox>
                      </el-row>
                      <el-row>
                        <el-checkbox
                          v-model="form.insert"
                          label="网易云"
                        ></el-checkbox>
                      </el-row>
                      <el-button slot="reference">定制功能</el-button>
                    </el-popover>
                  </el-row>
                </el-form-item>
              </div>

              <div style="margin-top: 50px"></div>

              <el-divider content-position="center">
                <i class="el-icon-magic-stick"> </i>
              </el-divider>

              <el-form-item label="定制订阅:">
                <el-input class="copy-content" disabled v-model="customSubUrl">
                  <el-button
                    slot="append"
                    v-clipboard:copy="customSubUrl"
                    v-clipboard:success="onCopy"
                    ref="copy-btn"
                    icon="el-icon-document-copy"
                    >复制</el-button
                  >
                </el-input>
              </el-form-item>
              <el-form-item label="订阅短链:">
                <el-input
                  class="copy-content"
                  disabled
                  v-model="curtomShortSubUrl"
                >
                  <el-button
                    slot="append"
                    v-clipboard:copy="curtomShortSubUrl"
                    v-clipboard:success="onCopy"
                    ref="copy-btn"
                    icon="el-icon-document-copy"
                    >复制</el-button
                  >
                </el-input>
              </el-form-item>

              <el-form-item
                label-width="0px"
                style="margin-top: 40px; text-align: center"
              >
                <el-button
                  style="width: 120px"
                  type="danger"
                  size="small"
                  @click="makeUrl"
                  :disabled="form.sourceSubUrl.length === 0"
                  >生成订阅链接</el-button
                >
                <el-button
                  style="width: 120px"
                  type="danger"
                  size="small"
                  @click="makeShortUrl"
                  :loading="loading"
                  :disabled="customSubUrl.length === 0"
                  >生成短链接</el-button
                >
              </el-form-item>
              <el-form-item label-width="0px" style="text-align: center">
                <el-button
                  style="width: 120px"
                  size="small"
                  type="primary"
                  icon="el-icon-upload"
                  :loading="loading"
                  >上传配置</el-button
                >

                <el-button
                  style="width: 120px"
                  type="primary"
                  size="small"
                  @click="clashInstall"
                  icon="el-icon-connection"
                  :disabled="customSubUrl.length === 0"
                  >一键导入Clash</el-button
                >
              </el-form-item>
            </el-form>
          </el-container>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
const defaultBackend = import.meta.env.VITE_APP_SUBCONVERTER_DEFAULT_BACKEND
const tgBotLink = import.meta.env.VITE_APP_BOT_LINK
const remoteConfigSample = import.meta.env.VITE_APP_SUBCONVERTER_REMOTE_CONFIG
const gayhubRelease = import.meta.env.VITE_APP_BACKEND_RELEASE
import { api } from "../api/ShortSubUrl"
import remote from "@/config/remoteConfig"
import clientTypes from "@/config/clientTypesConfig"
export default {
  name: "SubConverter",
  data() {
    return {
      backendVersion: "2.0",
      advanced: "1",

      // 是否为 PC 端
      isPC: true,
      options: {
        clientTypes: clientTypes,
        backendOptions: [
          { name: "本地后端", value: "http://127.0.0.1:25500/sub?" },
          { value: "http://127.1230.0.1:25500/sub?" },
        ],
        remoteConfig: remote,
      },

      form: {
        sourceSubUrl: "",
        clientType: "clash",
        customBackend: "", //后端配置
        remoteConfig: "",
        excludeRemarks: "", //排除备注
        includeRemarks: "", //包含备注
        filename: "", //文件名
        emoji: true,
        nodeList: false,
        extraset: false,
        sort: false,
        udp: false,
        tfo: false,
        scv: true,
        fdn: false,
        appendType: false, //追加类型
        insert: false, // 是否插入默认订阅的节点，对应配置项 insert_url
        new_name: true, // 是否使用 Clash 新字段

        // tpl 定制功能
        tpl: {
          surge: {
            doh: false, // dns 查询是否使用 DoH
          },
          clash: {
            doh: false,
          },
        },
      },

      loading: false,
      customSubUrl: "", //订阅链接RL
      curtomShortSubUrl: "", //简短的短子网址

      dialogUploadConfigVisible: false,
      loadConfig: "",
      dialogLoadConfigVisible: false,
      uploadConfig: "",
      uploadPassword: "",
      myBot: tgBotLink,
      sampleConfig: remoteConfigSample,

      needUdp: false, // 是否需要添加 udp 参数
    }
  },

  methods: {
    onCopy() {
      this.$message.success("Copied!")
    },
    goToProject() {
      window.open(import.meta.env.VITE_APP_PROJECT)
    },
    saveSubUrl() {
      if (this.form.sourceSubUrl !== "") {
        localStorage.setItem("sourceSubUrl", this.form.sourceSubUrl)
      }
    },
    makeUrl() {
      if (this.form.sourceSubUrl === "" || this.form.clientType === "") {
        this.$message.error("订阅链接与客户端为必填项")
        return false
      }
      // 后端地址
      let backend =
        this.form.customBackend === ""
          ? defaultBackend
          : this.form.customBackend

      let sourceSub = this.form.sourceSubUrl
      sourceSub = sourceSub.replace(/(\n|\r|\n\r)/g, "|")
      // 自定义子URL
      this.customSubUrl =
        backend +
        "target=" +
        this.form.clientType +
        "&url=" +
        encodeURIComponent(sourceSub) +
        "&insert=" +
        this.form.insert

      if (this.advanced === "2") {
        // 远程配置
        if (this.form.remoteConfig !== "") {
          this.customSubUrl +=
            "&config=" + encodeURIComponent(this.form.remoteConfig)
        }
        if (this.form.excludeRemarks !== "") {
          this.customSubUrl +=
            "&exclude=" + encodeURIComponent(this.form.excludeRemarks)
        }
        if (this.form.includeRemarks !== "") {
          this.customSubUrl +=
            "&include=" + encodeURIComponent(this.form.includeRemarks)
        }
        if (this.form.filename !== "") {
          this.customSubUrl +=
            "&filename=" + encodeURIComponent(this.form.filename)
        }
        if (this.form.appendType) {
          this.customSubUrl += "&append_type=" + this.form.appendType.toString()
        }

        this.customSubUrl +=
          "&emoji=" +
          this.form.emoji.toString() +
          "&list=" +
          this.form.nodeList.toString() +
          "&tfo=" +
          this.form.tfo.toString() +
          "&scv=" +
          this.form.scv.toString() +
          "&fdn=" +
          this.form.fdn.toString() +
          "&sort=" +
          this.form.sort.toString()

        if (this.needUdp) {
          this.customSubUrl += "&udp=" + this.form.udp.toString()
        }

        if (this.form.tpl.surge.doh === true) {
          this.customSubUrl += "&surge.doh=true"
        }

        if (this.form.clientType === "clash") {
          if (this.form.tpl.clash.doh === true) {
            this.customSubUrl += "&clash.doh=true"
          }

          this.customSubUrl += "&new_name=" + this.form.new_name.toString()
        }
      }

      this.$copyText(this.customSubUrl)
      this.$message.success("定制订阅已复制到剪贴板")
    },
    makeShortUrl() {
      if (this.customSubUrl === "") {
        this.$message.warning("请先生成订阅链接，再获取对应短链接")
        return false
      }

      this.loading = true

      let data = new FormData()
      data.append("longUrl", btoa(this.customSubUrl))

      api(data)
        .then((res) => {
          if (res.Code === 1 && res.ShortUrl !== "") {
            this.curtomShortSubUrl = res.ShortUrl
            this.$copyText(res.ShortUrl)
            this.$message.success("短链接已复制到剪贴板")
          } else {
            this.$message.error("短链接获取失败：" + res.Message)
          }
        })
        .catch(() => {
          this.$message.error("短链接获取失败")
        })
        .finally(() => {
          this.loading = false
        })
    },
    clashInstall() {
      if (this.customSubUrl === "") {
        this.$message.error("请先填写必填项，生成订阅链接")
        return false
      }

      const url = "clash://install-config?url="
      window.open(
        url +
          encodeURIComponent(
            this.curtomShortSubUrl !== ""
              ? this.curtomShortSubUrl
              : this.customSubUrl
          )
      )
    },
    gotoGayhub() {
      window.open(gayhubRelease)
    },
    backendSearch(queryString, cb) {
      let backends = this.options.backendOptions

      let results = queryString
        ? backends.filter(this.createFilter(queryString))
        : backends

      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter(queryString) {
      return (candidate) => {
        console.log(candidate)

        return (
          candidate.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
