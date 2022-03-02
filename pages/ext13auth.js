import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import Ext from "../components/Ext";

export default function Extauth() {
  return (
    <MoralisProvider
      appId="7kMeuP1fK9vHikeetJ93fRCfz7P1wFWFjKQtbxht"
      serverUrl="https://qug3bpuxqdl6.usemoralis.com:2053/server"
    >
      <div>
        <Ext id={"inmmahnchpopjjfepbncnliobcknlfae"} />{" "}
      </div>
    </MoralisProvider>
  );
}
