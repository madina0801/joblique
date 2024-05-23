import useSWR from 'swr';

const fetcher = (...args) => fetch(args).then((res) => res.json());