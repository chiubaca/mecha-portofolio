import { Vector3 } from 'three'

export interface Skill {
  id: string
  name: string
  category: string
  level: number
  description: string
  details: string[]
  bodyPart: string
  meshNames: string[]
  cameraPosition: Vector3
  cameraTarget: Vector3
  color: string
}

export const skills: Skill[] = [
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'CORE SYSTEM',
    level: 95,
    description: 'Advanced type-safe development with strict null checks and advanced generics.',
    details: [
      'Type inference & conditional types',
      'Generic constraints & mapped types',
      'Declaration merging & module augmentation',
      'Compiler API & AST manipulation'
    ],
    bodyPart: 'HEAD // COCKPIT',
    meshNames: ['head', 'cockpit', 'visor', 'antenna', 'camera'],
    cameraPosition: new Vector3(0, 3, 6),
    cameraTarget: new Vector3(0, 2.5, 0),
    color: '#00ff41'
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'MAIN FRAMEWORK',
    level: 92,
    description: 'Component architecture with hooks, context, and modern patterns.',
    details: [
      'Custom hooks & composition patterns',
      'Concurrent features & Suspense',
      'Server Components & streaming',
      'Performance optimization & memoization'
    ],
    bodyPart: 'TORSO // CORE',
    meshNames: ['torso', 'chest', 'abdomen', 'cockpit', 'core'],
    cameraPosition: new Vector3(5, 2, 5),
    cameraTarget: new Vector3(0, 1.5, 0),
    color: '#00ff41'
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'POWER SYSTEM',
    level: 88,
    description: 'Server-side runtime with event-driven architecture and streaming.',
    details: [
      'Event loop & asynchronous patterns',
      'Streams & buffer management',
      'Cluster & worker threads',
      'Native addons & N-API'
    ],
    bodyPart: 'BACKPACK // ENGINE',
    meshNames: ['backpack', 'engine', 'thruster', 'vernier', 'booster'],
    cameraPosition: new Vector3(0, 3, -7),
    cameraTarget: new Vector3(0, 2, 0),
    color: '#00ff41'
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare Workers',
    category: 'TURBO THRUSTERS',
    level: 85,
    description: 'Edge computing with V8 isolates for global low-latency execution.',
    details: [
      'V8 isolates & cold start optimization',
      'Durable Objects & coordination',
      'KV & Cache API integration',
      'WebAssembly & WASI support'
    ],
    bodyPart: 'LEG THRUSTERS',
    meshNames: ['leg', 'thigh', 'calf', 'ankle', 'foot', 'leg_thruster'],
    cameraPosition: new Vector3(4, -2, 4),
    cameraTarget: new Vector3(1, 0, 0),
    color: '#00ff41'
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'WEAPON SYSTEM',
    level: 82,
    description: 'Query language with type-safe schemas and efficient data fetching.',
    details: [
      'Schema stitching & federation',
      'Query complexity analysis',
      'DataLoader & N+1 prevention',
      'Subscriptions & real-time updates'
    ],
    bodyPart: 'BEAM RIFLE',
    meshNames: ['rifle', 'gun', 'weapon', 'beam_rifle', 'barrel'],
    cameraPosition: new Vector3(-6, 1, 4),
    cameraTarget: new Vector3(-2, 1, 0),
    color: '#00ff41'
  },
  {
    id: 'databases',
    name: 'Databases',
    category: 'DEFENSE SYSTEM',
    level: 87,
    description: 'SQL and NoSQL expertise with query optimization and scaling.',
    details: [
      'PostgreSQL & query optimization',
      'MongoDB aggregation pipelines',
      'Redis caching strategies',
      'Database design & normalization'
    ],
    bodyPart: 'SHIELD // ARMOR',
    meshNames: ['shield', 'defense', 'armor', 'guard', 'barrier'],
    cameraPosition: new Vector3(6, 1, -3),
    cameraTarget: new Vector3(2, 1, 0),
    color: '#00ff41'
  },
  {
    id: 'drizzle',
    name: 'Drizzle.js',
    category: 'ARMOR PLATING',
    level: 80,
    description: 'Type-safe ORM with SQL-like syntax and lightweight footprint.',
    details: [
      'Type-safe SQL queries',
      'Schema migrations & versioning',
      'Relations & joins inference',
      'Edge runtime compatibility'
    ],
    bodyPart: 'SHOULDER ARMOR',
    meshNames: ['shoulder', 'armor', ' pauldron', 'shoulder_armor'],
    cameraPosition: new Vector3(-5, 3, 3),
    cameraTarget: new Vector3(-1.5, 2, 0),
    color: '#00ff41'
  },
  {
    id: 'git',
    name: 'Git',
    category: 'SYNC MODULE',
    level: 90,
    description: 'Version control with advanced workflows and CI/CD integration.',
    details: [
      'Advanced rebasing & cherry-picking',
      'Git hooks & automation',
      'Monorepo management',
      'CI/CD pipeline design'
    ],
    bodyPart: 'COMMUNICATION ARRAY',
    meshNames: ['antenna', 'comm', 'radar', 'sensor', 'array'],
    cameraPosition: new Vector3(0, 5, 3),
    cameraTarget: new Vector3(0, 3, 0),
    color: '#00ff41'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DEPLOYMENT MODULE',
    level: 83,
    description: 'Containerization with multi-stage builds and orchestration.',
    details: [
      'Multi-stage builds optimization',
      'Docker Compose & networking',
      'Kubernetes fundamentals',
      'Container security & scanning'
    ],
    bodyPart: 'HYDRAULIC SYSTEMS',
    meshNames: ['joint', 'hydraulic', 'piston', 'mechanical', 'gear'],
    cameraPosition: new Vector3(3, -1, 5),
    cameraTarget: new Vector3(1, 0.5, 0),
    color: '#00ff41'
  }
]

export const getSkillById = (id: string): Skill | undefined => {
  return skills.find(skill => skill.id === id)
}

export const getSkillByMeshName = (meshName: string): Skill | undefined => {
  const lowerMeshName = meshName.toLowerCase()
  return skills.find(skill => 
    skill.meshNames.some(name => lowerMeshName.includes(name.toLowerCase()))
  )
}