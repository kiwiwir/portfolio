export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  main_image: string;
  description: string;
  details: {
    intro: string;
    sections: {
      heading?: string;
      content?: string;
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
    subtitle: 'Bachelor’s Thesis in Mechatronics',
    main_image: 'assets/images/project1.jpg',
    description:
      'I designed and built an automatic pet food dispenser based on a Raspberry Pi 3 and an Arduino Uno. The system controls a stepper-driven dry food dispensing mechanism, a load-cell scale, and sensors that monitor food levels in both the hopper and the bowl. The device has a custom 3D-printed enclosure, a touch-screen interface written in Python (Pygame), and integration with the Telegram app for remote control and camera snapshots. A calibration system keeps portion accuracy within ±10 g.',
    details: {
      intro:
        'This project is an automated pet feeding device that combines hardware, custom 3D-printed mechanics, and software to precisely dose dry food, track how much the animal has eaten, and display the current state of the feeder and bowl on the device and on the owner’s phone.\n\n' +
        'The dispenser has a dry‑food hopper with a rotating dosing mechanism, a weighing platform under the bowl, sensors that check the food level in the container, a built‑in camera, and a touch‑screen on the front. A scheduling system controls automatic feeding multiple times per day, while continuous sensor readings allow the system to detect states such as “bowl empty”, “hopper empty”, or “pet is eating”. These states are displayed on the screen and sent as notifications to the owner.\n\n' +
        'On the software side, the project consists of a graphical user interface, microcontroller firmware, and a Telegram bot for remote control and photo snapshots. The owner can configure feeding plans, trigger feeding manually, monitor food intake in grams and kilocalories, and visually check on the pet.',
      sections: [
        {
          heading: 'Goals',
          content:
            'The project started with a detailed design phase in which I defined the main goals and requirements. I wanted to create a device that could automate feeding while providing accurate portion control and real-time monitoring of the pet’s eating habits. The system needed to be reliable, user-friendly, and capable of sending notifications to the owner’s phone. An additional goal was to design a custom 3D-printed enclosure that would neatly house all components and allow easy maintenance.\n\n' +
            'The project was primarily created for my sick cat, who had diabetes and required precise monitoring of food intake.',
          images: [
            'assets/images/project1/project1_1.jpg',
            'assets/images/project1/project1_2.jpg',
          ],
          caption: 'Figures 1 and 2 show the finished, ready-to-use device.',
        },
        {
          heading: 'System architecture',
          content:
            'The system has two main parts: a high‑level controller and a real‑time controller.\n\n' +
            'The Raspberry Pi 3 runs the user interface, feeding schedule, system state logic, camera handling, and communication with the mobile interface. The Arduino Uno is responsible for reading sensors and controlling the stepper motor that dispenses the food.\n\n' +
            'The two boards communicate via a simple serial link in a master–slave configuration. The Raspberry Pi acts as the master and sends short commands such as “dose once”, “read weight”, or “read distance”. The Arduino responds with measured values and status flags.',
          images: [
            'assets/images/project1/project1_3.jpg',
            'assets/images/project1/project1_4.jpg',
          ],
          caption:
            'Figure 3 shows the logical connection between the Raspberry Pi and Arduino, while Figure 4 presents the real-world wiring setup with the connected components. The touch-screen interface is directly connected to the Raspberry Pi.',
        },
        {
          heading: 'Components',
          content:
            'The project uses the following components:\n' +
            '- a 28BYJ-48 stepper motor with a ULN2003 driver that rotates an internal impeller to dispense dry food from the hopper (Figure 5),\n' +
            '- a load cell with an HX711 amplifier mounted under the bowl, functioning as an electronic scale (Figure 6),\n' +
            '- an HC-SR04 ultrasonic distance sensor and an IR barrier to monitor the food level in the hopper and detect when it is empty (Figure 7),\n' +
            '- a 4-inch Waveshare touch screen (Figure 8),\n' +
            '- a Raspberry Pi Camera Module Rev. 1.3 that monitors the feeding area (Figure 9), hidden behind a hand-made, painted modeling-clay cat sculpture.\n\n' +
            'The device is powered by a mains adapter and includes Li-ion batteries, a charging module, and a step-down converter that provides a stable 5 V supply for the electronics (Figure 10). All components are connected to the Raspberry Pi and Arduino Uno.',
          images: [
            'assets/images/project1/project1_5.jpg',
            'assets/images/project1/project1_6.jpg',
            'assets/images/project1/project1_7.jpg',
            'assets/images/project1/project1_8.jpg',
            'assets/images/project1/project1_9.jpg',
            'assets/images/project1/project1_10.jpg',
          ],
        },
        {
          heading: 'Electrical Connections',
          content:
            'Figure 11 shows the connection diagram created in Fritzing, while Figure 12 presents my workspace during the planning and wiring phase — which was quite chaotic at the beginning.\n' +
            'Figure 13 shows the load-cell calibration process using laboratory weights, with my “assistant” visible in the background.',
          images: [
            'assets/images/project1/project1_11.jpg',
            'assets/images/project1/project1_12.jpg',
            'assets/images/project1/project1_13.jpg',
          ],
        },
        {
          heading: 'Mechanical design and 3D printing',
          content:
            'The enclosure and internal parts were designed in SolidWorks (Figure 14) and printed in 3D (Figure 15). The design includes a modular upper hopper, a rotating dosing impeller, an internal chute guiding food into the bowl, a two-part weighing platform for the load cell, and a front panel that holds the display and camera. All dimensions are based on real components to make assembly and wiring easier.\n\n' +
            '3D printing allowed quick changes to parts like the impeller shape, chute angle and bowl mount to reduce food spillage and match sensor positions. The enclosure also has useful details, such as a lid with magnets that keeps the hopper closed and protects the food.',
          images: [
            'assets/images/project1/project1_14.jpg',
            'assets/images/project1/project1_15.jpg',
          ],
        },
        {
          heading: 'Embedded Software and GUI',
          content:
            'The software is split between the Arduino firmware and the Raspberry Pi application. The Arduino firmware, written in C++, handles all low‑level work: reading the load cell via the HX711, measuring distance with the ultrasonic sensor, reading the IR barrier, and rotating the stepper motor. It offers a simple text‑based protocol over the serial port and sends measurements and status codes back to the Raspberry Pi.\n\n' +
            'On the Raspberry Pi, a Python application built with Pygame provides the main interface and logic. It manages feeding schedules, processes sensor data from the Arduino, updates the display, and records daily food intake in grams and kilocalories. The GUI has several screens (main, settings, lock), large touch‑friendly buttons and animations, language options (PL/EN), and a screen-lock feature that prevents accidental feeding triggered by pets or children (Figures 16-18).',
          images: [
            'assets/images/project1/project1_16.jpg',
            'assets/images/project1/project1_17.jpg',
            'assets/images/project1/project1_18.jpg',
          ],
        },
        {
          heading: 'Remote Control and Notifications',
          content:
            'Remote control is implemented using a Telegram bot, allowing the feeder to be operated without a dedicated mobile application. On startup, the bot sends a welcome message and provides commands for help, manual feeding, checking the bowl and hopper status, or recalibrating the scale.\n\n' +
            'Figures 19–21 show manual dosing from the touch screen, scheduled feeding, and the /dose command used in a Telegram chat.\n\n' +
            'The Raspberry Pi handles all Telegram communication, interacts with the Arduino when required, updates the system state, and sends responses. For important events such as an empty bowl, empty hopper, or the pet starting to eat, the system automatically sends notifications along with a photo.',
          images: [
            'assets/images/project1/project1_19.gif',
            'assets/images/project1/project1_20.gif',
            'assets/images/project1/project1_21.gif',
          ],
        },
        {
          heading: 'Cat Testing',
          images: [
            'assets/images/project1/project1_22.gif',
            'assets/images/project1/project1_23.jpg',
          ],
          caption:
            'A short video above shows my cats using the device, along with example photos captured by the feeder and sent to the owner via Telegram.',
        },
      ],
      outro:
        'This project is a complete mechatronic system built from scratch, combining electronics, mechanics, firmware, and software into a single device. By integrating a Raspberry Pi, an Arduino, multiple sensors, and a custom 3D-printed enclosure, it is a practical example of an end‑to‑end IoT product.',
    },
  },

  {
    id: 2,
    title: '2. A simple 2D RPG game developed in Unity',
    subtitle: 'Bachelor’s Thesis in Computer Science',
    main_image: 'assets/images/project2.jpg',
    description:
      'This project is a single-player 2D role-playing game created as part of my engineering thesis. The game features pixel-art visuals, open-world exploration, combat, quests, dialogue systems, crafting, and a full save/load system based on JSON serialization. The project was developed entirely in Unity using C#, with a modular architecture and ScriptableObjects for data management. All core RPG mechanics were implemented from scratch, and the pixel-art assets were created by me using Aseprite. The game was designed with scalability and future expansion in mind.',
    details: {
      intro:
        'This project is a single-player 2D role-playing game developed in Unity as part of my engineering thesis. The game combines open-world exploration, combat mechanics, quests, dialogue systems, crafting, and a save/load system. I worked on the project independently and was responsible for system design, programming, asset creation, and testing. All core RPG mechanics were implemented from scratch in C#.',
      sections: [
        {
          heading: 'Project Repository and Playable Version',
          content:
            'The full Unity project source code is available on GitHub:<br>' +
            '<a href="https://github.com/kiwiwir/Marble-s-adventure" target="_blank">GitHub Repository</a><br><br>' +
            'A playable .exe version of the game is also available on itch.io:<br>',
        },
        {
          heading: 'Goals',
          content:
            'The main goal of this project was to create a fully playable and technically well-structured RPG game. I focused on building a modular and scalable architecture that allows future expansion without modifying the core systems.',
          images: [
            'assets/images/project2/project2_1.jpg',
            'assets/images/project2/project2_2.gif',
          ],
          caption:
            'Figure 1 shows scenes with the player exploring the open-world locations. It highlights the pixel-art assets and the user interface elements. Figure 2 demonstrates fragments of the game.',
        },
        {
          heading: 'User Interface',
          content:
            'Figure 3 shows the main menu interface. The main menu provides access to the core game functions. It includes the following buttons: New Game, Load Game, Options, Credits and Quit.\n\n' +
            'The New Game button starts a new playthrough and transitions to the opening cutscene. The Options button opens the settings panel, where the player can adjust the game volume and change the language. The Credits section contains acknowledgments for music authors and other external assets used in the project.\n\n' +
            'The game also includes a multi-functional player journal system (Figure 4). The journal contains several tabs that organize important gameplay information. These tabs include player statistics, a list of discovered items with descriptions, a world map, settings, and control instructions.',
          images: [
            'assets/images/project2/project2_3.gif',
            'assets/images/project2/project2_4.gif',
          ],
        },
        {
          heading: 'Architecture',
          content:
            'The game is built using Unity’s component-based architecture, which allowed me to design systems in a modular and organized way. From the beginning, I focused on creating a clean and scalable structure. I used design patterns such as Singleton for managing global systems like the Game Manager or Audio Manager. For data management, I used ScriptableObjects. This approach allowed me to separate game data (such as items, potions, and recipes) from logic. Thanks to this solution, adding new content does not require rewriting existing code. Instead, new assets can simply be created in the Unity editor.',
          images: [
            'assets/images/project2/project2_5.jpg',
            'assets/images/project2/project2_6.jpg',
          ],
          caption:
            'Figure 5 shows the folder hierarchy in the Project window, presenting the structured organization of scripts, scenes, prefabs, and assets. Figure 6 shows an example of a ScriptableObject used to store item data, including name, description, and effects.',
        },
        {
          heading: 'Exploration and World Design',
          content:
            'The gameplay is based on top-down exploration. The player can move freely between locations, interact with environmental objects, and discover different areas of the world. Movement is handled using Rigidbody2D and Collider2D components to ensure proper physics and collision detection (Figure 7).\n\n' +
            'The game world is divided into multiple scenes that are logically connected (Figure 8). The environment was built using Unity’s Tilemap system, which allowed me to create detailed pixel-art maps efficiently while maintaining consistency.',
          images: [
            'assets/images/project2/project2_7.jpg',
            'assets/images/project2/project2_8.jpg',
            'assets/images/project2/project2_9.jpg',
            'assets/images/project2/project2_10.jpg',
            'assets/images/project2/project2_11.gif',
          ],
          caption:
            'Figure 9 and 10 show one of the main exploration areas designed with the Tilemap system. Figure 11 presents a short animation of the player moving between scenes, showing smooth transitions and consistent collision handling.',
        },
        {
          heading: 'Combat System and Enemy AI',
          content:
            'One of the key gameplay mechanics is the combat system. It includes health management, damage calculation, knockback effects, and simple enemy artificial intelligence. Enemies are able to detect the player within a certain range, follow them, and attack when close enough.\n\n' +
            'The AI is based on basic state logic, such as idle, patrol, chase, and attack states. This structure makes it easy to extend enemy behavior in the future. The combat system was designed to be clear and responsive, ensuring that player actions feel immediate.',
          images: [
            'assets/images/project2/project2_12.gif',
            'assets/images/project2/project2_13.gif',
            'assets/images/project2/project2_14.gif',
          ],
          caption:
            'Figure 12-14 show various combat scenarios, including player attacks, taking loot, enemy reactions, and health changes.',
        },
        {
          heading: 'Inventory and Alchemy Crafting System',
          content:
            'The inventory system allows the player to collect and store items in a slot-based interface. Items can be used directly or combined to create potions through the alchemy system. Crafting requires specific ingredients, and the system checks whether the player has the required materials before creating the final product.\n\n' +
            'All items and recipes are stored as ScriptableObjects, which makes the crafting system flexible and easy to expand. This design allows new potions or ingredients to be added without modifying the crafting logic.',
          images: [
            'assets/images/project2/project2_15.gif',
            'assets/images/project2/project2_16.gif',
            'assets/images/project2/project2_17.gif',
            'assets/images/project2/project2_18.gif',
          ],
          caption:
            'Figure 15 shows player collecting items. Figure 16 presents player using the slot-based inventory system with collected items. Figure 17 presents opening a chest. Figure 18 demonstrates the crafting process, showing how the potion is created.',
        },
        {
          heading: 'Shop System',
          content:
            'The game includes a shop system that allows the player to buy and sell items. Items in the shop are divided into categories using tabs. This allows the player to quickly switch between different types of items, such as potions, consumables, or other usable objects. Each item displays its name and price.\n\n' +
            'The system handles both purchasing and selling logic. When buying an item, the game checks if the player has enough currency and then updates the inventory accordingly. When selling, the item is removed from the player’s inventory and the appropriate amount of currency is added. The shop system is fully integrated with the inventory system and uses the same data structure based on ScriptableObjects.',
          images: ['assets/images/project2/project2_19.gif'],
          caption:
            'Figure 19 shows the shop interface with visible item categories and the buy/sell functionality. The layout presents items in a structured grid, along with price information and player currency displayed clearly.',
        },
        {
          heading: 'Dialogue and Quest System',
          content:
            'The dialogue system enables direct interaction with NPC characters and plays an important role in storytelling and quest progression. When the player approaches an NPC, the possibility of interaction is clearly indicated by a speech bubble displayed above the character’s head (Figure 20).\n\n' +
            'Once the conversation starts, the player can read dialogue lines presented with a typewriter text effect. This effect makes the dialogue feel more dynamic and immersive, rather than appearing instantly on the screen. In some conversations, the player is given dialogue options to choose from. Depending on the selected option, the NPC responds differently, which creates a sense of agency and narrative branching.\n\n' +
            'Figure 21 presents an example of a dialogue with selectable response options. The player’s choice leads to a different reaction from the NPC.\n\n' +
            'The dialogue system is directly connected to the quest system. Certain dialogue options can unlock new quests, update existing ones, or mark objectives as completed. This integration ensures that story progression feels natural and connected to player decisions.\n\n' +
            'The quest system tracks both active and completed tasks. Each quest includes a structured set of information: the quest name, description, objectives, and rewards for the player after completion. The system automatically updates quest progress when the player fulfills specific conditions, such as talking to a certain NPC, reaching a specific location, or collecting required items.\n\n' +
            'Figure 22 shows the quest journal interface. It displays a list of accepted quests, including the quest title, description, objectives that must be completed, and rewards granted after finishing the quest. The layout was designed to keep all important information organized and easy to read.\n\n' +
            'Figure 23 demonstrates the completion of a sample quest for an NPC. The example shows how the system recognizes that all objectives have been fulfilled and updates the quest status accordingly. After completion, the player receives a reward, and the quest is moved to the completed section in the journal.',
          images: [
            'assets/images/project2/project2_20.gif',
            'assets/images/project2/project2_21.gif',
            'assets/images/project2/project2_22.png',
            'assets/images/project2/project2_23.gif',
          ],
        },
        {
          heading: 'Save and Load System',
          content:
            'The game includes a save and load system based on JSON serialization. Important data such as player position, inventory content, quest progress, and world state are stored in JSON format. This ensures that the player can continue the game from the same point after restarting.',
          images: ['assets/images/project2/project2_24.png'],
        },
        {
          heading: 'Aseprite Assets',
          content:
            'The game features a consistent pixel-art visual style. All sprites, animations, and UI elements were created by me using Aseprite. I aimed for an aesthetic inspired by classic 2D RPG games, with a limited color palette. Animations were created frame by frame to ensure smooth character movement and combat.',
          images: [
            'assets/images/project2/project2_25.jpg',
            'assets/images/project2/project2_26.jpg',
            'assets/images/project2/project2_27.jpg',
            'assets/images/project2/project2_28.jpg',
          ],
        },
      ],
      outro:
        'This project demonstrates my ability to design and develop a complete 2D RPG game from scratch. It shows my understanding of Unity, object-oriented programming and game design. It also reflects my ability to combine technical skills with art, as I developed both the programming systems and the visual assets myself.',
    },
  },

  {
    id: 3,
    title: '3. Art & Illustration',
    main_image: 'assets/images/project3.png',
    description:
      'I am a self-taught artist who draws as a hobby. My work includes traditional drawing, digital illustration, pixel art, and simple graphic design. I mainly focus on anime-style illustrations, but I also experiment with semi-realism and visual assets for my own games and applications.',
    details: {
      intro:
        'This project presents my personal art and other work, which I have been making over several years. I am a self-taught artist, and drawing started as a hobby that gradually became an important creative skill supporting my game and application projects.',
      sections: [
        {
          heading: 'Traditional and Digital Art',
          content:
            'I began with traditional drawing on paper, mainly using fineliners and pens.',
          images: [
            'assets/images/project3/project3_1.jpg',
            'assets/images/project3/project3_2.jpg',
            'assets/images/project3/project3_3.jpg',
            'assets/images/project3/project3_4.jpg',
            'assets/images/project3/project3_5.jpg',
            'assets/images/project3/project3_6.jpg',
            'assets/images/project3/project3_7.jpg',
          ],
        },
        {
          content:
            'Over time, I transitioned to digital art, first working in Paint Tool SAI, and later moving to Clip Studio Paint, which is currently my main drawing software.',
          images: [
            'assets/images/project3/project3_8.jpg',
            'assets/images/project3/project3_9.jpg',
            'assets/images/project3/project3_10.jpg',
            'assets/images/project3/project3_11.jpg',
          ],
        },
        {
          content:
            'Most of my illustrations are created in an anime-inspired style, but I also enjoy exploring semi-realistic rendering to improve anatomy, lighting, and color usage.',
          images: [
            'assets/images/project3/project3_12.jpg',
            'assets/images/project3/project3_13.jpg',
            'assets/images/project3/project3_14.jpg',
          ],
        },
        {
          heading: 'Original Character design',
          content:
            'At one stage, I created my own original characters (OC) and painted several illustrations featuring this characters, as well as a short comic. This helped me practice character design, visual storytelling, and consistency across multiple artworks.',
          images: [
            'assets/images/project3/project3_15.jpg',
            'assets/images/project3/project3_16.jpg',
          ],
        },
        {
          heading: 'Game art assets',
          content:
            'Art also plays a significant role in my game development projects. When creating my own games, I design custom graphics instead of using ready-made assets. For example, I illustrated a start screen for a simple flower-themed clicker game developed in Android Studio (Figure 17). I also created pixel art assets and animations for a 2D RPG game built in Unity, including characters, environment elements, and animated sprites.\n\n' +
            'Figure 18 shows a pixel-art animation of a Cat character walking, which I created for new platformer game project I will be working on.',
          images: [
            'assets/images/project3/project3_17.jpg',
            'assets/images/project3/project3_18.gif',
          ],
        },
        {
          heading: 'Logos and SVG icons',
          content:
            'In addition to illustration and game art, I have experimented with logo design. One example presented here is a logo created for my own project with two versions and the other one is logo for group project - pizza app.',
          images: [
            'assets/images/project3/project3_19.png',
            'assets/images/project3/project3_20.png',
            'assets/images/project3/project3_21.png',
          ],
        },
        {
          content:
            'I was responsible for the visual side of a sailing mobile application Sail Buddy (still in development). My work included designing SVG icons (Figure 22), three SVG versions of a boat (Figure 23) and the main application logo. I learned vector graphic design using Inkscape specifically for this project. The client’s main requirement was a logo featuring a cormorant wearing a cap and waves. I started by sending concept art with several different logo ideas (Figure 24). After discussing which direction the client preferred, I prepared multiple variations of the selected concept. In the final stage, I refined the details and delivered the finished logo in SVG format, along with color variants (Figure 25).',
          images: [
            'assets/images/project3/project3_22.png',
            'assets/images/project3/project3_23.png',
            'assets/images/project3/project3_24.jpg',
            'assets/images/project3/project3_25.png',
          ],
        },
        {
          heading: 'Clay modeling',
          content:
            'Beyond drawing and digital illustration, I also create small figurines from modeling clay, which I sculpt by hand and then paint using acrylic paints.\n\n' +
            'I also tried modeling in Blender and then printing the model in 3D, but I still need to learn Blender more to create more complex models.',
          images: [
            'assets/images/project3/project3_26.jpg',
            'assets/images/project3/project3_27.jpg',
            'assets/images/project3/project3_28.gif',
          ],
        },
        {
          heading: 'Crocheting',
          content:
            'I also crochet plush toys. This includes designing and learning new patterns and crocheting accessories and garments.',
          images: [
            'assets/images/project3/project3_29.jpg',
            'assets/images/project3/project3_30.jpg',
            'assets/images/project3/project3_31.jpg',
            'assets/images/project3/project3_32.jpg',
          ],
          caption:
            'Figure 32 shows The Groke from the Moomin series, which I crocheted as a gift for my aunt. And this plush flew to Svalbard on south of the North Pole!',
        },
        {
          content:
            'Figure below shows example of my crocheted clothing. I love making scarfs, hats and sweaters and I plan to make more in the future. Working with yarn has taught me patience and precision.',
          images: ['assets/images/project3/project3_33.jpg'],
        },
      ],
      outro:
        'This page shows my creative background, ability to learn tools independently, and experience in combining art with technical projects such as games and applications.',
    },
  },
];
