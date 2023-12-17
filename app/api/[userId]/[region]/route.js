import { doc, setDoc } from "firebase/firestore";
import { db } from "@utils/database";

// POST REQUEST FOR CREATING AN OFFICE
export const POST = async (request, res) => {
  const {
    districtname,
    location,
    address,
    staffCapacity,
    officeContact,
    staffMembers,
  } = await request.json();
  const docRef = doc(db, "ashanti", districtname.toLowerCase());

  const data = {
    districtname,
    location,
    address,
    staffCapacity,
    officeContact,
    staffMembers,
  };

  try {
    await setDoc(docRef, data, { capital: true }, { merge: true });

    return new Response("Office successfully created", {
      status: 200,
    });
  } catch (error) {
    // return new Response("Failed to create an office", { status: 500 });
    return new Response(req.body, { status: 500 });
  }
};
