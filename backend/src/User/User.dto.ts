export class UserDto {
    id
    email
    isActivated
    role
    constructor(model: any) {
        this.id = model.id
        this.email = model.email
        this.isActivated = model.isActivated
        this.role = model.role
    }
}