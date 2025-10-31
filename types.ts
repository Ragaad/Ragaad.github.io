
export interface ContactInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  address: string;
}

export interface Experience {
  date: string;
  role: string;
  company: string;
  location: string;
  description: string;
}

export interface Education {
  date: string;
  degree: string;
  department: string;
  company: string; // University name
  location: string;
  thesis: string;
  note: string;
}

export interface Publication {
  id: string;
  content: string;
}

export interface Certification {
  name: string;
  date: string;
}

export interface Membership {
  organization: string;
  description: string;
}
