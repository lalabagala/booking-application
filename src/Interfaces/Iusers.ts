import { IEntity } from "../repository/Interfaces/IEntity"
import { UserEntity } from "../repository/UserRepository"

export interface IUsers {
    name: string
    email: string
    addUsers(newUser: UserEntity): IEntity
}