

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  roleColor: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Emma Watson",
    role: "Founder & CEO",
    roleColor: "text-blue-500",
    bio: "Used to work at IBM but quit because of robotz.",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg",
  },
  {
    name: "Liam Brown",
    role: "Lead Design",
    roleColor: "text-blue-500",
    bio: "Hello, I like not doing anything at all. Let's DM.",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg",
  },
  {
    name: "Sophia Davis",
    role: "Lead Engineering",
    roleColor: "text-blue-500",
    bio: "Prodigy with record-breaking 176 IQ and many awards.",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg",
  },
  {
    name: "Noah Wilson",
    role: "Lead Finance",
    roleColor: "text-blue-500",
    bio: "Hello, I like money. It is the only purpose of in my life.",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg",
  },
  {
    name: "Isabella Martinez",
    role: "Janitor",
    roleColor: "text-blue-500",
    bio: "I'm just here to clean the floor, that's all. Nothing special.",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg",
  },
  {
    name: "James Anderson",
    role: "Marketing Department",
    roleColor: "text-blue-500",
    bio: "I don't choose this job. It choose me. Do you get it?",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg",
  },
  {
    name: "Mai Senpai",
    role: "Human Resources",
    roleColor: "text-blue-500",
    bio: "I like managing people and controlling them.",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg",
  },
  {
    name: "Saylor Twift",
    role: "Middle Management",
    roleColor: "text-blue-500",
    bio: "Ex-Singer but decided to work on startups.",
    image: "https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg",
  },
];

const TeamOne = () => {
  return (
    <div className="w-full p-6 bg-gradient-to-t  flex items-center justify-center">
      <div className="p-2 bg-blue-300 rounded-3xl">
        <div className="bg-white rounded-3xl p-8 max-w-7xl w-full">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <h1 className="text-4xl font-bold text-gray-900">
                Let&apos;s Meet Our Team
              </h1>
              
            </div>
            <p className="text-gray-500 max-w-2xl">
              Gravida in fermentum et sollicitudin ac orci phasellus egestas.
              Molestie a iaculis at erat pellentesque adipiscing commodo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 relative w-40 h-40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className={`${member.roleColor} font-medium mb-2`}>
                  {member.role}
                </p>
                <p className="text-gray-500 mb-4">{member.bio}</p>
                <div className="flex items-center gap-2">
                  <Link href="#" className="text-gray-400 hover:text-gray-600">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-gray-600">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamOne;
