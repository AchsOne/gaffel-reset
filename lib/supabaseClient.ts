import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    'https://ohzokeowayplwlodddkp.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oem9rZW93YXlwbHdsb2RkZGtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyOTQ0MTksImV4cCI6MjA1Nzg3MDQxOX0.3CmeVYw5q9oIoRmiYWYaLoogrI-kTuizL9w3fHn4zA8'
);
