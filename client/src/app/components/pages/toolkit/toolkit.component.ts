import { Component } from '@angular/core';
/* Страница инструментов компании */
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
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
  ];
}
