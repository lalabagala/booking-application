import { USER_TYPE } from "../Interfaces/enums";
import { IEntity } from "../repository/Interfaces/IEntity";
import { UserEntity } from "../repository/UserRepository";
import { User } from "./User";

export class Customer extends User {
    addUsers(): IEntity {
        let userEntity = new UserEntity(this.email, this.name, USER_TYPE.DEFAULT)
        return super.addUsers(userEntity)
    }
}