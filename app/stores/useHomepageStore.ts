import { defineStore } from 'pinia'

interface HomepageSection {
  section_key: string
  title: string
  subtitle: string
  homepage_items: {
    id: number
    title: string
    description: string
    link_url: string
    image_url: string
  }[]
}

export const useHomepageStore = defineStore('homepage', {
  state: () => ({
    sections: [] as HomepageSection[],
    loading: false,
    error: null as string | null
  }),
  actions: {
    async fetchHomepageSections() {
      this.loading = true
      try {
        const res = await useHomepageData()
        this.sections = res
        this.error = null
      } catch (err: any) {
        this.error = err.message || 'Lỗi fetch'
      } finally {
        this.loading = false
      }
    }
  },
  getters: {
    heroData: (state) => state.sections.find(s => s.section_key === 'hero'),
    clientsData: (state) => state.sections.find(s => s.section_key === 'clients'),
    servicesData: (state) => state.sections.find(s => s.section_key === 'services'),
    processData: (state) => state.sections.find(s => s.section_key === 'process'),
    solutionsData: (state) => state.sections.find(s => s.section_key === 'solutions'),
    teamData: (state) => state.sections.find(s => s.section_key === 'team'),
    projectsData: (state) => state.sections.find(s => s.section_key === 'projects'),
    testimonialsData: (state) => state.sections.find(s => s.section_key === 'testimonials'),
    faqData: (state) => state.sections.find(s => s.section_key === 'faq')
  }
})
