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
    bodyPart: 'HEAD // V-FIN',
    meshNames: ['head', 'visor', 'vfin', 'crest'],
    cameraPosition: new Vector3(2, 5.5, 4),
    cameraTarget: new Vector3(0, 4.5, 0),
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
    bodyPart: 'TORSO // CORE REACTOR',
    meshNames: ['torso', 'chest', 'core', 'collar', 'skirt'],
    cameraPosition: new Vector3(4, 3.5, 5),
    cameraTarget: new Vector3(0, 3.0, 0),
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
    bodyPart: 'BACKPACK // THRUSTERS',
    meshNames: ['bp_', 'backpack', 'engine', 'thruster', 'nozzle', 'fuel'],
    cameraPosition: new Vector3(-2, 4, -6),
    cameraTarget: new Vector3(0, 3.2, -1),
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
    meshNames: ['thigh', 'shin', 'knee', 'ankle', 'foot', 'calf', 'hip'],
    cameraPosition: new Vector3(3, 0, 5),
    cameraTarget: new Vector3(0, 0, 0),
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
    bodyPart: 'BEAM LASER CANNON',
    meshNames: ['cannon', 'rifle', 'gun', 'weapon', 'barrel'],
    cameraPosition: new Vector3(-4, 1.5, 5),
    cameraTarget: new Vector3(-1.5, 0.9, 2.5),
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
    bodyPart: 'TACTICAL SHIELD',
    meshNames: ['shield'],
    cameraPosition: new Vector3(5, 2, 3),
    cameraTarget: new Vector3(2.0, 1.5, 0.4),
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
    meshNames: ['shldr', 'shoulder'],
    cameraPosition: new Vector3(-3, 4.5, 4),
    cameraTarget: new Vector3(0, 3.8, 0),
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
    bodyPart: 'COMM ANTENNA ARRAY',
    meshNames: ['antenna'],
    cameraPosition: new Vector3(1, 6, 3),
    cameraTarget: new Vector3(0, 5.2, 0),
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
    bodyPart: 'ARM HYDRAULICS',
    meshNames: ['arm_', 'hand_', 'elbow', 'wrist'],
    cameraPosition: new Vector3(-4, 2.5, 4),
    cameraTarget: new Vector3(-1, 2.0, 0),
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