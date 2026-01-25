import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.SUPABASE_URL ? "ENV OK" : "ENV NOT LOADED");

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);
