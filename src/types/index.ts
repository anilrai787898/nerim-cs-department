export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType;
}

export interface Faculty {
  id: string;
  name: string;
  title: string;
  department: string;
  email: string;
  research: string[];
  imageUrl: string;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  credits: number;
  prerequisites: string[];
  faculty: string;
  duration: string;
  subjects: number;
  seats: number;
}