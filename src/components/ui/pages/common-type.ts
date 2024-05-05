import { Dispatch, SetStateAction, SyntheticEvent } from 'react';

// Props type for the PageUI component
export type PageUIProps = {
  errorText: string | undefined; // Error message text
  email: string; // Email value
  setEmail: Dispatch<SetStateAction<string>>; // Setter function for email value
  handleSubmit: (e: SyntheticEvent) => void; // Form submission handler
};
