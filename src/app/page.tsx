import { Suspense } from "react";
import { getCourses } from "@/actions/getCourses";
import BentoGrid from "@/components/BentoGrid";
import Sidebar from "@/components/Sidebar";
import SkeletonCard from "@/components/SkeletonCard";

export default async function Dashboard() {
  const courses = await getCourses();

  return (
    <div className="flex h-screen  bg-(--background)">
      <Sidebar />

      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <Suspense fallback={<SkeletonCard />}>
          <BentoGrid courses={courses} />
        </Suspense>
      </main>
    </div>
  );
}
