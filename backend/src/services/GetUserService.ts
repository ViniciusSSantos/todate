import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IGetUserRequest {
    email: string;
    password: string;
  }

  class GetUserService{
    async execute({ email, password }: IGetUserRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        // Verificar se email existe
        const user = await usersRepositories.findOne({
          email,
        });

        if (!user) {
            throw new Error("Email/Password incorrect");
          }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
          }

          return user;
      
    }


  }

  export {GetUserService}