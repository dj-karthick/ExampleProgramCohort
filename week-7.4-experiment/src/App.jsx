import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./store/atoms/count";
import { useMemo } from "react";

export default function App(){
  return <RecoilRoot>
    <MainApp></MainApp>
  </RecoilRoot>
}

function MainApp(){
  const networkAtomCount = useRecoilValue(networkAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector); //Better way to do the same operation as useMemo by selectors

  // const totalNotificationCount = useMemo(() => {
  //   return networkAtomCount + notificationAtomCount + jobsAtomCount + messagingAtomCount;
  // }, [networkAtomCount, notificationAtomCount, jobsAtomCount, messagingAtomCount])

  return <div>
    <button> Home </button>
    <button> MyNetwork ({ networkAtomCount >= 100 ? "99+" : networkAtomCount }) </button>
    <button> Jobs ({ notificationAtomCount >= 100 ? "99+" : notificationAtomCount }) </button>
    <button> Messaging ({ messagingAtomCount >= 100 ? "99+" : messagingAtomCount }) </button>
    <button> Notification ({ notificationAtomCount >= 100 ? "99+" : notificationAtomCount }) </button>
    <button> Me ({ totalNotificationCount}) </button>
  </div>
}