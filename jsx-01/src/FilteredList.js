import { useMemo } from 'react';

 export function FilteredList({ list }) {
  const filteredList = useMemo(() => list.filter(item => item.age > 18), [list]);

  return (
    <ul>
      {filteredList.map(item => (
        <li key={item.id}>
          {item.name} - {item.age}
        </li>
      ))}
    </ul>
  );
}