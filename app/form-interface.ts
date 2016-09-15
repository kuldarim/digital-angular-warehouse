export class FormInterface
{
    name: string; //minimum 5 chars
    address:
    {
        street: string;
        number: string;
        post: string;
    }
    email: string;
    password: string;
    password2: string; //passwords must match
}