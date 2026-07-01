import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { networkAtom, notificationAtom, totalNotificationSelector } from "./store/atoms/count";
import { useEffect, useMemo } from "react";

export default function App(){
  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}

function MainApp(){
  const [notificationCount,  setNotificationCount] = useRecoilState(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector); //Better way to do the ( same operation as useMemo ) by selectors


  useEffect(()=> {  //We cant use like this here it needs to be done inside atom thats the better approach.
    axios.get("https://sum-server.100xdevs.com/notifications")
      .then( res => setNotificationCount( res.data ))
  }, [])

  return <div>
    <button> Home </button>
    <button> MyNetwork ({ notificationCount.network >= 100 ? "99+" : notificationCount.network }) </button>
    <button> Jobs ({ notificationCount.jobs >= 100 ? "99+" : notificationCount.jobs }) </button>
    <button> Messaging ({ notificationCount.messaging >= 100 ? "99+" : notificationCount.messaging }) </button>
    <button> Notification ({ notificationCount.notifications >= 100 ? "99+" : notificationCount.notifications }) </button>

    <button> Me ({ totalNotificationCount}) </button>
  </div>
}