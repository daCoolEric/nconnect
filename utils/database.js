// "use client";
// // Import the functions you need from the SDKs you need
// import { getApp, getApps, initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import "firebase/firestore";
// import "dotenv/config";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signOut,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { useEffect, useState } from "react";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// // Initialize Firebase
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// export const db = getFirestore(app);

// export const auth = getAuth(app);

// // Initialize Cloud Storage and get a reference to the service
// export const storage = getStorage(app);

// //signOut function
// export const logout = () => {
//   return signOut(auth);
// };

// // signUp function
// export const signUp = (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// //login function
// export function login(email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }

// //Custom Hook
// export const useAuth = () => {
//   const [currentUser, setCurrentUser] = useState();

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
//     return unsub;
//   }, []);

//   return currentUser;
// };

import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to database");
  } finally {
  }
};

export const createUser = async (pin, email, password, role) => {
  try {
    const response = await axios.post("http://localhost:3000/api/signUp", {
      pin,
      email,
      password,
      role,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  // try {
  //   const response = await axios.post("http://localhost:3000/api/login", {
  //     email,
  //     password,
  //   });
  //   console.log(response);
  //   return;
  // } catch (error) {
  //   console.log(error);
  // }
  try {
    await prisma.$connect();
    if (!email || !password) {
      throw new Error("Invalid credentials");
    }

    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email,
      },
    });

    if (!user || !user?.hashedPassword) {
      throw new Error("Invalid credentials");
    }

    const isCorrectPassword = await bcrypt.compare(
      credentials.password,
      user.hashedPassword
    );

    if (!isCorrectPassword) {
      throw new Error("Invalid credentials");
    }

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
