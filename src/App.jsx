import React, { useEffect, useRef } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, Float, Lightformer, OrbitControls, Scroll, ScrollControls, Sparkles } from '@react-three/drei';
import { Button, Col, Container, Row } from 'react-bootstrap'

import { useGLTF, useAnimations } from "@react-three/drei";
import { Planes } from './Plane2';
import { Bloom, DepthOfField, EffectComposer, Vignette } from '@react-three/postprocessing';
import { Citys } from './City1';
import { Aero } from './Aero';
import { City } from './City';
import { motion, useAnimation } from 'framer-motion';
import { useSpring ,animated as a} from '@react-spring/three';

function App(props) {

  const ref =useRef()
 
  return (
    <>
  
    <color attach="background" args={["#000"]} />
    <Environment preset='city' background/>   
    <Flight />
  
    </>
   
  )
}

export default App







function Plane(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/plane1.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
    actions.Action.play()
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Sphere_7"
                position={[1, 0.058, -0.002]}
                rotation={[1, 0.076, 0.027]}
                scale={0.117}
              >
                <group
                  name="Sphere002_5"
                  position={[0.311, 0.118, -0.057]}
                  rotation={[-2.04, 0, -0.111]}
                >
                  <mesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials["Material.002"]}
                  />
                </group>
                <group
                  name="Sphere003_6"
                  position={[0.311, -0.102, 0.049]}
                  rotation={[1.102, 0, -0.111]}
                >
                  <mesh
                    name="Object_14"
                    geometry={nodes.Object_14.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="Plane003_4"
                position={[-0.532, -0.14, 0.027]}
                rotation={[3.14, 0.036, 0.055]}
                scale={0.197}
              >
                <group
                  name="Plane001_2"
                  position={[1.093, -0.161, 3.31]}
                  rotation={[3.138, 0.099, 0.055]}
                  scale={[1.328, 4.232, 2.261]}
                >
                  <mesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials["Material.007"]}
                  />
                </group>
                <group
                  name="Plane005_3"
                  position={[1.337, -0.155, -3.068]}
                  rotation={[0.004, 0.029, 3.087]}
                  scale={[-1.328, 4.232, 2.261]}
                >
                  <mesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials["Material.006"]}
                  />
                </group>
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials["Material.004"]}
                />
              </group>
              <group
                name="Circle_10"
                position={[0.086, 0.021, 0.039]}
                rotation={[0, 0, 0.142]}
                scale={[0.281, 0.281, 0.214]}
              >
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                name="Cylinder_11"
                position={[0.506, -0.261, 0.125]}
                rotation={[-0.344, -0.059, 0.332]}
                scale={[0.013, 0.216, 0.011]}
              >
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials["Material.009"]}
                />
              </group>
              <group
                name="Circle003_14"
                position={[0.589, -0.566, 0.229]}
                rotation={[-Math.PI / 2, -0.082, 0]}
                scale={[-0.042, 0.048, 0.042]}
              >
                <group name="Circle001_13">
                  <mesh
                    name="Object_22"
                    geometry={nodes.Object_22.geometry}
                    material={materials["Material.015"]}
                  />
                </group>
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials["Material.011"]}
                />
              </group>
              <group
                name="Cylinder001_15"
                position={[0.506, -0.261, -0.09]}
                rotation={[-2.797, -0.059, 2.81]}
                scale={[-0.013, 0.216, 0.011]}
              >
                <mesh
                  name="Object_24"
                  geometry={nodes.Object_24.geometry}
                  material={materials["Material.010"]}
                />
              </group>
              <group
                name="Circle005_17"
                position={[0.589, -0.566, -0.197]}
                rotation={[-Math.PI / 2, -0.082, Math.PI]}
                scale={[0.042, 0.048, 0.042]}
              >
                <group name="Circle004_16">
                  <mesh
                    name="Object_28"
                    geometry={nodes.Object_28.geometry}
                    material={materials["Material.016"]}
                  />
                </group>
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials["Material.012"]}
                />
              </group>
              <group
                name="Cylinder002_18"
                position={[-1.228, -0.261, 0.125]}
                rotation={[-0.344, -0.059, 0.332]}
                scale={[0.013, 0.216, 0.011]}
              >
                <mesh
                  name="Object_30"
                  geometry={nodes.Object_30.geometry}
                  material={materials["Material.008"]}
                />
              </group>
              <group
                name="Circle007_20"
                position={[-0.183, -0.566, 0.036]}
                rotation={[-Math.PI / 2, -0.082, 0]}
                scale={[-0.042, 0.048, 0.042]}
              >
                <group name="Circle006_19">
                  <mesh
                    name="Object_34"
                    geometry={nodes.Object_34.geometry}
                    material={materials["Material.014"]}
                  />
                </group>
                <mesh
                  name="Object_32"
                  geometry={nodes.Object_32.geometry}
                  material={materials["Material.013"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/plane1.glb");





function Ground(){
  return(
   <>
     <hemisphereLight intensity={0.5} />
    <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={15} blur={0.5} opacity={1} far={20} />
    <mesh scale={4} position={[3, -2, -1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
     <mesh scale={4} position={[-3, 2, -1]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <Environment resolution={512}>
        {/* Ceiling */}
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
        <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
        {/* Sides */}
        <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
        <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
        {/* Key */}
        <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
      </Environment>
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
   </>

  )
}



function Flight(){

    const springs =useSpring({
      to: async next => {
      await next({ position: [0, 0, 0] });
    },
    from: { position: [2, 0, 0] },
    config: { duration: 4000 }
    })

    const springs1 =useSpring({
      to: async next => {
      await next({ position: [0, 0, 0] });
    },
    from: { position: [-2, 0, 0] },
    config: { duration: 4000 }
    })


   const springs2 = useSpring({
  to: async next => {
    await next({ position: [-2, -1, 1], rotation: [0, 2 * Math.PI, 0] });
    await next({ position: [8, -1, 1], rotation: [0, 2 * Math.PI, 0] }); // Rotate 360 degrees around Y-axis
    await next({ position: [0, 0, 0], rotation: [0, 0, 0] }); // Reset rotation
  },
  from: { position: [-1, 0, 0], rotation: [0, 0, 0] },
  config: { duration: 12000 }, // Increase duration for a slower animation
  reset: true,
  loop: true,
});

    

  return(

    <ScrollControls pages={6} damping={0.26}>
    <ambientLight intensity={0.1}/>
    <Scroll > 
    <Ground position={[0,-1,0]}/>
  
     <a.group {...springs}>
      <Float  rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.2,-0.5 ]}  speed={0.5}>
  
        < Planes scale={0.01} rotation-z={0.3} position={[1, 0.8, 4]}/>
        </Float>

      
      </a.group> 
         {/* <Plane   /> */}
        
        <a.group {...springs1}>
        <Float rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.2,-0.5 ]}  speed={0.5}>
        < Planes scale={0.01} rotation-y={-0.5} rotation-z={2.9} rotation-x={-3}  position={[-1, 0.3, 4]}/>
        </Float>
        </a.group>

        <Float rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.2,-0.5 ]}  speed={0.5}>
        < Planes scale={0.02} position={[-2,0.8,-4]}/>
        </Float>

        
  
      <a.group {...springs2}>
         <Plane scale={0.2} position={[0,0.8,-4]}/>
      </a.group>


        

         

        {/* <Aero scale={0.01}/> */}
       


        {/* <Float rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[10,0 ]} rotation-x={-1} speed={2}>
        < Planes scale={0.05} rotation-y={1.4} rotation-z={1.5}  position={[0, 1, 1]}/>
        </Float> */}
      

  
      <Citys  rotation-y={-0.1}  scale={4} position={[1,-3,0]} blur={0.1}/>

      <City />
        
      
        
    <Sparkles noise={0} count={100} speed={0.01} size={3} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
      <Sparkles noise={0} count={100} speed={0.01} size={7} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>
    </Scroll>
    <Scroll html style={{ width: "100%" }}>
        <Container style={{ position: "relative" }}>
        
          <Row  
            className="text-center align-items-center justify-content-center"
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              padding: "0px 30px 0px",
            }}
          >
            <Col xs={6}>
              <div>
                <h1 className='glow' style={{ marginBottom: "0px" }}>
              Dream Travels
                </h1>
                {/* <button className="glow-on-hover" type="button">Get More</button> */}
              </div>
             
            </Col>
          </Row>
          <Row
            className="text-center align-items-center justify-content-center"
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              padding: "0px 30px 0px",
              top: "100vh",
            }}
          >
            <Col xs={6}>
              <div>
                <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                  *************
                </h1>
              </div>
            </Col>
          </Row>
          <Row
            className="text-center align-items-center justify-content-center"
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              padding: "0px 30px 0px",
              top: "200vh",
            }}
          >
            <Col xs={6}>
              <div>
                <h1 style={{ marginBottom: "0px", color: "#fff" }}>$$$$$</h1>
                <h1 style={{ marginBottom: "0px", color: "#fff" }}>
            Hello world
                </h1>
                <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                Hello world
                </h1>
              </div>
            </Col>    
          </Row>
          <Row
            className="text-center align-items-center justify-content-center"
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              padding: "0px 30px 0px",
              top: "300vh",
            }}
          >
            <Col xs={6}>
              <div>
                <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                Hello world <br />
                Hello world
                </h1>
              </div>
            </Col>
          </Row>
          <Row
            className="text-center align-items-center justify-content-center"
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              padding: "0px 30px 0px",
              top: "400vh",
            }}
          >
            <Col xs={8}>
              <div>
                <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                Hello world
                  <br />   Hello world
                </h1>
              </div>
            </Col>
          </Row>
          <Row
            className="text-center align-items-center justify-content-center"
            style={{
              position: "absolute",
              width: "100%",
              height: "100vh",
              padding: "0px 30px 0px",
              top: "500vh",
            }}
          >
            <Col xs={6}>
              <div>
                <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                Hello world
                  <br />   Hello world
                </h1>
                <h2
                  style={{
                    marginBottom: "30px",
                    marginTop: "-1px",
                    color: "#fff",
                  }}
                >
                   Hello world
                </h2>
                <button className="glow-on-hover" type="button">Get More</button>
              </div>
            </Col>
          </Row>
        </Container>
      </Scroll>

  </ScrollControls>


  )
}



function Building(){
  return(
    <>
    </>
  )
}