'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const builds = [
  { id: 1, name: "Shadowheart", class: "Cleric", race: "Half-Elf", description: "A versatile healer and support character with access to powerful divine magic." },
  { id: 2, name: "Lae'zel", class: "Fighter", race: "Githyanki", description: "A strong melee combatant with high survivability and damage output." },
  { id: 3, name: "Gale", class: "Wizard", race: "Human", description: "A master of arcane magic with a wide array of powerful spells at his disposal." },
  { id: 4, name: "Astarion", class: "Rogue", race: "Elf", description: "A stealthy character excelling in dealing high damage from the shadows." },
  { id: 5, name: "Wyll", class: "Warlock", race: "Human", description: "A charismatic spellcaster with eldritch abilities granted by his patron." },
  { id: 6, name: "Karlach", class: "Barbarian", race: "Tiefling", description: "A fierce warrior with unmatched physical strength and endurance." },
  { id: 7, name: "Custom Paladin", class: "Paladin", race: "Dragonborn", description: "A holy warrior combining martial prowess with divine magic and auras." },
  { id: 8, name: "Custom Ranger", class: "Ranger", race: "Wood Elf", description: "A skilled archer and tracker with both martial and magical abilities." },
]

const classes = [...new Set(builds.map(build => build.class))]

export function Bg3Builds() {
  const [selectedClass, setSelectedClass] = useState<string | undefined>()

  const filteredBuilds = selectedClass 
    ? builds.filter(build => build.class === selectedClass)
    : builds

  return (
    <div className="min-h-screen bg-[linear-gradient(to bottom, #030319, #1a1d23)] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black bg-opacity-90 py-8 px-4 text-amber-100 font-['Eczar',serif]">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700&display=swap');
          body {
            background-image: radial-gradient(farthest-corner at 50% 0%, #030319, #1a1d23);
            background-size: 300px 300px;
          }
        `}</style>
        <div className="container mx-auto">
          <div className="flex justify-center mb-4">
            <Image
              src="/placeholder.svg?height=150&width=300"
              alt="Baldur's Gate 3 Logo"
              width={300}
              height={150}
              className="max-w-full h-auto"
            />
          </div>
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-200 font-['Eczar',serif]">
            Build Suggestions
          </h2>
          
          <div className="mb-8 flex justify-start">
            <Select onValueChange={setSelectedClass}>
              <SelectTrigger className="w-[180px] bg-black border-amber-400 text-amber-200">
                <SelectValue placeholder="Filter by class" />
              </SelectTrigger>
              <SelectContent className="bg-black border-amber-400 text-amber-200">
                <SelectItem value="">All Classes</SelectItem>
                {classes.map(className => (
                  <SelectItem key={className} value={className}>{className}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBuilds.map(build => (
              <Card key={build.id} className="bg-black border-amber-400 shadow-lg hover:shadow-amber-400/50 transition-shadow duration-300">
                <CardHeader className="border-b border-amber-400">
                  <CardTitle className="text-2xl font-['Eczar',serif] text-amber-200">{build.name}</CardTitle>
                  <CardDescription className="text-amber-300">{build.race} {build.class}</CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                  <ScrollArea className="h-24 rounded">
                    <p className="text-amber-100">{build.description}</p>
                  </ScrollArea>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
