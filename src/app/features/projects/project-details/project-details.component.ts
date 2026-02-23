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
  figureMap = new Map<string, number>();

  selectedImage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.project = PROJECTS.find((p) => p.id === id);

    if (this.project) {
      this.generateFigureNumbers();
    }
  }
  private generateFigureNumbers() {
    let counter = 1;

    this.project?.details.sections.forEach((section) => {
      section.images?.forEach((img) => {
        this.figureMap.set(img, counter++);
      });
    });
  }

  backToProjects() {
    this.router.navigate(['/projects']);
  }

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
