'use client'

import { useState, useCallback } from 'react'
import { RoadSignFilter } from "@/components/road-sign-filter"
import { RoadSignList } from "@/components/road-sign-list"
import { roadSigns as initialRoadSigns, RoadSign } from "@/data/road-signs"

export default function Home() {
  const [filteredSigns, setFilteredSigns] = useState<RoadSign[]>(initialRoadSigns)

  const handleFilterChange = useCallback((filters: Record<string, string[]>) => {
    const filtered = initialRoadSigns.filter(sign =>
      Object.entries(filters).every(([key, values]) =>
        values.length === 0 || values.includes(sign[key as keyof RoadSign] as string)
      )
    )
    setFilteredSigns(filtered)
  }, [])

  return (
    <div className="flex">
      <RoadSignFilter onFilterChange={handleFilterChange} />
      <main className="flex-1">
        <RoadSignList signs={filteredSigns} />
      </main>
    </div>
  )
}
