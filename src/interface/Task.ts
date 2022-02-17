export interface Task {
  idx?: number;
  status: number;
  delivery_date: string;
  manager: string;
  car_master: string;
  car_type: string;
  customer_name: string;
  customer_phone: string;
  car_front: string;
  car_side_a: string;
  car_side_b: string;
  car_back: string;
  panorama: string;
  blackbox: string;
  ppf: string;
  etc: string;
  coil_matt: string;
  glass_film: string;
  tinting: string;
  release_date: string;
  release_img: string;
  payment_type: string;
  payment_amount: number;
  payment_completed: string;
  created_at: string;
  updated_at: string;
}