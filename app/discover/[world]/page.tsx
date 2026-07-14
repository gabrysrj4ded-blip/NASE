interface DiscoverWorldPageProps {
  params: Promise<{
    world: string;
  }>;
}

export function generateStaticParams() {
  return [
    { world: "telegram" },
    { world: "ai" },
    { world: "gaming" },
    { world: "streaming" },
  ];
}

export default async function DiscoverWorldPage({
  params,
}: DiscoverWorldPageProps) {
  const { world } = await params;

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <h1 className="text-2xl font-semibold capitalize">{world}</h1>
    </main>
  );
}