// Adding React import to provide access to the React namespace for types like React.ReactNode
import React from 'react';

export interface Testimonial {
  name: string;
  handle: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: 'positive' | 'negative';
}