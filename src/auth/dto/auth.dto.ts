import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

// here we are using pipes that's why we are using class instead of interface.
// Defines a class named AuthDto (short for Authentication Data Transfer Object). In NestJS, DTOs are typically used to define the structure and validation rules for incoming data.
export class AuthDto {
  // class validator 
  @IsEmail()  // Ensures the email property is a valid email address.
  @IsNotEmpty()  // Ensures the email property is not empty.
  email: string; // Ensure that email is a string

  @IsString()   // Ensures the password property is a string 
  @IsNotEmpty() // Ensures the password property is not empty
  password: string;  // Declares the password property as a string type.
}
