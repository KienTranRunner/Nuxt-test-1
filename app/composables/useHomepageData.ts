// composables/useHomepageData.ts
export const useHomepageData = async () => {
    const client = useSupabaseClient()
  
    const { data: sections, error } = await client
      .from('homepage_sections')
      .select('*, homepage_items(*)')
      .eq('status', 1)
      .order('order_index', { ascending: true })
  
    if (error) {
      console.error('Supabase error:', error)
      return []
    }
  
    return sections
  }
  