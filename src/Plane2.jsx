/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 ./public/models/plane2.glb 
Author: mudkipz321 (https://sketchfab.com/mudkipz321)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/boeing-787-9-qantas-centenary-4b061566dc5a4495bff5e8c7e911ec4e
Title: Boeing 787-9 Qantas Centenary
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useSphere } from '@react-three/cannon'

export function Planes(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/plane2.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    console.log(actions)
    actions.Animation.play()
  })


  return (
    <group ref={group} {...props} dispose={null} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[-3.612, 4.946, -0.304]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Main_Gear_Door_L_13" position={[4.779, 2.9, 0]} rotation={[0, 0, -1.367]}>
                <group name="Rear_Gear_Panel_12" position={[-0.152, -1.269, -0.303]} rotation={[0.007, 0.045, -0.024]}>
                  <mesh name="Object_25" geometry={nodes.Object_25.geometry} material={materials.Metal} />
                </group>
              </group>
              <group name="Main_Gear_Door_R_15" position={[-4.777, 2.9, 0]} rotation={[Math.PI, 0, 1.775]}>
                <group name="Rear_Gear_Panel001_14" position={[-1.574, -8.131, 0.303]} rotation={[3.13, 0.044, 0.385]}>
                  <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials.Metal} />
                </group>
              </group>
              <group name="Main_Gear_S_Door_L_17" position={[4.83, 2.975, 0]} rotation={[0, 0, -1.471]}>
                <group name="Rear_Gear_Small_Panel_16" position={[-0.003, -0.32, -0.08]} rotation={[0, 0, 0.097]}>
                  <mesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.Metal} />
                </group>
              </group>
              <group name="Main_Gear_S_Door_R_19" position={[-4.83, 2.975, 0]} rotation={[0, 0, 1.471]}>
                <group name="Rear_Gear_Small_Panel001_18" position={[9.657, -0.32, -0.08]} rotation={[0, 0, 0.097]}>
                  <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.Metal} />
                </group>
              </group>
              <group name="Main_Gear_L_32" position={[4.679, 3.039, 0]} rotation={[0, 0, -1.525]}>
                <group name="Main_Wheels_Left_31" position={[-0.005, 0.006, -0.287]} rotation={[0, 0, -1.567]}>
                  <group name="Rear_Gear_Actuator_20" position={[2.226, -0.225, -0.68]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.landing_Gear} />
                  </group>
                  <group name="Rear_Gear_Actuator_Sleeve001_21" position={[2.696, -0.225, -0.292]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.landing_Gear} />
                  </group>
                  <group name="Rear_Gear_Anti_Brake_Locks_22" position={[3.273, -0.551, -0.389]} rotation={[0, 1.416, Math.PI / 2]}>
                    <mesh name="Object_43" geometry={nodes.Object_43.geometry} material={materials.Engine_Metal} />
                  </group>
                  <group name="Rear_Gear_Axles_23" position={[3.047, -0.227, -0.651]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.landing_Gear} />
                    <mesh name="Object_46" geometry={nodes.Object_46.geometry} material={materials.Metal} />
                    <mesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.Landing_Gear_Black} />
                  </group>
                  <group name="Rear_Gear_Dolly_24" position={[3.043, -0.23, -0.014]} rotation={[-Math.PI / 2, 0, 0.003]}>
                    <mesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.Landing_Gear_Black} />
                  </group>
                  <group name="Rear_Gear_Floor_25" position={[2.703, -0.222, -0.013]} rotation={[0, 0.003, 1.573]}>
                    <mesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.Dark_Metal} />
                  </group>
                  <group name="Rear_Gear_Pillar_26" position={[1.35, -0.229, -0.002]} rotation={[0, 0.003, Math.PI / 2]}>
                    <mesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials.landing_Gear} />
                  </group>
                  <group name="Rear_Gear_Support_Ring_27" position={[1.853, -0.225, 0.261]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials.Off_Gray} />
                  </group>
                  <group name="Rear_Gear_Yolk_28" position={[2.828, 0.098, -0.006]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.landing_Gear} />
                  </group>
                  <group name="Rear_Gear_Yolk_Axle_29" position={[2.71, -0.229, 0.271]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_59" geometry={nodes.Object_59.geometry} material={materials.Dark_Metal} />
                  </group>
                  <group name="Rear_Gear_Yolk_Axle_2_30" position={[2.709, -0.229, -0.291]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_61" geometry={nodes.Object_61.geometry} material={materials.Dark_Metal} />
                  </group>
                  <mesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials.Rubber} />
                </group>
              </group>
              <group name="Main_Gear_R_44" position={[-4.679, 3.039, 0]} rotation={[0, 0, 1.525]}>
                <group name="Main_Wheels_Right_43" position={[9.352, 0.006, -0.287]} rotation={[0, 0, -1.567]}>
                  <group name="Rear_Gear_Actuator001_33" position={[2.199, -9.14, -0.57]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_66" geometry={nodes.Object_66.geometry} material={materials.landing_Gear} />
                  </group>
                  <group name="Rear_Gear_Anti_Brake_Locks001_34" position={[3.273, -0.551, -0.389]} rotation={[0, 1.416, Math.PI / 2]}>
                    <mesh name="Object_68" geometry={nodes.Object_68.geometry} material={materials.Engine_Metal} />
                  </group>
                  <group name="Rear_Gear_Axles001_35" position={[3.047, -0.227, -0.651]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials.landing_Gear} />
                    <mesh name="Object_71" geometry={nodes.Object_71.geometry} material={materials.Metal} />
                    <mesh name="Object_72" geometry={nodes.Object_72.geometry} material={materials.Landing_Gear_Black} />
                  </group>
                  <group name="Rear_Gear_Dolly001_36" position={[3.043, -0.23, -0.014]} rotation={[-Math.PI / 2, 0, 0.003]}>
                    <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials.Landing_Gear_Black} />
                  </group>
                  <group name="Rear_Gear_Floor001_37" position={[2.711, -0.227, -0.013]} rotation={[0, 0.003, Math.PI / 2]}>
                    <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.Dark_Metal} />
                  </group>
                  <group name="Rear_Gear_Pillar001_38" position={[1.351, -9.13, -0.002]} rotation={[0, 0.003, Math.PI / 2]}>
                    <mesh name="Object_78" geometry={nodes.Object_78.geometry} material={materials.landing_Gear} />
                  </group>
                  <group name="Rear_Gear_Support_Ring001_39" position={[1.853, -0.225, 0.261]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_80" geometry={nodes.Object_80.geometry} material={materials.Off_Gray} />
                  </group>
                  <group name="Rear_Gear_Yolk_Axle_2001_40" position={[2.709, -0.229, -0.291]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials.Dark_Metal} />
                  </group>
                  <group name="Rear_Gear_Yolk_Axle001_41" position={[2.673, -9.14, 0.271]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials.Dark_Metal} />
                  </group>
                  <group name="Rear_Gear_Yolk001_42" position={[2.828, 0.098, -0.006]} rotation={[0, 0.003, 0]}>
                    <mesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials.landing_Gear} />
                  </group>
                  <mesh name="Object_64" geometry={nodes.Object_64.geometry} material={materials.Rubber} />
                </group>
              </group>
              <group name="Nose_Gear_B_R_46" position={[-0.688, 1.878, 27.356]} rotation={[-0.104, 0.038, 0.014]} scale={0.381}>
                <group name="Gear_Door2_45" position={[0.896, -0.152, 0.08]} rotation={[1.675, -0.01, 0.04]} scale={2.628}>
                  <mesh name="Object_89" geometry={nodes.Object_89.geometry} material={materials['Gear_Door_Metal.001']} />
                </group>
              </group>
              <group name="Nose_Gear_A_L_48" position={[0.581, 2.081, 28.922]} rotation={[-0.169, -0.09, 0]} scale={0.557}>
                <group name="Front_Gear_Door2_47" position={[-5.559, 13.247, -50.075]} rotation={[1.739, -0.015, -0.089]} scale={1.794}>
                  <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.Metal_Fuselage_2} />
                </group>
              </group>
              <group name="Nose_Gear_B_L_50" position={[0.685, 1.878, 27.356]} rotation={[-0.105, -0.047, 0.005]} scale={0.381}>
                <group name="Gear_Door_49" position={[-0.891, -0.136, 0.087]} rotation={[1.675, -0.01, -0.046]} scale={2.628}>
                  <mesh name="Object_95" geometry={nodes.Object_95.geometry} material={materials['Gear_Door_Metal.001']} />
                </group>
              </group>
              <group name="Nose_Gear_A_R_52" position={[-0.582, 2.081, 28.922]} rotation={[-0.169, 0.087, 0.03]} scale={0.557}>
                <group name="Front_Gear_Door_51" position={[5.826, 13.075, -50.09]} rotation={[1.739, -0.015, 0.091]} scale={1.794}>
                  <mesh name="Object_98" geometry={nodes.Object_98.geometry} material={materials.Metal_Fuselage_2} />
                </group>
              </group>
              <group name="Gear_Arm_A_Top_L_54" position={[2.666, 3.25, -0.935]} rotation={[0, -0.365, 1.036]}>
                <group name="Gear_Arm_B_53" position={[0.408, -0.502, -0.002]} rotation={[-1.579, -0.739, -1.582]}>
                  <mesh name="Object_101" geometry={nodes.Object_101.geometry} material={materials.Gear_Door_Metal} />
                </group>
              </group>
              <group name="Gear_Arm_A_Top_R_56" position={[-2.666, 3.25, -0.935]} rotation={[0, 0.365, -1.035]}>
                <group name="Gear_Arm_B001_55" position={[5.521, -0.502, 2.262]} rotation={[-2.121, -0.521, -2.459]}>
                  <mesh name="Object_104" geometry={nodes.Object_104.geometry} material={materials.Gear_Door_Metal} />
                </group>
              </group>
              <group name="Gear_Arm_A_Bottom_L_58" position={[2.87, 3.321, -0.359]} rotation={[0, -0.358, -0.853]}>
                <group name="Gear_Arm_57" position={[-0.413, 0.499, 0.002]} rotation={[-1.585, -0.739, -1.592]}>
                  <mesh name="Object_107" geometry={nodes.Object_107.geometry} material={materials.Gear_Door_Metal} />
                </group>
              </group>
              <group name="Gear_Arm_A_Bottom_R_60" position={[-2.869, 3.32, -0.359]} rotation={[0, 0.358, 0.853]}>
                <group name="Gear_Arm001_59" position={[7.771, 0.499, 2.754]} rotation={[-2.117, -0.525, -2.452]}>
                  <mesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials.Gear_Door_Metal} />
                </group>
              </group>
              <group name="Engine_Left_63" position={[9.955, 2.511, 10.944]} rotation={[0, -0.032, 1.704]}>
                <group name="Blade_Rotor_61" position={[-0.001, -0.002, -1.826]} rotation={[Math.PI / 2, 0, 0]}>
                  <mesh name="Object_113" geometry={nodes.Object_113.geometry} material={materials.Fan_Blade_Mount} />
                </group>
                <group name="Fan_Blades_62" position={[-0.001, -0.005, -2.082]} rotation={[-0.088, 0.265, 0.326]}>
                  <mesh name="Object_115" geometry={nodes.Object_115.geometry} material={materials.Fan_Blade} />
                </group>
              </group>
              <group name="Engine_Right_66" position={[-9.955, 2.511, 10.944]} rotation={[0, 0.032, -1.704]}>
                <group name="Blade_Rotor001_64" position={[20.017, -0.002, -1.176]} rotation={[Math.PI / 2, 0, 0.065]}>
                  <mesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials.Fan_Blade_Mount} />
                </group>
                <group name="Fan_Blades001_65" position={[20.033, -0.005, -1.431]} rotation={[-0.087, 0.201, 0.32]}>
                  <mesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials.Fan_Blade} />
                </group>
              </group>
              <group name="Gear_Arm_B_Bottom_L_68" position={[3.174, 3.344, -0.17]} rotation={[0, 0.432, -0.845]}>
                <group name="Gear_Arm002_67" position={[-0.367, 0.369, 0.001]} rotation={[-1.582, -0.864, -1.5]}>
                  <mesh name="Object_123" geometry={nodes.Object_123.geometry} material={materials.Off_Gray} />
                </group>
              </group>
              <group name="Gear_Arm_B_Bottom_R_70" position={[-3.174, 3.343, -0.17]} rotation={[0, -0.432, 0.845]}>
                <group name="Gear_Arm003_69" position={[0.367, 0.369, 0.001]} rotation={[-0.847, -0.522, -0.429]}>
                  <mesh name="Object_126" geometry={nodes.Object_126.geometry} material={materials.Off_Gray} />
                </group>
              </group>
              <group name="Gear_Arm_B_Top_L_72" position={[2.801, 3.265, 0.556]} rotation={[0, 0.415, 0.803]}>
                <group name="Gear_Arm_B002_71" position={[0.467, -0.449, -0.003]} rotation={[-1.562, -0.864, -1.474]}>
                  <mesh name="Object_129" geometry={nodes.Object_129.geometry} material={materials.Off_Gray} />
                </group>
              </group>
              <group name="Gear_Arm_B_Top_R_74" position={[-2.801, 3.265, 0.556]} rotation={[0, -0.415, -0.803]}>
                <group name="Gear_Arm_B003_73" position={[-0.467, -0.449, -0.003]} rotation={[-0.855, -0.533, -0.444]}>
                  <mesh name="Object_132" geometry={nodes.Object_132.geometry} material={materials.Off_Gray} />
                </group>
              </group>
              <group name="Gear_Door_Fuselage_L_76" position={[0.879, 1.634, -0.251]}>
                <group name="Main_Gear_Door_R001_75" position={[1.254, 0.501, -0.048]}>
                  <mesh name="Object_135" geometry={nodes.Object_135.geometry} material={materials.Fuselage_Wing_Section} />
                </group>
              </group>
              <group name="Gear_Door_Fuselage_R_78" position={[-0.879, 1.634, -0.251]}>
                <group name="Main_Gear_Door_L001_77" position={[-1.254, 0.501, -0.048]}>
                  <mesh name="Object_138" geometry={nodes.Object_138.geometry} material={materials.Gear_Door} />
                </group>
              </group>
              <group name="Wheel_101" position={[1.615, 2.314, 27.282]} rotation={[-1.78, 0, -Math.PI / 2]}>
                <group name="landing_Gear_Axle_95" position={[2.052, -1.615, -0.015]}>
                  <mesh name="Object_178" geometry={nodes.Object_178.geometry} material={materials.Wheel} />
                  <mesh name="Object_179" geometry={nodes.Object_179.geometry} material={materials.Metal} />
                  <mesh name="Object_180" geometry={nodes.Object_180.geometry} material={materials.landing_Gear} />
                </group>
                <group name="Landing_Gear_Lights_96" position={[0.702, -1.384, 0.095]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
                  <mesh name="Object_182" geometry={nodes.Object_182.geometry} material={materials.White_glass} />
                  <mesh name="Object_183" geometry={nodes.Object_183.geometry} material={materials.landing_Gear} />
                </group>
                <group name="Nose_Gear_Shock_97" position={[1.838, -1.615, -0.019]} rotation={[0, 0.018, Math.PI / 2]}>
                  <mesh name="Object_185" geometry={nodes.Object_185.geometry} material={materials.Engine_Metal} />
                </group>
                <group name="Nose_Gear_Shock_2_98" position={[1.611, -1.615, -0.307]} rotation={[0, -0.798, Math.PI / 2]}>
                  <mesh name="Object_187" geometry={nodes.Object_187.geometry} material={materials.landing_Gear} />
                </group>
                <group name="Nose_Gear_Shock_Joint_99" position={[1.39, -1.615, -0.521]} rotation={[0, 0.018, 0]}>
                  <mesh name="Object_189" geometry={nodes.Object_189.geometry} material={materials.Dark_Metal} />
                </group>
                <group name="Nose_Gear_Shock001_100" position={[1.176, -1.615, -0.299]} rotation={[0, 0.833, -Math.PI / 2]}>
                  <mesh name="Object_191" geometry={nodes.Object_191.geometry} material={materials.landing_Gear} />
                </group>
                <mesh name="Object_176" geometry={nodes.Object_176.geometry} material={materials.Rubber} />
              </group>
              <group name="antenna_Bottom_0" position={[0, 1.472, -10.868]} rotation={[0, 0, Math.PI]}>
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.material_0} />
              </group>
              <group name="Antenna_Front_Side_1" position={[1.807, 2.787, 28.112]} rotation={[-0.158, -0.353, -2.003]}>
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.material_0} />
              </group>
              <group name="Antenna_Front_Side_Upper_2" position={[2.184, 3.688, 28.114]} rotation={[0, -0.385, -Math.PI / 2]}>
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.material_0} />
              </group>
              <group name="Antenna_Top_1_3" position={[0, 7.731, 22.092]}>
                <mesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.material_0} />
              </group>
              <group name="Antenna_Top_2_4" position={[0, 7.825, 17.002]}>
                <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.material_0} />
              </group>
              <group name="Antenna_Top_3_5" position={[0, 7.957, 14.244]}>
                <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.material_0} />
              </group>
              <group name="Antenna_top_4_6" position={[0, 7.745, -4.83]}>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.material_0} />
              </group>
              <group name="Antenna_Top_5_7" position={[0, 7.829, -8.673]}>
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.material_0} />
              </group>
              <group name="Antenna_Top_6_8" position={[0, 7.895, -14.875]}>
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials.material_0} />
              </group>
              <group name="Antenna_Top_7_9" position={[0, 7.661, -16.771]}>
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials.material_0} />
              </group>
              <group name="Nacelle_84" position={[10.074, 2.512, 7.58]} rotation={[1.574, -0.094, 0.033]}>
                <group name="Engine_Cone_79" position={[-0.004, -3.821, -0.06]} rotation={[-3.11, -0.094, 0.003]}>
                  <mesh name="Object_143" geometry={nodes.Object_143.geometry} material={materials.Exhaust_Cone} />
                </group>
                <group name="Engine_Funnel_80" position={[0.022, -2.271, -0.002]} rotation={[3.141, 1.476, 0.019]}>
                  <mesh name="Object_145" geometry={nodes.Object_145.geometry} material={materials['Engine_Metal.001']} />
                </group>
                <group name="Engine_Funnel_Detail_81" position={[0.024, -1.974, -0.002]} rotation={[3.141, 1.476, 0.019]}>
                  <mesh name="Object_147" geometry={nodes.Object_147.geometry} material={materials.Engine_Metal} />
                </group>
                <group name="Engine_Internals_82" position={[-0.009, 0.239, 0.003]} rotation={[0, 0.094, 0]}>
                  <mesh name="Object_149" geometry={nodes.Object_149.geometry} material={materials.Dark_Metal} />
                </group>
                <group name="Engine_Internals001_83" position={[-0.009, 0.239, 0.003]} rotation={[0, 0.094, 0]}>
                  <mesh name="Object_151" geometry={nodes.Object_151.geometry} material={materials.Fan_Blade_Mount} />
                </group>
                <mesh name="Object_140" geometry={nodes.Object_140.geometry} material={materials.Wing_Metal} />
                <mesh name="Object_141" geometry={nodes.Object_141.geometry} material={materials.Metal_Engine} />
              </group>
              <group name="Engine_Canard_85" position={[8.396, 3.63, 8.192]} rotation={[0, 0, -0.561]}>
                <mesh name="Object_153" geometry={nodes.Object_153.geometry} material={materials.material_0} />
              </group>
              <group name="Cockpit_Windows_86" position={[0.718, 5.56, 29.595]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh name="Object_155" geometry={nodes.Object_155.geometry} material={materials.Glass} />
              </group>
              <group name="Fuselage_Intake_87" position={[2.253, 1.731, 9.803]} rotation={[0.103, 0.065, 0.708]}>
                <mesh name="Object_157" geometry={nodes.Object_157.geometry} material={materials.Livery_Red} />
              </group>
              <group name="Light_88" position={[0, 1.552, 8.146]}>
                <mesh name="Object_159" geometry={nodes.Object_159.geometry} material={materials.Light} />
              </group>
              <group name="Bar_89" position={[0, 1.628, 2.671]}>
                <mesh name="Object_161" geometry={nodes.Object_161.geometry} material={materials.Livery_Red} />
              </group>
              <group name="Windshield_Wipers_90" position={[0.127, 5.141, 30.437]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh name="Object_163" geometry={nodes.Object_163.geometry} material={materials.Rubber} />
              </group>
              <group name="Fuselage_Wing_Section_91" position={[0, -0.02, 0]}>
                <mesh name="Object_165" geometry={nodes.Object_165.geometry} material={materials['Fuselage_Wing_Section.EDIT2']} />
                <mesh name="Object_166" geometry={nodes.Object_166.geometry} material={materials.Dark_Metal} />
              </group>
              <group name="Top_Light_92" position={[0, 7.555, 24.225]} rotation={[0.046, 0, 0]}>
                <mesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials.Light} />
              </group>
              <group name="Fuselage001_93" position={[0, 4.634, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh name="Object_170" geometry={nodes.Object_170.geometry} material={materials.Metal_Fuselage_2} />
                <mesh name="Object_171" geometry={nodes.Object_171.geometry} material={materials.Wing_Metal} />
                <mesh name="Object_172" geometry={nodes.Object_172.geometry} material={materials.Gear_Well} />
              </group>
              <group name="Gear_Well_Fuselage_94" position={[1.885, 3.878, 0]}>
                <mesh name="Object_174" geometry={nodes.Object_174.geometry} material={materials.Dark_Metal} />
              </group>
              <group name="Tail_103" position={[0, 13.529, -26.307]}>
                <mesh name="Object_193" geometry={nodes.Object_193.geometry} material={materials.Tail_Metal} />
                <mesh name="Object_194" geometry={nodes.Object_194.geometry} material={materials.Wing_Metal} />
              </group>
              <group name="Tail_Rudder_104" position={[0.078, 14.228, -29.798]}>
                <mesh name="Object_196" geometry={nodes.Object_196.geometry} material={materials.Rudder_Metal} />
              </group>
              <group name="Wings_105" position={[10.58, 3.888, 0]}>
                <mesh name="Object_198" geometry={nodes.Object_198.geometry} material={materials.Metal_Wing} />
                <mesh name="Object_199" geometry={nodes.Object_199.geometry} material={materials.Dark_Metal} />
              </group>
              <group name="Wings_Inner_Flaps_106" position={[6.318, 3.54, -2.314]}>
                <mesh name="Object_201" geometry={nodes.Object_201.geometry} material={materials.Metal} />
              </group>
              <group name="Wings_Mid_Flaps_107" position={[15.965, 5.238, -4.526]}>
                <mesh name="Object_203" geometry={nodes.Object_203.geometry} material={materials.Metal} />
              </group>
              <group name="Lights_108" position={[3.311, 3.446, 9.217]} rotation={[Math.PI / 2, 0, -0.267]}>
                <mesh name="Object_205" geometry={nodes.Object_205.geometry} material={materials.White_glass} />
              </group>
              <group name="Anti_Shock_Bodies_109" position={[19.451, 5.53, -6.606]} rotation={[-0.022, -0.003, 0.139]}>
                <mesh name="Object_207" geometry={nodes.Object_207.geometry} material={materials.Metal} />
              </group>
              <group name="Ailerons_110" position={[2.331, 6.043, -26.59]} rotation={[0, 0.191, 0]}>
                <mesh name="Object_209" geometry={nodes.Object_209.geometry} material={materials.Wing_Metal} />
                <mesh name="Object_210" geometry={nodes.Object_210.geometry} material={materials.Metal} />
              </group>
              <group name="Pylon_111" position={[10.011, 4.515, 7.683]} rotation={[0, -0.041, 0]}>
                <mesh name="Object_212" geometry={nodes.Object_212.geometry} material={materials.Metal_pylon} />
              </group>
              <group name="flaps_112" position={[2.572, 5.693, -29.071]}>
                <mesh name="Object_214" geometry={nodes.Object_214.geometry} material={materials.material_0} />
              </group>
              <group name="Wing_glass_113" position={[3.344, 3.414, 9.288]} rotation={[0, 0.886, 0]}>
                <mesh name="Object_216" geometry={nodes.Object_216.geometry} material={materials.White_glass} />
              </group>
              <group name="Right_Wing_Light(green)_114" position={[32.587, 7.9, -13.025]}>
                <mesh name="Object_218" geometry={nodes.Object_218.geometry} material={materials.Light} />
              </group>
              <group name="Left_Wing_Light(red)_115" position={[32.587, 7.9, -13.025]}>
                <mesh name="Object_220" geometry={nodes.Object_220.geometry} material={materials.Green_Light} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/plane2.glb')
