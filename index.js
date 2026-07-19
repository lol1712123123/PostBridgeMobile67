import { registerRootComponent } from 'expo';
import App from './App';

if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
  window.Telegram.WebApp.ready();
  window.Telegram.WebApp.expand();
}

registerRootComponent(App);
