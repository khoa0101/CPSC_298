"use client"

import { useState, useEffect } from 'react'
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

const StarField = ({ depth }: { depth: number }) => {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.9), rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 1), rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 50px 160px, rgba(255, 255, 255, 0.8), rgba(0,0,0,0)),
                          radial-gradient(3px 3px at 90px 40px, rgba(255, 255, 255, 1), rgba(0,0,0,0)),
                          radial-gradient(2px 2px at 130px 80px, rgba(255, 255, 255, 0.9), rgba(0,0,0,0)),
                          radial-gradient(3px 3px at 160px 120px, rgba(255, 255, 255, 1), rgba(0,0,0,0))`,
        backgroundSize: '200px 200px',
        animation: `twinkle 5s ease-in-out infinite alternate, parallax-${depth} 20s linear infinite`,
      }}
    />
  )
}

export default function Component() {
  const [selectedClass, setSelectedClass] = useState<string | undefined>()
  const [scrollY, setScrollY] = useState(0)

  const filteredBuilds = selectedClass 
    ? builds.filter(build => build.class === selectedClass)
    : builds

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-950 relative overflow-hidden">
      <StarField depth={1} />
      <StarField depth={2} />
      <StarField depth={3} />
      <div className="min-h-screen bg-black bg-opacity-60 py-8 px-4 text-amber-100 font-['Eczar',serif] relative z-10">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;600;700&display=swap');
          @keyframes twinkle {
            0% { opacity: 0.7; }
            100% { opacity: 1; }
          }
          @keyframes parallax-1 {
            from { transform: translateY(0); }
            to { transform: translateY(-200px); }
          }
          @keyframes parallax-2 {
            from { transform: translateY(0); }
            to { transform: translateY(-400px); }
          }
          @keyframes parallax-3 {
            from { transform: translateY(0); }
            to { transform: translateY(-600px); }
          }
        `}</style>
        <div className="container mx-auto">
          <div className="flex justify-center mb-4" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
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
              <Card key={build.id} className="bg-black bg-opacity-80 border-amber-400 shadow-lg hover:shadow-amber-400/50 transition-shadow duration-300">
                <CardHeader className="border-b border-amber-400 p-4">
                  <div className="flex items-center">
                    <Image
                      src={`/placeholder.svg?height=80&width=80&text=${build.name.charAt(0)}`}
                      alt={`${build.name}'s portrait`}
                      width={80}
                      height={80}
                      className="rounded-full border-2 border-amber-400 mr-4"
                    />
                    <div>
                      <CardTitle className="text-2xl font-['Eczar',serif] text-amber-200">{build.name}</CardTitle>
                      <CardDescription className="text-amber-300">{build.race} {build.class}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-4 p-4">
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