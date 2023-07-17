import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'; // svg组件
import "virtual:svg-icons-register"; // vite-plugin-svg-icons 插件注册，不引入会导致svg图标无法正常显示

Vue.component('svg-icon', SvgIcon);
