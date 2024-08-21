import { PropsWithChildren } from 'react';

interface Props {
  title: string;
  date: string;
  description: string;
}

export default function CareerItem({ title, date, description, children }: PropsWithChildren<Props>) {
  return <div></div>;
}
