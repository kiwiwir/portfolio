import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      image: 'assets/images/project1.jpg',
      title: '1. Design and construction of a mechatronic pet food dispenser',
      description:
        'I designed and built an automatic IoT pet food dispenser that combines a Raspberry Pi 3 and an Arduino Uno to control a stepper‑driven dry food mechanism, a load‑cell weighing system, and multiple sensors for monitoring food level in the hopper and bowl. The device features a custom 3D‑printed enclosure, a touch‑screen GUI written in Python (Pygame), Telegram integration for remote control and notifications with camera snapshots, and a calibration procedure that keeps portioning accuracy within 10 g over a 0–1 kg range.',
    },
    {
      id: 2,
      image: 'assets/images/project2.jpg',
      title: '2. A simple 2D RPG game developed in Unity',
      description:
        'This project is a single-player 2D role-playing game created as part of my engineering thesis. The game features pixel-art visuals, open-world exploration, combat, quests, dialogue systems, crafting, and a full save/load system based on JSON serialization. The project was developed entirely in Unity using C#, with a modular architecture and ScriptableObjects for data management. All core RPG mechanics were implemented from scratch, and the pixel-art assets were created by me using Aseprite. The game was designed with scalability and future expansion in mind.',
    },
    {
      id: 3,
      image: 'assets/images/placeholderportrait.jpg',
      title: 'Project 3',
      description: 'This is a description for Project 3.',
    },
    {
      id: 4,
      image: 'assets/images/placeholderportrait.jpg',
      title: 'Project 4',
      description: 'This is a description for Project 4.',
    },
    {
      id: 5,
      image: 'assets/images/placeholderportrait.jpg',
      title: 'Project 5',
      description: 'This is a description for Project 5.',
    },
  ];
}
