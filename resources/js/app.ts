import "../css/app.css";
import { createApp, h } from "vue";
import { createInertiaApp, Link } from "@inertiajs/vue3";
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faPaperPlane,
  faUser,
  faAt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHeart, faMessage, faPaperPlane, faUser, faAt, faLock);
const pinia = createPinia()


createInertiaApp({
  resolve: (name) => import(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(pinia)
      .component("TLink", Link)
      .component("font-awesome-icon", FontAwesomeIcon)
      .mount(el);
  },
});
