export interface Project {
  id: number;
  title: string;
  main_image: string;
  description: string;
  details: {
    intro: string;
    sections: {
      heading: string;
      content: string;
      images?: string[];
      caption?: string;
    }[];
    outro?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: '1. Design and construction of a mechatronic pet food dispenser',
    main_image: 'assets/images/project1.jpg',
    description:
      'I designed and built an automatic pet food dispenser that uses a Raspberry Pi 3 and an Arduino Uno to control a stepper‑driven dry food mechanism, a load‑cell scale, and sensors that monitor food levels in the hopper and bowl. The device has a custom 3D‑printed case, a touch‑screen interface written in Python (Pygame), integration with the Telegram app for remote control and camera snapshots, and a calibration that keeps portions within 10 g.',
    details: {
      intro:
        'This project is a device that automates feeding and monitoring of household pets. It combines hardware, a custom 3D‑printed enclosure and software to dose dry food, track how much the animal eats, and show the current state of the feeder and the bowl, both on the device and on the owner’s phone.\n\n' +
        'The dispenser has a dry‑food hopper with a rotating dosing mechanism, a weighing platform under the bowl, sensors that check the food level in the container, a built‑in camera, and a touch‑screen on the front. A schedule module controls automatic feedings several times per day, while the system keeps reading the weight and sensors to detect states like “bowl empty”, “hopper empty” or “pet is eating”, and shows messages on the screen and sends notifications to the phone.\n\n' +
        'On the software side, the project includes a GUI application, firmware for the microcontroller, and a Telegram bot for remote control and photos. Thanks to this, the owner can set feeding plans, trigger feeding manually, monitor food intake in grams and kilocalories, and visually check on the pet.',
      sections: [
        {
          heading: 'Goals',
          content:
            'The main goal was to build a reliable home device that can manage a pet’s feeding routine on its own: give accurate portions on schedule, detect when food runs out, and give the owner quick feedback. The system also needed to help with health monitoring by tracking how much food the animal really eats during the day.',
          images: [
            'assets/images/project1_1.jpg',
            'assets/images/project1_2.jpg',
          ],
          caption:
            'The project started with a detailed design phase, where I defined the main goals and requirements for the pet food dispenser. I wanted to create a device that could automate feeding while providing accurate portion control and real-time monitoring of the pet’s eating habits. The system needed to be reliable, user-friendly, and capable of sending notifications to the owner’s phone. I also aimed to design a custom 3D‑printed enclosure that would house all the components neatly and allow for easy maintenance.',
        },
        {
          heading: 'System architecture',
          content:
            'The system has two main parts: a high‑level controller and a real‑time controller. A Raspberry Pi 3 runs the user interface, the feeding schedule, the state logic, the camera, and the connection to the mobile app. An Arduino Uno reads the sensors and controls the stepper motor that dispenses the food.\n\n' +
            'The two boards communicate over over a simple serial link in a Master–Slave setup. The Raspberry Pi is the master and sends short commands like “dose once”, “read weight” or “read distance”. The Arduino answers with measured values or status flags.',
          images: [
            'assets/images/project1_3.jpg',
            'assets/images/project1_4.jpg',
          ],
        },
        {
          heading: 'Hardware design',
          content:
            'A stepper motor with a ULN2003 driver turns an internal impeller that dispenses dry food from the hopper. A load cell with an HX711 amplifier is mounted under the bowl and works as an electronic scale for both single portions and total food intake. An ultrasonic distance sensor and an IR barrier watch the food level in the hopper and detect when there is no food where it should be.\n\n' +
            'On the front there is a 4‑inch touch screen and a camera that shows the feeding area. The device is powered from a mains adapter and has Li‑Ion batteries, a charging module and a step‑down converter that provide a stable 5 V for the electronics. All parts are connected to the Raspberry Pi and Arduino Uno.',
        },
        {
          heading: 'Mechanical design and 3D printing',
          content:
            'The enclosure and internal parts were designed in SolidWorks and printed in 3D. The design includes a modular upper hopper, a rotating impeller for dosing, an internal chute that guides food into the bowl, a two‑part weighing platform for the load cell, and a front part that holds the display and camera. All dimensions are based on real components to make assembly and wiring easier.\n\n' +
            '3D printing allowed quick changes to parts like the impeller, chute angle and bowl mount to reduce food spillage and match sensor positions. The housing also has useful details, such as a lid with magnets that keeps the hopper closed and protects the food.',
        },
        {
          heading: 'Embedded software and GUI',
          content:
            'The software is split between the Arduino firmware and the Raspberry Pi application. The Arduino firmware, written in C++, handles all low‑level work: reading the load cell via the HX711, measuring distance with the ultrasonic sensor, reading the IR barrier, and driving the stepper motor. It offers a simple text‑based protocol over the serial port and sends measurements and status codes back to the Raspberry Pi.\n\n' +
            'On the Raspberry Pi, a Python application built with Pygame provides the main interface and logic. It manages feeding times, processes sensor data from the Arduino, updates the screen, and records daily food intake in grams and kilocalories. The GUI has several screens (main, settings, lock), large touch‑friendly buttons and animations, language options (PL/EN), and a lock that stops accidental feeding when the screen is pressed by a pet or a child.',
        },
        {
          heading: 'Remote control and notifications',
          content:
            'To control the feeder from anywhere, the device uses a Telegram bot as a remote interface. When the system starts, the bot sends a welcome message and shows commands such as help, manual feeding, status of bowl and hopper, or recalibration of the scale. This lets the owner use the feeder without being at home and without a special mobile app.\n\n' +
            'The Raspberry Pi handles all Telegram messages, talks to the Arduino when needed, updates its own state and sends replies. For important events — like an empty bowl, empty hopper or the pet starting to eat — the feeder automatically sends notifications and a photo from the camera.',
        },
      ],
      outro:
        'This project is a complete mechatronic system built from scratch: electronics, mechanics, firmware and software all working together in one device. By combining a Raspberry Pi, an Arduino, several sensors and a custom 3D‑printed case, it is a practical example of an end‑to‑end IoT product. It shows skills in embedded coding, GUI design, CAD and rapid prototyping.',
    },
  },

  {
    id: 2,
    title: '2. A simple 2D RPG game developed in Unity',
    main_image: 'assets/images/project2.jpg',
    description:
      'This project is a single-player 2D role-playing game created as part of my engineering thesis. The game features pixel-art visuals, open-world exploration, combat, quests, dialogue systems, crafting, and a full save/load system based on JSON serialization. The project was developed entirely in Unity using C#, with a modular architecture and ScriptableObjects for data management. All core RPG mechanics were implemented from scratch, and the pixel-art assets were created by me using Aseprite. The game was designed with scalability and future expansion in mind.',
    details: {
      intro:
        'This project is a fully functional 2D RPG game developed in Unity.',
      sections: [
        {
          heading: 'Game Mechanics',
          content:
            'The game includes combat, quests, dialogue systems, and crafting.',
          images: [
            'assets/images/project1_1.jpg',
            'assets/images/project1_2.jpg',
            'assets/images/project1_3.jpg',
            'assets/images/project1_4.jpg',
          ],
          caption: 'The project',
        },
        {
          heading: 'Architecture',
          content:
            'A modular architecture using ScriptableObjects and JSON save/load.',
        },
        {
          heading: 'Assets',
          content: 'All pixel-art assets were created manually using Aseprite.',
        },
      ],
    },
  },
];
