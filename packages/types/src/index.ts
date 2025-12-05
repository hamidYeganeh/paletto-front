export interface User {
  id: string;
  email: string;
  displayName: string;
  roles: ("admin" | "artist" | "user")[];
}

export interface Artwork {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  artistId: string;
  price?: number;
  createdAt: string;
}

export interface Gallery {
  id: string;
  name: string;
  description?: string;
  curatorId?: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  location?: string;
}

export interface Order {
  id: string;
  userId: string;
  artworkIds: string[];
  total: number;
  status: "pending" | "paid" | "shipped" | "cancelled";
  createdAt: string;
}
