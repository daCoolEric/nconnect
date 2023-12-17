import { collection, getDocs } from "firebase/firestore";

import { db } from "@utils/database";

// GET REQUEST FOR SPECIFIC DISTRICT IN A SPECIFIC REGION
export const GET = async (req, res) => {
  try {
    const querySnapshot = await getDocs(collection(db, "ashanti"));
    let result = [];

    querySnapshot.forEach((doc) => {
      let office = {};

      if (doc.id == "subin") {
        office.officeName = doc.id;
        office.officeData = doc.data();
        result.push(office);
      }

      console.log(`${doc.id} => ${doc.data()}`);
    });

    console.log(result);
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
