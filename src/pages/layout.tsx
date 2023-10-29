import React from "react";
import NavBar from "~/pages/components/NavBar/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div tw={"flex min-h-screen flex-col items-center justify-center"}>
        {children}
      </div>
    </>
  );
}
