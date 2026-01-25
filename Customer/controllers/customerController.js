import { supabase } from "../config/supabaseClient.js";

export const registerCustomer = async (req, res) => {
  const { full_name, email, phone } = req.body;

  const { data: existing } = await supabase
    .from("customers")
    .select("*")
    .eq("email", email)
    .single();

  if (existing) {
    return res.status(409).json({ message: "Email already registered" });
  }

  const { data, error } = await supabase
    .from("customers")
    .insert([{ full_name, email, phone }])
    .select();

  if (error) {
    return res.status(500).json({ message: error.message });
  }

  res.status(201).json({ message: "Customer registered", data });
};
