import { useState } from "react";
import type { Authorization } from "../domain/Authorization";

const authElem: Authorization[] = []; // or your initial data

export const useAuthorizationList = () => {
  const [authList, setAuthList] = useState<Authorization[]>(authElem);

  const handleChange = <K extends keyof Authorization>(
    id: string,
    field: K,
    value: Authorization[K]
  ) => {
    setAuthList((prevList) =>
      prevList.map((auth) =>
        auth.id === id ? { ...auth, [field]: value } : auth
      )
    );
  };
  
  return { authList, handleChange };
};