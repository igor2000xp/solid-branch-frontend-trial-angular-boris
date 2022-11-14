export interface IDatum {
  _id: string;
  amount: string;
  type: 'income' | 'outcome' | 'loan' | 'investment';
  name: { last: string; first: string };
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface IDataMock {
  total: number;
  data: IDatum[];
}
