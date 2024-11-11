import { OrbitControls } from '@react-three/drei';
import { useFrame, extend } from '@react-three/fiber';
import SpriteText from 'three-spritetext';
import { useRef } from 'react';
import { Group } from 'three';
import { Skill } from 'types';

extend({ SpriteText });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      spriteText: any;
    }
  }
}

interface SkillsData {
  isDark: boolean;
}

function SkillsAnimation({ isDark }: SkillsData) {
  const ref = useRef<Group | null>();
  const mySkills: Skill[] = [
    'JavaScript',
    'CSS3',
    'HTML5',
    'ReactJs',
    'NodeJs',
    'Postman',
    'Express',
    'Redux',
    'TypeScript',
    'SCSS',
  ];

  const handleChangeColors = (i: number) => {
    if (!isDark) {
      if (i % 2 === 0) {
        return '#FAFF81';
      }
      return '#E06D06';
    }
    if (i % 2 === 0) {
      return '#00008B';
    }
    return '#4169E1';
  };

  const getPosition = (position: number) => {
    const first = Math.random();
    const second = Math.random();
    const sum = second > 0.5 ? first * position : first * -1 * position;
    return sum;
  };

  useFrame(() => {
    ref.current.rotation.x += 0.00132;
    ref.current.rotation.y += 0.00132;
  });

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} />
      <pointLight position={[-2, 2, 2]} args={['#fff', 0.3]} />
      <group ref={ref} position={[0, 2, 0]} scale={0.1}>
      {mySkills.map((w, i) => {
        return (
          <spriteText
            key={i}
            text={w}
            fontSize={90}
            position={[getPosition(80), getPosition(80), getPosition(80)]}
            fontFace={"'Fira Code','Roboto Mono', monospace"}
            color={handleChangeColors(i)}
          />
        );
      })}
      </group>
    </>
  );
}

export default SkillsAnimation;
