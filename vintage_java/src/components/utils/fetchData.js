import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";

const fetchDailySales = async (date) => {
  try {
    const db = getFirestore();
    const ordersCollection = collection(db, "data");

    // Create start of day and end of day timestamps
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Construct the query
    const q = query(
      ordersCollection,
      where("timestamp", ">=", startOfDay.toISOString()),
      where("timestamp", "<=", endOfDay.toISOString())
    );

    // Execute the query
    const querySnapshot = await getDocs(q);
    const salesData = querySnapshot.docs.map((doc) => doc.data());

    return salesData;
  } catch (error) {
    console.error("Error fetching daily sales:", error);
    throw error;
  }
};

export default fetchDailySales;
