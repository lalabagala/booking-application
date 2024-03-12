import { USER_TYPE } from "../Interfaces/enums";
import { BaseRepository } from "./BaseRepository";
import { IEntity } from "./Interfaces/IEntity";


export class UserEntity implements IEntity {
    name: string;
    email: string;
    user_type: string
    id: number;
    constructor(email: string, name: string, user_type: USER_TYPE) {
        this.email = email;
        this.name = name;
        this.user_type = user_type;
        this.id = 0
    }
    getSerializedData() {
        return {
            "name": this.name,
            "email": this.email,
            "user_type": this.user_type
        }
    }
}


// singleton pattern for repositories
export class UserRepository extends BaseRepository<UserEntity> {
    private static repoObj: UserRepository;
    constructor() {
        super()
    }

    public getRepositoryInstance(): UserRepository {
        if(UserRepository.repoObj) {
            return UserRepository.repoObj
        } else {
            UserRepository.repoObj = new UserRepository()
            return UserRepository.repoObj
        }
    }
}