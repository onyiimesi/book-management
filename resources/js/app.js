import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import Toast, { POSITION } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { App } from '@inertiajs/inertia-vue3';

const app = createApp(App);

app.use(Toast, {
    position: POSITION.TOP_RIGHT,
    timeout: 3000,
});

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
      return createApp({ render: () => h(App, props) })
        .use(plugin)
        .mount(el)
    },
  });
