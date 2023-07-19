// 远程配置
export default [
  {
    label: "默认",
    options: [
      {
        label: "不选，由接口方提供",
        value: "",
      },
    ],
  },
  {
    label: "定制",
    options: [
      {
        label: "Maying",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini",
      },
      {
        label: "Ytoo",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini",
      },
      {
        label: "FlowerCloud",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini",
      },
      {
        label: "Nexitally",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini",
      },
      {
        label: "SoCloud",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini",
      },
      {
        label: "ARK",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini",
      },
      {
        label: "ssrCloud",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini",
      },
    ],
  },
  {
    label: "ACL规则",
    options: [
      {
        label: "ACL_默认版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini",
      },
      {
        label: "ACL_无测速版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini",
      },
      {
        label: "ACL_去广告版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini",
      },
      {
        label: "ACL_多国家版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_MultiCountry.ini",
      },
      {
        label: "ACL_无Reject版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini",
      },
      {
        label: "ACL_无测速精简版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini",
      },
      {
        label: "ACL_全分组版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini",
      },
      {
        label: "ACL_全分组谷歌版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini",
      },
      {
        label: "ACL_全分组多模式版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini",
      },
      {
        label: "ACL_全分组奈飞版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini",
      },
      {
        label: "ACL_精简版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini",
      },
      {
        label: "ACL_去广告精简版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini",
      },
      {
        label: "ACL_Fallback精简版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini",
      },
      {
        label: "ACL_多国家精简版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini",
      },
      {
        label: "ACL_多模式精简版",
        value:
          "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini",
      },
    ],
  },
  {
    label: "universal",
    options: [
      {
        label: "No-Urltest",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini",
      },
      {
        label: "Urltest",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini",
      },
    ],
  },
  {
    label: "特殊",
    options: [
      {
        label: "NeteaseUnblock(仅规则，No-Urltest)",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini",
      },
      {
        label: "Basic(仅GEOIP CN + Final)",
        value:
          "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini",
      },
      {
        label: "NeteaseUnblock",
        value:
          "https://raw.githubusercontent.com/SleepyHeeead/subconverter-config/master/remote-config/special/netease.ini",
      },
    ],
  },
]
