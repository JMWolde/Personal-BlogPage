"use client"
import { useEffect } from "react";
import { useState } from "react";
const videos = [
    // "/assets/videos/bgvideos/BK_HOME.mp4",
    // "/assets/videos/bgvideos/GTA_3.mp4",
    // "/assets/videos/bgvideos/GTA_SA.mp4",
    // "/assets/videos/bgvideos/IDK_1.mp4",
    // "/assets/videos/bgvideos/JSR_SHIBUYA.mp4",
    // "/assets/videos/bgvideos/KH_ISLAND.mp4",
    "/assets/videos/bgvideos/M64_CASTLE.mp4",
    // "/assets/videos/bgvideos/MG_OBSERVATORY.mp4",
    // "/assets/videos/bgvideos/MK8DX_NEOBOWSER.mp4",
    // "/assets/videos/bgvideos/MK_DK.mp4",
    "/assets/videos/bgvideos/MK_MOOMOO.mp4",
    // "/assets/videos/bgvideos/MK_SNOW.mp4",
    // "/assets/videos/bgvideos/MK_TOADCITY.mp4",
    // "/assets/videos/bgvideos/MS_IDKSUNSET.mp4",
    // "/assets/videos/bgvideos/SB_BB1.mp4",
    // "/assets/videos/bgvideos/SB_BB2.mp4",
    // "/assets/videos/bgvideos/SB_BB3.mp4",
    "/assets/videos/bgvideos/WII_RESORT.mp4"
]
export default function BgVideo() {
    const randomIndex = Math.floor(Math.random() * videos.length)
    const finalVid = videos[randomIndex]

    return (
        <video autoPlay loop muted src={finalVid} id="bgVideo" />
    )
}