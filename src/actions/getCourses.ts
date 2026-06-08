import { createClient } from "@/lib/supabase";
import { Course } from "@/types/course";

export async function getCourses(): Promise<Course[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase fetch error:", error.message);
    throw new Error("Failed to fetch courses");
  }

  return data as Course[];
}