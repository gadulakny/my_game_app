import React from "react";
import pcIcon from "../platformSVGs/pc.svg";
import androidIcon from "../platformSVGs/android.svg";
import iosIcon from "../platformSVGs/ios.svg";
import macIcon from "../platformSVGs/mac.svg";
import playstationIcon from "../platformSVGs/playstation.svg";
import xboxIcon from "../platformSVGs/xbox.svg";
import segaIcon from "../platformSVGs/sega.svg";
import nintendoIcon from "../platformSVGs/nintendo.svg";
import linuxIcon from "../platformSVGs/linux.svg";
import atariIcon from "../platformSVGs/atari.svg";
import coMaIcon from "../platformSVGs/commodore-amiga.svg";
import tdoIcon from "../platformSVGs/tdo.svg";
import webIcon from "../platformSVGs/web.svg";

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
      <img className="w-5 h-5 ml-3" src={platforms[slug]} alt={slug}></img>
    </div>
  );
}

export default PlatformIcon;
