import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import i18n from "./plugins/i18n";
import router from "./routes/route";

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$test = "test";

app.use(i18n);
app.use(pinia);
app.use(router);
app.mount("#app");
