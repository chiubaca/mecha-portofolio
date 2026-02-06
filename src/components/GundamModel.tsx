import { useRef, useMemo, useEffect, useCallback } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, MeshBasicMaterial, Group, BoxGeometry } from 'three'

interface GundamModelProps {
  hoveredSkill: string | null
  selectedSkill: string | null
  onPartHover: (skillId: string | null) => void
  onPartClick: (skillId: string) => void
}

const GLOW_COLOR = 0x00ff41
const DIM_COLOR = 0x004411
const HOVER_COLOR = 0xaaffaa
const SELECTED_COLOR = 0xffffff

export const GundamModel: React.FC<GundamModelProps> = ({
  hoveredSkill,
  selectedSkill,
  onPartHover,
  onPartClick
}) => {
  const groupRef = useRef<Group>(null)
  const isInitialized = useRef(false)

  // Create procedural mecha - stable reference
  const mechaData = useMemo(() => {
    const meshes: Mesh[] = []
    
    // Wireframe material factory
    const createMaterial = (color: number) => {
      return new MeshBasicMaterial({
        color: color,
        wireframe: true,
        transparent: false,
        opacity: 1
      })
    }

    // Helper to create box mesh
    const createBox = (
      name: string,
      width: number,
      height: number,
      depth: number,
      x: number,
      y: number,
      z: number,
      skillId?: string
    ): Mesh => {
      const geometry = new BoxGeometry(width, height, depth)
      const material = createMaterial(GLOW_COLOR)
      const mesh = new Mesh(geometry, material)
      mesh.name = name
      mesh.position.set(x, y, z)
      mesh.userData = { skillId, isHovered: false, isSelected: false }
      return mesh
    }

    // HEAD / TYPESCRIPT
    meshes.push(createBox('head', 0.8, 0.9, 0.8, 0, 3.5, 0, 'typescript'))
    meshes.push(createBox('visor', 0.6, 0.2, 0.1, 0, 3.5, 0.4, 'typescript'))
    meshes.push(createBox('antenna_left', 0.05, 0.8, 0.05, -0.5, 3.8, 0, 'git'))
    meshes.push(createBox('antenna_right', 0.05, 0.8, 0.05, 0.5, 3.8, 0, 'git'))

    // TORSO / REACT
    meshes.push(createBox('torso', 1.8, 2.2, 1.2, 0, 2, 0, 'react'))
    meshes.push(createBox('chest', 1.4, 1.0, 0.3, 0, 2.3, 0.6, 'react'))
    meshes.push(createBox('core', 0.4, 0.4, 0.2, 0, 2, 0.65, 'react'))

    // BACKPACK / NODEJS
    meshes.push(createBox('backpack', 1.2, 1.8, 0.6, 0, 2.2, -0.8, 'nodejs'))
    meshes.push(createBox('engine_left', 0.4, 1.0, 0.8, -0.7, 2.5, -1.0, 'nodejs'))
    meshes.push(createBox('engine_right', 0.4, 1.0, 0.8, 0.7, 2.5, -1.0, 'nodejs'))

    // SHOULDERS / DRIZZLE
    meshes.push(createBox('shoulder_left', 1.0, 0.8, 0.8, -1.5, 2.8, 0, 'drizzle'))
    meshes.push(createBox('shoulder_right', 1.0, 0.8, 0.8, 1.5, 2.8, 0, 'drizzle'))

    // ARMS / DOCKER
    meshes.push(createBox('arm_left', 0.5, 1.8, 0.5, -2, 1.5, 0, 'docker'))
    meshes.push(createBox('arm_right', 0.5, 1.8, 0.5, 2, 1.5, 0, 'docker'))
    meshes.push(createBox('forearm_left', 0.6, 1.2, 0.6, -2, 0.5, 0.2, 'docker'))
    meshes.push(createBox('forearm_right', 0.6, 1.2, 0.6, 2, 0.5, 0.2, 'docker'))

    // HANDS
    meshes.push(createBox('hand_left', 0.4, 0.5, 0.4, -2, -0.5, 0.3, 'docker'))
    meshes.push(createBox('hand_right', 0.4, 0.5, 0.4, 2, -0.5, 0.3, 'docker'))

    // LEGS / CLOUDFLARE
    meshes.push(createBox('thigh_left', 0.7, 1.5, 0.7, -0.8, 0.5, 0, 'cloudflare'))
    meshes.push(createBox('thigh_right', 0.7, 1.5, 0.7, 0.8, 0.5, 0, 'cloudflare'))
    meshes.push(createBox('calf_left', 0.6, 1.5, 0.8, -0.8, -1.2, 0.1, 'cloudflare'))
    meshes.push(createBox('calf_right', 0.6, 1.5, 0.8, 0.8, -1.2, 0.1, 'cloudflare'))
    meshes.push(createBox('foot_left', 0.8, 0.4, 1.2, -0.8, -2.2, 0.3, 'cloudflare'))
    meshes.push(createBox('foot_right', 0.8, 0.4, 1.2, 0.8, -2.2, 0.3, 'cloudflare'))
    meshes.push(createBox('leg_thruster_left', 0.3, 0.3, 0.5, -0.8, -1.8, -0.4, 'cloudflare'))
    meshes.push(createBox('leg_thruster_right', 0.3, 0.3, 0.5, 0.8, -1.8, -0.4, 'cloudflare'))

    // RIFLE / GRAPHQL
    meshes.push(createBox('rifle_body', 0.4, 0.6, 2.5, -2.5, 0, 1.5, 'graphql'))
    meshes.push(createBox('rifle_barrel', 0.15, 0.15, 1.5, -2.5, 0.1, 3.5, 'graphql'))
    meshes.push(createBox('rifle_stock', 0.3, 0.4, 0.8, -2.5, -0.1, 0.2, 'graphql'))

    // SHIELD / DATABASES
    meshes.push(createBox('shield', 1.2, 2.5, 0.3, 2.5, 1, 0.5, 'databases'))
    meshes.push(createBox('shield_detail', 0.8, 1.5, 0.1, 2.5, 1, 0.7, 'databases'))

    return meshes
  }, [])

  // Add meshes to group once
  useEffect(() => {
    if (groupRef.current && !isInitialized.current) {
      mechaData.forEach(mesh => {
        groupRef.current!.add(mesh)
      })
      isInitialized.current = true
    }
  }, [mechaData])

  // Update material colors based on hover/selection - runs every frame for smooth updates
  useFrame(() => {
    if (!groupRef.current) return
    
    groupRef.current.children.forEach((child) => {
      if (child instanceof Mesh && child.userData.skillId) {
        const material = child.material as MeshBasicMaterial
        const skillId = child.userData.skillId
        
        if (selectedSkill === skillId) {
          material.color.setHex(SELECTED_COLOR)
        } else if (hoveredSkill === skillId) {
          material.color.setHex(HOVER_COLOR)
        } else if (hoveredSkill || selectedSkill) {
          // Dim non-hovered parts when something is hovered/selected
          material.color.setHex(DIM_COLOR)
        } else {
          // Default state - all parts glowing
          material.color.setHex(GLOW_COLOR)
        }
      }
    })
  })

  // Idle animation
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime()
      groupRef.current.position.y = Math.sin(time * 0.5) * 0.1
      groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.05
    }
  })

  // Event handlers
  const handlePointerOver = useCallback((e: any) => {
    e.stopPropagation()
    const skillId = e.object.userData.skillId
    if (skillId) onPartHover(skillId)
  }, [onPartHover])

  const handlePointerOut = useCallback((e: any) => {
    e.stopPropagation()
    onPartHover(null)
  }, [onPartHover])

  const handleClick = useCallback((e: any) => {
    e.stopPropagation()
    const skillId = e.object.userData.skillId
    if (skillId) onPartClick(skillId)
  }, [onPartClick])

  return (
    <group ref={groupRef}>
      {mechaData.map((mesh, index) => (
        <primitive 
          key={`${mesh.name}-${index}`}
          object={mesh}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handleClick}
        />
      ))}
    </group>
  )
}