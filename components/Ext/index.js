import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";

export default function Ext() {
  const {
    signup,
    login,
    logout,
    isAuthenticating,
    isAuthenticated,
    user,
    setUserData,
    userError,
    isUserUpdating,
    authenticate,
    Moralis,
  } = useMoralis();

  useEffect(() => {
    chrome.runtime.sendMessage(
      editorExtensionId,
      { userDetails: Moralis.User.current() },
      function (response) {
        console.log(Moralis.User.current());
        console.log("data sent succesfully ( website -> extension )");
        if (!response.success) handleError(url);
      }
    );
  }, []);

  if (!isAuthenticated) {
    return (
      <div>
        <button
          onClick={async () => {
            await authenticate();
            var editorExtensionId = "amijlpedlbcepbjnleimjijomhdapanm";

            chrome.runtime.sendMessage(
              editorExtensionId,
              { userDetails: Moralis.User.current() },
              function (response) {
                console.log("data sent succesfully ( website -> extension )");
                if (!response.success) handleError(url);
              }
            );
          }}
        >
          Authenticate
        </button>

        <button
          onClick={() => {
            localStorage.clear();
            logout();
          }}
          disabled={isAuthenticating}
        >
          logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {user.get("username")}</h1>
      <button
        onClick={() => {
          localStorage.clear();
          logout();
        }}
        disabled={isAuthenticating}
      >
        logout
      </button>
    </div>
  );
}
