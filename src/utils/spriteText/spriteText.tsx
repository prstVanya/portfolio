import { OrbitControls } from '@react-three/drei';
import { useFrame, extend } from '@react-three/fiber';
import SpriteText from 'three-spritetext';
import { useRef } from 'react';
import { Group } from 'three';

extend({ SpriteText });

type Skill = string;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      spriteText: any;
    }
  }
}

function SkillsAnimation() {
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
  const getPosition = (position: number) => {
    const first = Math.random();
    const second = Math.random();
    const sum = second > 0.5 ? first * position : first * -1 * position;
    return sum;
  };

  useFrame(() => {
    ref.current.rotation.x += 0.00132;
    ref.current.rotation.y += 0.00132;
    ref.current.rotation.z += 0.00132;
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
            color={i % 2 === 0 ? '#FAFF81' : '#E06D06'}
          />
        );
      })}
      </group>
    </>
  );
}

export default SkillsAnimation;
