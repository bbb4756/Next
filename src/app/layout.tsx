// "use client"; // this is a client component 👈🏽
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Control } from "./Control";
// import React, { useEffect, useState } from "react";

// 아이템 인터페이스 정의
// export interface Item {
//     id: number;
//     title: string;
//     author: string;
// }

export const metadata = {
    title: "Next PJ",
    description: "튜토리얼",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // gyuri 상태와 설정 함수 정의

    // useEffect를 사용하여 데이터 가져오기
    const resp = await fetch("http://localhost:9999/gyuri", { next: { revalidate: 0 } });
    const gyuri = await resp.json();
    console.log(gyuri);
    return (
        <html>
            <body>
                <h2>
                    <Link href="/"> Web</Link>
                </h2>
                <ol>
                    {gyuri.map((ele: any) => {
                        return (
                            <li key={ele.id}>
                                <Link href={`/read/${ele.id}`}>{ele.title}</Link>
                            </li>
                        );
                    })}
                </ol>
                {children}
                <Control />
            </body>
        </html>
    );
}
