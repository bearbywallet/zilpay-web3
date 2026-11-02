import { handler, zilPay } from './lib';

(function () {
  if (!globalThis.window || !globalThis.document || (globalThis.window as any)['zilPay']) {
    console.warn('zilPay already exists or not in browser');
    return;
  }
  handler.initialized();
  (globalThis.window as any)['zilPay'] = zilPay;
  console.log('zilPay injected:', (globalThis.window as any)['zilPay']);
})();
