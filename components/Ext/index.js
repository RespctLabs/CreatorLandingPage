import React from "react";
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
  if (!isAuthenticated) {
    return (
      <div>
        <button
          onClick={async () => {
            await authenticate();

            setTimeout(() => {
              console.log(Moralis.User.current());
              console.log("is user");
            }, 200);

            var editorExtensionId = "amijlpedlbcepbjnleimjijomhdapanm";

            // Make a simple request:
            chrome.runtime.sendMessage(
              editorExtensionId,
              {
                openUrlInEditor: "url",
                user: user,
                userDetails: Moralis.User.current(),
              },
              function (response) {
                console.log("website kuch toh bhej ri hai");
                if (!response.success) handleError(url);
              }
            );

            // setTimeout(() => {
            //   console.log("website closing");
            //   window.open("about:blank", "_self");
            //   window.close();
            // }, 5000);

            // chrome.tabs.query(
            //   { active: true, currentWindow: true, lastFocusedWindow: true },
            //   (tabs) => {
            //     chrome.tabs.sendMessage(
            //       tabs[0].id,
            //       { msg: "refresh" },
            //       (response) => {
            //         console.log(JSON.stringify(response));
            //       }
            //     );
            //   }
            // );
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
