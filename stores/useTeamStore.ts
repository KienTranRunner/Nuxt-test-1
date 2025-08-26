import { ref } from 'vue'

export const useTeamStore = defineStore('team', () => {
  const team = ref([
    { name: 'Coriss Ambady', role: 'Financial Analyst', image: '/team1.jpg' },
    { name: 'Cory Zamora', role: 'Marketing Specialist', image: '/team2.jpg' },
    { name: 'Nikolas Brooten', role: 'Sales Manager', image: '/team3.jpg' },
    { name: 'Jackie Sanders', role: 'Investment Planner', image: '/team4.jpg' },
  ])

  // Async fetch example
  const fetchTeam = async () => {
    try {
      const { data } = await $fetch('/api/team') // ví dụ lấy API Nuxt 3
      team.value = data
    } catch (error) {
      console.error('Failed to fetch team', error)
    }
  }

  return { team, fetchTeam }
})
