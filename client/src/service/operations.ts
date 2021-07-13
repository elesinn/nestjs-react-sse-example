import { IOperation } from '../types/IOperation';

const API_URL = 'http://localhost:3001';

const fetchAll = (callback: (operations: IOperation[]) => void) => {
  return fetch(`${API_URL}/operations`)
    .then((response) => response.json())
    .then(callback);
};

const createOperation = (
  name: string,
  callback: (operation: IOperation) => void,
) => {
  fetch(`${API_URL}/operations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => response.json())
    .then(callback);
};

//Subscribe for sse updates
const subscribeForStatusUpdates = (
  callback: (operation: IOperation) => void,
) => {
  const sse = new EventSource(`${API_URL}/sse`, {
    withCredentials: false,
  });

  sse.onmessage = ({ data }) => {
    callback(JSON.parse(data));
  };
  sse.onerror = () => {
    // error log here
    sse.close();
  };
  return () => {
    sse.close();
  };
};

export const operationsService = {
  fetchAll,
  subscribeForStatusUpdates,
  createOperation,
};
