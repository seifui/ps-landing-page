import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to the Team | Prezso Labs',
  description: 'Welcome to Prezso Labs - Join us in creating amazing things for the world',
};

export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
