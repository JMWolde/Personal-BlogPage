"use client"
import "./globals.css";
import Card from "../components/Card";
import { useSearchParams } from "next/navigation";
export default function HomePage() {
    const searchParams = useSearchParams();
    const value = searchParams.get("key");
  return (
      <main>
        <h1>{"Joshua's Blog"}</h1>
          {value && <p>HI NIGGA</p>}
        <p>Welcome to my blog.</p>

              {/*<div className="CardContainer">*/}
              {/*    <Card title = "Hello"/>*/}
              {/*    <Card id = "Profile"/>*/}
              {/*</div>*/}
      </main>
  )
}