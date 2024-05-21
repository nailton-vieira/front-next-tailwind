import React from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import Indicadores from "@/components/dash";
import Dashboard from "@/components/dash";

export default function Home() {
  return (
    <div>
    <div className="min-h-full">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <main className="ml-60 bg-slate-100 h-auto">
            <Dashboard></Dashboard>
          </main>
        </div>
      </div>
    </div>
  </div>
  );
}
