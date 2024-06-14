import { workercategory } from './workercategory';
import { workerdepartment } from './workerdepartment';

export interface workerinfo {
  id_worker: number;
  fio_worker: string;
  birthday_worker: number;
  departments_worker: number;
  positions_worker: number;
  competency_worker: string;
  categories_worker: number;
  date_hiring_worker: number;
  date_layoff_worker: number;
  note_worker?: string;
  add_date_worker: number;
  photo_worker: string;

  workercategory?: workercategory;
  workerdepartment?: workerdepartment;
}
