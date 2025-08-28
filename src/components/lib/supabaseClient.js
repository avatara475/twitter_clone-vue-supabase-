import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://gfhdfzehfmobsgrvrsvf.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmaGRmemVoZm1vYnNncnZyc3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MTg1NzYsImV4cCI6MjA2ODk5NDU3Nn0.X7WLDQkXDGU2tLwHcsxEHOhVErC-2FL1tD9_lJIIVsQ"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)