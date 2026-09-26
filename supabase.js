// Importa la libreria di Supabase direttamente via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// I tuoi dati di Supabase
const supabaseUrl = 'https://usahvhccbvgsfvxgpdh.supabase.co'
const supabaseKey = 'INCOLLA_QUI_LA_TUA_PUBLISHABLE_KEY_INTERA' // Sostituisci con la tua chiave esatta

export const supabase = createClient(supabaseUrl, supabaseKey)
