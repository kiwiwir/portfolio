import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  imagePath: string = 'images/placeholderportrait.jpg';
  toastVisible = false;

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
    this.showToast();
  }

  showToast() {
    this.toastVisible = true;
    setTimeout(() => {
      this.toastVisible = false;
    }, 2000);
  }
}
