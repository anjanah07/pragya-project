"use client";
import Image from "next/image";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import Link from "next/link";

export default function Home() {
  const { RiveComponent } = useRive({
    // Load a local riv `clean_the_car.riv` or upload your own!
    src: "Magic Plant.riv",
    // Be sure to specify the correct state machine (or animation) name
    stateMachines: "Plant",
    // This is optional.Provides additional layout control.
    layout: new Layout({
      fit: Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return (
    <main className="flex justify-center items-center h-screen ">
      <div className="absolute h-full w-full">
        <RiveComponent />
      </div>
      <div>
        <Link href="/catalog">
          <button className="relative bottom-4 md:bottom-10 z-10 bg-white text-black px-4 py-2 rounded">
            {" "}
            Tap to see more
          </button>
        </Link>
      </div>
    </main>
  );
}
