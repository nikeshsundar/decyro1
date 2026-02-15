import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yvfkvogtskapgimqkqvw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2Zmt2b2d0c2thcGdpbXFrcXZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExNjQzOTksImV4cCI6MjA4Njc0MDM5OX0.raWhhV53uvO0I1oYxZ16Y82nHQ0SgPZ421rv6U08Z94";

export const supabase = createClient(supabaseUrl, supabaseKey);
