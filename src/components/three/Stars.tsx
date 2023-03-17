


import * as THREE from "three";


import starTexture from "../../assets/textures/star.png";
import { extend, useLoader } from "@react-three/fiber";


extend({ BufferAttribute: THREE.BufferAttribute });



// make a field of stars using React Three Fiber points

const Stars = () => {


    return (

        <points>

            <bufferGeometry attach="geometry">

                <bufferAttribute

                    attach="attributes-position"

                    count={1000}

                    array={new Float32Array(1000 * 3)}

                    itemSize={3}

                />

            </bufferGeometry>

            <pointsMaterial

                attach="material"
                color={ 0xffffff }

                transparent={true}

                size={0.15}

                sizeAttenuation={true}

                alphaTest={0.5}

                depthWrite={false}

                fog={false}

            />

        </points>

    );

};

export default Stars;

