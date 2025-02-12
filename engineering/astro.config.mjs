// @ts-check
import { defineConfig } from 'astro/config';
import Unocss from 'unocss/astro';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    // @ts-ignore
    integrations: [Unocss({ injectReset: true, injectEntry: true }), icon()]
});