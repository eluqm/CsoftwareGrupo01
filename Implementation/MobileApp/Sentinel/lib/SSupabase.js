import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://rfsfwgrnymzqyzshgmyh.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmc2Z3Z3JueW16cXl6c2hnbXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NTA3OTIsImV4cCI6MjAxMTIyNjc5Mn0.UHq26m0rsjL8OwPh0II-kyLsaDc1IMIwoWNAETgA0KI";

export const Supabase = createClient(supabaseUrl, supabaseAnonKey);