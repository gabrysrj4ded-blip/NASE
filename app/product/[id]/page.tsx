interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
  ];
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <h1 className="text-2xl font-semibold">Product {id}</h1>
    </main>
  );
}