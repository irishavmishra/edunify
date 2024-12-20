"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import AddSchool from "@/components/AddSchool";
import ShowSchools from "@/components/ShowSchools";

export default function Home() {
  const [showAddSchool, setShowAddSchool] = useState<boolean>(false);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar
        onToggle={() => setShowAddSchool(!showAddSchool)}
        showAddSchool={showAddSchool}
      />
      <main className="p-8">
        {showAddSchool ? <AddSchool /> : <ShowSchools />}
      </main>
    </div>
  );
}
