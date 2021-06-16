import React from "react";
import pcIcon from "./platformImages/pc.svg";
import androidIcon from "./platformImages/android.svg";
import iosIcon from "./platformImages/ios.svg";
import macIcon from "./platformImages/mac.svg";
import playstationIcon from "./platformImages/playstation.svg";
import xboxIcon from "./platformImages/xbox.svg";
import segaIcon from "./platformImages/sega.svg";
import nintendoIcon from "./platformImages/nintendo.svg";
import linuxIcon from "./platformImages/linux.svg";
import atariIcon from "./platformImages/atari.svg";
import coMaIcon from "./platformImages/commodore-amiga.svg";
import tdoIcon from "./platformImages/tdo.svg";
import webIcon from "./platformImages/web.svg";

function PlatformIcon({ slug }) {
  const platforms = {
    pc: pcIcon,
    playstation: playstationIcon,
    xbox: xboxIcon,
    ios: iosIcon,
    android: androidIcon,
    mac: macIcon,
    linux: linuxIcon,
    nintendo: nintendoIcon,
    atari: atariIcon,
    "commodore-amiga": coMaIcon,
    sega: segaIcon,
    "3do": tdoIcon,
    web: webIcon,
  };

  return (
    <div className="">
      <img className="w-5 h-5 mr-3" src={platforms[slug]} alt={slug}></img>
    </div>
  );
}

export default PlatformIcon;
