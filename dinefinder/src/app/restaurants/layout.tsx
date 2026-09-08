import Link from "next/link";
import React from "react";

export default function RestaurantsLayout({children,}:Readonly<{children: React.ReactNode;}>){
 
    return (
      <section className="space-y-6">
        <div className="rounded-lg bg-gray-100 p-4">
          <h1 className="text-2xl font-bold">Restaurant Explorer</h1>


            <p className="text-xs text-gray-500">
                This layout is shared across restaurant routes.
            </p>
          <nav className="mt-3 flex flex-wrap gap-4 text-sm">
            <Link href="/restaurants">All restaurants</Link>
            <Link href="/restaurants/1">Restaurant 1</Link>
            <Link href="/restaurants/2">Restaurant 2</Link>
            <Link href="/restaurants/3">Restaurant 3</Link>
          </nav>
        </div>

        <div>{children}</div>
      </section>
    );
}