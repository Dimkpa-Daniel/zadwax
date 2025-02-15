import Resources from "@/components/home/Resources";
import StepsCard from "@/components/home/StepsCard";
import Head from "next/head";

export default function Home() {
  return (
    <main className="p-5 lg:p-6 ">
      <Head>
        <title>Zadwax</title>
      </Head>
      <h1 className="text-2xl font-bold text-gray-950">Welcome Susan,</h1>
      <p className="text-base text-gray-700 font-normal">
        Get ready to complete your research processes on Zadwax
      </p>
      <div className="bg-[url('/welcome-bg.svg')] bg-cover bg-right bg-no-repeat py-8 px-6 rounded-xl mt-5">
        <h2 className="text-sm text-gray-900 font-bold">
          Welcome to the cool kids club
        </h2>
        <h1 className="text-xl text-primary700 font-medium mt-1">
          The new way designers revolutionize their work. See how others are
          using Zadwax to accelerate their design process.
        </h1>
      </div>

      <StepsCard/>
      <Resources/>
    </main>
  );
}
