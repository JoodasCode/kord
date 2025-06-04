import { logger } from "@kord/logger";
import { createClient } from "@kord/supabase/server";
import type { Database } from "../types";

// Define helper types based on the Database type
type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row'];
type TablesUpdate<T extends keyof Database['public']['Tables']> = Partial<Tables<T>>;

export async function updateUser(userId: string, data: TablesUpdate<"users">) {
  const supabase = createClient();

  try {
    // Use a Promise-based approach to ensure proper awaiting
    const query = supabase.from("users").update(data).eq("id", userId);
    const result = await Promise.resolve(query);

    return result;
  } catch (error) {
    logger.error(error);

    throw error;
  }
}
