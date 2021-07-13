import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { CreateOperationDialog } from './components/createOperationDialog';
import { OperationsTable } from './components/operationsTable';
import { operationsService } from './service/operations';
import { IOperation } from './types/IOperation';

function App() {
  const [operations, setOperations] = useState<IOperation[]>([]);

  const updateOperation = (operation: IOperation) => {
    // Can be normalized in future
    setOperations((prev) => {
      return prev.map((operation$) => {
        return operation$.id === operation.id ? operation : operation$;
      });
    });
  };

  const addOperation = (operation: IOperation) =>
    setOperations((prev) => [...prev, operation]);

  const handleCreate = (name: string) => {
    operationsService.createOperation(name, addOperation);
  };

  useEffect(() => {
    operationsService
      .fetchAll(setOperations)
      .then(() => operationsService.subscribeForStatusUpdates(updateOperation));
  }, []);

  return (
    <Container maxWidth="sm">
      <CreateOperationDialog onCreate={handleCreate} />
      <OperationsTable operations={operations} />
    </Container>
  );
}

export default App;
