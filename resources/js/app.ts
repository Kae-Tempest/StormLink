import '../css/app.css'
import {createApp, h} from 'vue';
import { createInertiaApp, Link } from '@inertiajs/vue3';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
import {
    faPaperPlane,
    faUser,
    faAt,
    faLock,
    faHeart as fasHeart
} from "@fortawesome/free-solid-svg-icons";

library.add(faHeart, faMessage, faPaperPlane, faUser, faAt, faLock, fasHeart);

createInertiaApp({
    //@ts-ignore
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
        return pages[`./Pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .component("TLink", Link)
            .component("font-awesome-icon", FontAwesomeIcon)
            .mount(el)
    },
})
