export interface CardProps {
    title: string,
    content: string
};

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: {title: string, content: string}) => void;
};

export interface ButtonProps {
   size?: "small" | "medium" | "large";
   shape?: "rounded-sm" | "rounded-md" | "rounded-lg";
   onClick?: () => void;
   children: React.ReactNode;
   className?: string;
};

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  content: string; // JSONPlaceholder uses 'body' for content
};

export interface Geo {
  lat: string;
  lng: string;
};

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
};

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}