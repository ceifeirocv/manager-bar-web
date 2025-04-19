import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to ManagerBar</h1>
        <p className="text-xl">
          Get started by editing{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            src/app/page.tsx
          </code>
        </p>
        <Button>Test</Button>
      </main>
    </div>
  );
}
