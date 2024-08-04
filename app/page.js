import CallUI from "./components/CallUI";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <h1 className="flex justify-center mt-3 text-header-text">Welcome</h1>
        <CallUI />
      </div>
    </main>
  );
}
