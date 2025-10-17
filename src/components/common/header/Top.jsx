"use client";
import Link from "next/link";
import Image from "next/image";

export default function Top({ isVisible }) {
    return (
        <div
            className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
                }`}
        >
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
        </div>
    );
}
