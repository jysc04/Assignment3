import { useContext } from "react";
import ApplicationContext from "./ApplicationContext";

const useApplications = () => {
  return useContext(ApplicationContext);
};

export default useApplications;