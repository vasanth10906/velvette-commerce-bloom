// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fyadrflmtllhmsdpqbyj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5YWRyZmxtdGxsaG1zZHBxYnlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1ODE2NzMsImV4cCI6MjA2NDE1NzY3M30.8MdtNzk5vB0N2aRBqq9EssMJn92fTE5b-eF2W2KgXJ8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);