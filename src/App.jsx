import React, { useEffect, useRef } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, OrbitControls, Scroll, ScrollControls, Sparkles } from '@react-three/drei';
import { Button, Col, Container, Row } from 'react-bootstrap'

import { useGLTF, useAnimations } from "@react-three/drei";
import { Planes } from './Plane2';
import { Bloom, DepthOfField, EffectComposer, Vignette } from '@react-three/postprocessing';
import Experiance from './componets/Experiance';

function App(props) {

  const ref =useRef()
  useFrame(()=>{
  })
  return (
    <>
    <color attach="background" args={["#000"]} />
    
    <Environment preset='warehouse'/>

    
    
    <ScrollControls pages={6} damping={0.26}>
      <Scroll > 
        <Float floatingRange={[-5,2]} rotation-x={-1} speed={2}>
        <Card rotation-x={Math.PI * 0.05} scale={1} position={[-5, -2.5, 0]}/>
          </Float>
          {/* <Float floatingRange={[-5,-6]}>
               <Card rotation-x={Math.PI * 0.05} scale={1} position={[-10, 0, 0]}/>
          </Float>  */} 
 
         
          {/* <Plane   /> */}
          <Float rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[10,1]} rotation-x={-1} speed={2}>
          < Planes scale={0.09} rotation-y={1.5} rotation-z={1.5}  position={[0, 0, 1]}/>
          </Float>
          {/* <Float  floatingRange={[1,-2]} rotation-x={-1} speed={1}>
          < Planes scale={0.09} rotation-y={1.5} />
          </Float> */}
          
        
          
      <Sparkles noise={0} count={500} speed={0.01} size={3} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
        <Sparkles noise={0} count={500} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>
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
                  <h1 style={{ marginBottom: "0px" }}>
                Dream Travels
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
                top: "100vh",
              }}
            >
              <Col xs={6}>
                <div>
                  <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                    *********************************
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
                  #########
                  </h1>
                  <h1 style={{ marginBottom: "0px", color: "#fff" }}>
                    ***********
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
                   ########### <br />
                  &&&&&&&&&&&&&&
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
                   ^^^^^^^^^^^^^^^
                    <br /> ***************
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
                   **********
                    <br /> &&&&&&&&&&&&
                  </h1>
                  <h2
                    style={{
                      marginBottom: "30px",
                      marginTop: "-1px",
                      color: "#fff",
                    }}
                  >
                   $$$$$$$$$$$$$$
                  </h2>
                  <button className="glow-on-hover" type="button">Get More</button>
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>

    </ScrollControls>
    </>
   
  )
}

export default App


const Card=()=>{
  return(
    <mesh  position={[2.5,0,0]}>
    <ambientLight/>
    <OrbitControls enableZoom={false} />
    <boxGeometry/>
    <meshNormalMaterial color={"red"}/>
   </mesh>

  )
}

const Scard=()=>{
  return(
    <mesh  position={[1,0,0]}>
    <ambientLight/>
    <OrbitControls enableZoom={false} />
    <sphereGeometry/>
    <meshNormalMaterial color={"red"}/>
   </mesh>

  )
}




function Plane(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/plane1.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    console.log(actions);
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