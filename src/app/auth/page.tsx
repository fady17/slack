import Image from "next/image";
import { AuthScreen } from "@/features/auth/components/auth-screen";
import { Suspense } from "react";

interface LogoProps {
  className?: string;
  src?: string;
  alt?: string;
}

const Logo = ({
  className = "h-16 w-16",
  src = "/fady.jpg",
  alt = "Company authentication logo",
}: LogoProps) => (
  <div className={`relative ${className} rounded-full overflow-hidden`}>
    <Image src={src} alt={alt} fill className="object-cover" priority />
    <div
      className="absolute inset-0 border-4 border-transparent rounded-full animate-spin-slow"
      style={{ borderImage: "linear-gradient(to right, #3b82f6, #ef4444) 1" }}
    />
  </div>
);

const BackgroundImage = () => (
  <Image
    src="/fady.jpg"
    alt="Authentication page background"
    fill
    className="object-cover"
    priority
    quality={100}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QCEUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGgcAigAYkZCTUQwYTAwMGE2ZTAxMDAwMGU1MDUwMDAwOTcwOTAwMDA0YjBhMDAwMDFhMGIwMDAwMGIwZDAwMDBmZTEzMDAwMDVjMTUwMDAwODExNjAwMDA5MjE3MDAwMDYwMjUwMDAwAP/bAEMAEAsMDgwKEA4NDhIREBMYKBoYFhYYMSMlHSg6Mz08OTM4N0BIXE5ARFdFNzhQbVFXX2JnaGc+TXF5cGR4XGVnY//bAEMBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//AABEIAAoACgMBIgACEQEDEQH/xAAXAAADAQAAAAAAAAAAAAAAAAABAgMG/8QAIhAAAgAFAwUAAAAAAAAAAAAAAQIABBESIQUTkQMVMVKT/8QAFAEBAAAAAAAAAAAAAAAAAAAABP/EABYRAAMAAAAAAAAAAAAAAAAAAAACE//aAAwDAQACEQMRAD8AgZ3S1S9ZrcNaWohLcQe8aSMX9f4mMgcCo85hNx/duYTVg8lP/9k="
  />
);

const MobileView = () => (
  <div className="flex flex-col items-center md:hidden min-h-screen bg-sky-950">
    <div className="w-full max-w-sm space-y-8 px-4 py-8">
      <div className="flex justify-center">
        <Logo />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthScreen />
      </Suspense>
    </div>
  </div>
);

const DesktopView = () => (
  <div className="hidden md:grid min-h-screen w-full grid-cols-2 bg-sky-200">
    {/* Left Panel with Background Image */}
    <div className="relative">
      <BackgroundImage />
      <div
        className="absolute inset-0 bg-zinc-900/50"
        role="presentation"
        aria-hidden="true"
      />
    </div>

    {/* Right Panel */}
    <div className="flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <Suspense fallback={<div>Loading...</div>}>
          <AuthScreen />
        </Suspense>
      </div>
    </div>
  </div>
);

export default function AuthenticationPage() {
  return (
    <>
      <MobileView />
      <DesktopView />
    </>
  );
}
