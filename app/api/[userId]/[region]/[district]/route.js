// POST REQUEST FOR ADDING STAFF DETAILS TO SPECIFIC DISTRICT OFFICE IN A SPECIFIC REGION
// export const GET = async (req, res) => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "ashanti"));
//     let result = [];

//     querySnapshot.forEach((doc) => {
//       let office = {};

//       if (doc.id == "subin") {
//         office.officeName = doc.id;
//         office.officeData = doc.data();
//         result.push(office);
//       }

//       console.log(`${doc.id} => ${doc.data()}`);
//     });

//     console.log(result);
//     return new Response(JSON.stringify(result), {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response("Failed to fetch resources", { status: 500 });
//   }
// };
// const washingtonRef = doc(db, "cities", "DC");

// // Atomically remove a region from the "regions" array field.
// await updateDoc(washingtonRef, {
//   regions: arrayRemove("east_coast"),
// });

// export const POST = async (request, res) => {
//   const {
//     id,
//     forenames,
//     surname,
//     rank,
//     region,
//     district,
//     email,
//     contact,
//     profilepic,
//   } = await request.json();
//   const docRef = doc(db, region, district.toLowerCase());

//   const staffDetails = {
//     id,
//     forenames,
//     surname,
//     rank,
//     region,
//     district,
//     email,
//     contact,
//     profilepic,
//   };

//   try {
//     // Atomically add a new region to the "regions" array field.
//     await updateDoc(docRef, {
//       staffmembers: arrayUnion(staffDetails),
//     });

//     return new Response("Staff successfully added", {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response("Failed to add staff to the office", { status: 500 });
//   }
// };

// export const DELETE = async (request, res) => {
//   const {
//     id,
//     forenames,
//     surname,
//     rank,
//     region,
//     district,
//     email,
//     contact,
//     profilepic,
//   } = await request.json();
//   const docRef = doc(db, region, district.toLowerCase());

//   const staffDetails = {
//     id,
//     forenames,
//     surname,
//     rank,
//     region,
//     district,
//     email,
//     contact,
//     profilepic,
//   };

//   try {
//     // Atomically add a new region to the "regions" array field.
//     await updateDoc(docRef, {
//       staffmembers: arrayRemove(staffDetails),
//     });

//     return new Response("Staff successfully removed", {
//       status: 200,
//     });
//   } catch (error) {
//     return new Response("Failed to remove staff from the office", {
//       status: 500,
//     });
//   }
// };
