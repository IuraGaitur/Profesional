export const REQUIRED = 'required';
export const EMAIL = 'email';
export const CONFIRMATION = 'confirmation';
export const STRONG_PASS = 'strong_pass';

export const validationRequired = {name: REQUIRED, error: 'Required'};
export const validationEmail = {name: EMAIL, error: 'Not valid email'};
export const validationEmailConfirm = {name: CONFIRMATION, error: 'Emails are not the same'};
export const validationStrongPass = {name: STRONG_PASS, error: 'Not valid password'};
export const validationPassConfirm = {name: CONFIRMATION, error: 'Passwords are not the same'};