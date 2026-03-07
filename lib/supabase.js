import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dboicrygleynbfailsqj.supabase.co';
// WARNING: Replace with your actual anon public key from Supabase
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRib2ljcnlnbGV5bmJmYWlsc3FqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4OTUzODUsImV4cCI6MjA4ODQ3MTM4NX0.wqsDNcAVWPIJiP1lhlo8wg4wf5yi3en9ftUV8_GCMQg';

export const supabase = createClient(supabaseUrl, supabaseKey);
