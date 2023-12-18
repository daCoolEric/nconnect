import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "@utils/database";

// GET REQUEST FOR ALL DISTRICT OFFICES IN A SPECIFIC REGION
export const GET = async (req, res) => {
  try {
    const querySnapshot = await getDocs(collection(db, "/ashanti"));
    let result = [];

    querySnapshot.forEach((doc) => {
      let office = {};
      office.officeName = doc.id;
      office.officeData = doc.data();
      result.push(office);

      //   console.log(`${doc.id} => ${doc.data()}`);
    });

    console.log(result);
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all district offices", {
      status: 500,
    });
  }
};

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
    return new Response("Failed to create an office", { status: 500 });
    // return new Response(req.body, { status: 500 });
  }
};
