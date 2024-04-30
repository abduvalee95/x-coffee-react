import React, { ReactNode, useState } from "react";
import Cookies from "universal-cookie";
import { Member } from "../../lib/types/member";
import { GlobalContext } from "../hooks/useGlobals";

// temporary store bunker

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const cookies = new Cookies();
  if (!cookies.get("accessToken")) localStorage.removeItem("memberData"); // Cookielarni tekshiryabmiz

  const [authMember, setAuthMember] = useState<Member | null>(
    localStorage.getItem("memberData")
      ? JSON.parse(localStorage.getItem("memberData") as string)
      : null
  );
  console.log("===========Verify ++++++++========");

  return (
    <GlobalContext.Provider value={{ authMember, setAuthMember }}>
      {children}
    </GlobalContext.Provider>
  );
};

// asosan authenticationda iwlatishimi z mumkkin 

// index.tsxda renderga wrap qilgandan keyn aplicationimizni ixtiyoriy joyidan chaqira olamiz "authMember, setAuthMember"

export default ContextProvider;
