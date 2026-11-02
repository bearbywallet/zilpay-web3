import { ReqBody } from "types";
import { MTypeTabContent } from "./stream-keys";


export class FlutterStream {
  public listen(cb: (payload: ReqBody) => void) {
    if (window.webview_plus) {
      window.addEventListener('message', (event) => {
        const data = event.data;
        if (data) {
          cb(data);
        }
      });
    } else {
       document.addEventListener(MTypeTabContent.INJECTED, (event) => {
        const detail = (event as any).detail;

        if (detail) {
          cb(JSON.parse(detail));
        }
      }); 
    }
  }

  public send(data: ReqBody) {
    if (typeof window !== 'undefined' && window.webview_plus?.callHandler) {
      window.webview_plus.callHandler('ZilPayLegacy', JSON.stringify(data))
        .catch(() => {
          if (window.ZilPayLegacy) {
            window.ZilPayLegacy.postMessage(JSON.stringify(data));
          } else {
            window.postMessage(data, '*');
          }
        });
    } else {
      this.#dispatch(JSON.stringify(data), MTypeTabContent.CONTENT);
    }
  }

  #dispatch(data: string, to: string) {
    document.dispatchEvent(this.#getEvent(data, to));
  }

  #getEventInit(detail: string) {
    return {
      detail
    };
  }

  #getEvent(detail: string, to: string) {
    return new CustomEvent(to, this.#getEventInit(detail));
  }
}

declare global {
  interface Window {
    ZilPayLegacy?: {
      postMessage: (msg: string) => void;
    };
    webview_plus?: {
      callHandler: (handlerName: string, ...args: any[]) => Promise<any>;
    };
  }
}
