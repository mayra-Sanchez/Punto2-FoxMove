import { OrbitControls, CameraControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Model from './Model'
import  FoxModel from './FoxModel'

export default function Experience()
{
    return <>

        <Perf position="top-left" />

       {/*<OrbitControls makeDefault />*/}
        <CameraControls/>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

         <Model/> 
        

        <mesh position-x={6}>
            <FoxModel/>
        </mesh>

        <mesh position-y={ 0 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>
    </>
}