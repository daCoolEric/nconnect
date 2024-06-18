import { prisma } from "@prisma";
export const getVerificationTokenByEmail = async (email) => {
    
    try {
        const verificationToken = await prisma.verificationtoken.findFirst({
          where: {
              email: email
          }
      })
  
      return verificationToken;
    } catch (error) {
      console.log(error);
    }
  
  }
  
  export const getVerificationTokenByToken = async (token) => {
    try {
      const verificationToken = await prisma.verificationtoken.findFirst({
          where: {
              token: token
          }
      })
  
      return verificationToken;
    } catch (error) {
      console.log(error);
    }
  
  }