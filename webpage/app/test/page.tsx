'use server';

import LikeButton from './like-button';
function Header({ title }: { title: string }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default async function TestPage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}