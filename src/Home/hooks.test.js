import "whatwg-fetch";
import { renderHook } from "@testing-library/react-hooks";
import fetchMock from "fetch-mock";
import { act } from "react-test-renderer";
import { useProjects } from "./hooks";
import mock from './hooks.mock.json';

describe("useProjects", () => {
  beforeAll(async () => {
    global.fetch = fetch;
    const apiUrl = process.env.REACT_APP_API_URL;
    fetchMock.mock(`${apiUrl}/data`, mock);
  });
  afterAll(() => {
    fetchMock.restore();
  });

  it("should fetch projects", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProjects());
    const hook = () => result.current;
    await waitForNextUpdate();
    expect(hook().projects).toHaveLength(11);
  });

  it("should filter projects", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProjects());
    const hook = () => result.current;
    await waitForNextUpdate();
    act(() => {
      hook().setSearch('production');
    });
    await waitForNextUpdate();
    expect(hook().projects).toHaveLength(4);
  });

  it("should sort by date", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useProjects());
    const hook = () => result.current;
    await waitForNextUpdate();
    act(() => {
      hook().toggleSortByDate();
    });
    expect(hook().sortByDate).toBe(true);
    expect(hook().projects[0]['start date']).toBe('2013-06-14T00:00:00+00:00');
  });
});