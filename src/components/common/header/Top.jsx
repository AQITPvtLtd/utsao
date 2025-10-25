"use client";
import Link from "next/link";
import Image from "next/image";

export default function Top() {
    return (
        <div className="h-20 px-6 border-b bg-white">
            <Link href="/" className="text-center">
                <center>
                    <Image
                        src="/logo/logo.png"
                        alt="Tek Booster Logo"
                        width={150}
                        height={50}
                        className="object-contain"
                    />
                </center>
            </Link>

        </div>
    );
}
