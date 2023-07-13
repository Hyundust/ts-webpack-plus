import { User } from "entyes/User"

export interface Comment {
    id: string;
    user: User;
    text: string;
}
