import { Component } from '@angular/core';

// similar to @Annotations in java
// provieds config metadeta and used at runtime
@Component({
  selector: 'app-root', // custom tag defined and triggers instantiations below
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // ts property that could be exported and used in html
  // app.component.html {{ title }}
  title = 'my-app';
  firstName = "mohamed";
  lastName = "ahmed";
}
