import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PROJECTS, Project } from '../../../data/projects.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;
  figureCounter = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = PROJECTS.find((p) => p.id === id);

    if (this.project) {
      this.figureCounter = 0;
    }
  }
  getFigureNumber(): number {
    this.figureCounter += 1;
    return this.figureCounter;
  }

  backToProjects() {
    this.router.navigate(['/projects']);
  }
}
