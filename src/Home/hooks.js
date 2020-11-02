/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import useFetch from 'use-http';

export function useProjects() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [projects, setProjects] = useState([]);
  const [projectsFiltered, setProjectsFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [sortByDate, setSortByDate] = useState(false);
  const [debouncedSearch] = useDebounce(search, 500);
  const { get, loading, data, error } = useFetch(apiUrl, { suspense: true });

  const fetchProjects = () => get('data');
  const toggleSortByDate = () => setSortByDate(!sortByDate);

  useEffect(() => fetchProjects(), []);

  useEffect(() => {
    const searchLowerCase = debouncedSearch.toLowerCase();
    if (!data) return;
    setProjectsFiltered(searchLowerCase ? data.filter((project) => project.description.toLowerCase().includes(searchLowerCase)) : data);
  }, [data, debouncedSearch]);

  useEffect(() => {
    if (!projectsFiltered) return;
    setProjects(sortByDate ? projectsFiltered.slice().sort((a, b) => new Date(a['start date']) - new Date(b['start date'])) : projectsFiltered);
  }, [projectsFiltered, sortByDate]);

  return {
    projects,
    setSearch,
    loading,
    error,
    sortByDate,
    toggleSortByDate,
  };
}
