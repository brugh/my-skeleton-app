import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from './i18n/en.json';
import nl from './i18n/nl.json';

addMessages('en', en);
addMessages('nl', nl);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
})

