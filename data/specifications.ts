import { Specification } from "@/types";
import { Cpu, Camera, Battery, Weight, Wifi, Gauge, Component, Radio, Frame, Power, PlaneTakeoff } from "lucide-react";

export const specifications: Specification[] = [
    {
      icon: Component,
      title: "Motor dan ESC",
      description: "A2212 1000KV BRUSHLESS MOTOR WITH 30A ESC",
      color: "bg-indigo-500",
    },
    {
      icon: Cpu,
      title: "Controller",
      description: "LGT8F328P LQFP32 MiniEVB CH9340C",
      color: "bg-pink-500",
    },
    {
      icon: Gauge,
      title: "Gyroscope",
      description: "MPU6050 MPU-6050 3 AXIS ANALOG GYROSCOPE",
      color: "bg-teal-500",
    },
    {
      icon: Wifi,
      title: "GPS",
      description: "MODUL GPS UBLOX NEO 6MV2 U-BLOX NEO-6M",
      color: "bg-yellow-500",
    },
    {
      icon: PlaneTakeoff,
      title: "Propeller",
      description: "PROPELLER 10x4.5 CW CCW",
      color: "bg-lime-500",
    },
    {
      icon: Power,
      title: "Power Delivery Board",
      description: "Matek 3A PDB Modul Distribution XT60",
      color: "bg-fuchsia-500",
    },
    {
      icon: Radio,
      title: "Transmiter dan Receiver",
      description: "FlySky FS-i6 FSi6 2.4G 6CH AFHDS RC",
      color: "bg-rose-500",
    },
    {
      icon: Frame,
      title: "Frame",
      description: "Frame F450 Drone",
      color: "bg-emerald-500",
    },
    {
      icon: Battery,
      title: "Baterai",
      description: "Lipo 3s LPB Nano 2200mah 3S 25C",
      color: "bg-amber-500",
    },
  ];