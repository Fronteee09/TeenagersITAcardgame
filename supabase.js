// Importa la libreria di Supabase direttamente via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// I tuoi dati di Supabase
const supabaseUrl = 'https://usahvhccbvgskfvxgpdh.supabase.co'
const supabaseKey = 'sb_publishable_RX3aOuzBpycaBwKKU4D9RA_H1C-nUJm' // Sostituisci con la tua chiave esatta

export const supabase = createClient(supabaseUrl, supabaseKey)
