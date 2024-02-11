import { showToast } from "../Helpers/ToastHelpers";
import APIManger from "./APIManger";

export function errorHanlder(error: any): void {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.response.data.detail_messages.forEach((errorData:string) => {
          showToast('error', errorData);
        });
        break;
      case 401:
      case 403:
        if (!APIManger.sessionExpiredToastShown) {
          APIManger.sessionExpiredToastShown = true;
          setTimeout(() => {
            APIManger.sessionExpiredToastShown = false;
          }, 2000);
          APIManger.logout()
        }
        break;
      case 500:
        showToast('error', 'Server error occured. Please contact the website administrator.');
        break;
    }
  }
}
