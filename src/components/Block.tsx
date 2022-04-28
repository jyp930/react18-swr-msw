import useSWR from 'swr';
import React from 'react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Block({ label }: { label: string }) {
  const { data } = useSWR(['/delay', label], fetcher, { suspense: true });

  if (data.errorMessage) {
    throw new Error(data.errorMessage);
  }
  return (
    <p className="blockContent">
      {label} <span style={{ color: 'blue' }}>{data.message}</span>
    </p>
  );
}
export default Block;
