import { Component } from '@angular/core';

interface mockToolKit {
  id: number;
}

@Component({
  selector: 'app-toolkit',
  templateUrl: './toolkit.component.html',
  styleUrl: './toolkit.component.scss',
})
export class ToolkitComponent {
  mockToolKits: mockToolKit[] = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
  ];
}
