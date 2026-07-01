import { atom, selector } from "recoil"

export const notificationAtom = atom({  //This is the wrong approach because values not be hard corded to default
    key: "notificationAtom",            //it must be fetch from the server and update the current value of atom.
    default: {                          //so we use asynchronous data query which we will see in further.
        network: 0,
        jobs: 0,
        messaging: 0,
        notifications: 0
    }
})

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notificationAtom);
        return allNotifications.network +
            allNotifications.jobs +
            allNotifications.messaging + 
            allNotifications.notifications
    }
})