import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

export const CustomAlert = (props) => {
  const [alertText, setAlertText] = useState(props.text);

  const { setAlertIsShow, setAlertIsDanger, alertIsDanger } =
    useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      setAlertIsDanger(false);
      setAlertIsShow(false);
    }, 2000);
  }, []);

  return (
    <div
      className={
        "alert alert-success " + (alertIsDanger === true ? "danger" : "")
      }
      role="alert"
    >
      {alertText}
    </div>
  );
};
