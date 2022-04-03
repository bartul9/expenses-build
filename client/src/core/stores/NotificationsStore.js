import { toast } from 'react-toastify';


class NotificationsStore {

    error(message) {
        toast.error(message || "Error occurred!");
    }

    success(message) {
        toast.success(message || "Updated successfully");
    }

    info(message) {
        toast.info(message);
    }

}

export default NotificationsStore;