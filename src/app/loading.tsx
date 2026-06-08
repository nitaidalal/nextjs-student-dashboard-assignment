import SkeletonCard from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="flex min-h-screen bg-(--background)">
      <div className="w-[240px] hidden lg:block glass border-r border-(--border)" />
      <main className="flex-1">
        <SkeletonCard />
      </main>
    </div>
  );
}
