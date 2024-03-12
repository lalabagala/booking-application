import { IUsers } from "../Interfaces/Iusers";
import { IEntity } from "../repository/Interfaces/IEntity";
import { UserEntity, UserRepository } from "../repository/UserRepository";


export class User implements IUsers {
    name: string;
    email: string;
    user_repo: UserRepository
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.user_repo = new UserRepository().getRepositoryInstance();
    }
    addUsers(new_user: UserEntity): IEntity {
        return this.user_repo.create(new_user);
    }
}