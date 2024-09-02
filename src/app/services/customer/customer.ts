export interface Customer {
  username: string;
  email: string;
  dateOfBirth: Date;
  gender: string;
}

export interface CustomerCreateDto extends Customer {}

export interface CustomerDto extends Customer {}

export function getDummyCustomer() {
  return {
    username: 'Max',
    email: 'max@muster.at',
    dateOfBirth: new Date(2000, 6, 15),
    gender: 'Other',
  };
}
