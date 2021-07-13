enum OperationStatus {
  IN_PROGRESS = 'In Progress',
  DONE = 'Done',
  FAILED = 'Failed',
}

export interface IOperation {
  id: number;
  name: string;
  status: OperationStatus;
}
