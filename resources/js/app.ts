import "../css/app.css";
import { createApp, h } from "vue";
import { createInertiaApp, Link } from "@inertiajs/vue3";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCirclePlay,
  faHeart,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import {
  faImage,
  faPaperPlane,
  faUser,
  faAt,
  faLock
} from "@fortawesome/free-solid-svg-icons";

library.add(faImage, faCirclePlay, faHeart, faMessage, faPaperPlane, faUser, faAt, faLock);

createInertiaApp({
  resolve: (name) => import(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component("TLink", Link)
      .component("font-awesome-icon", FontAwesomeIcon)
      .mount(el);
  },
});
