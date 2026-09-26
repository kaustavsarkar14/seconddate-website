// Firebase web config (safe to ship in client code; access is controlled by Firestore security rules)
const firebaseConfig = {
  apiKey: "AIzaSyDLDPOLLwleJ6xhtfFjxGYOZgQ-AdIgLvs",
  authDomain: "bongdate-a2dbb.firebaseapp.com",
  projectId: "bongdate-a2dbb",
  storageBucket: "bongdate-a2dbb.firebasestorage.app",
  messagingSenderId: "994915858826",
  appId: "1:994915858826:web:532938d1b218c018a37073",
  measurementId: "G-GXFSNW2D14",
};

// Loaded on demand so the Firebase SDK isn't part of the initial page bundle
let dbPromise;
const getDb = () => {
  if (!dbPromise) {
    dbPromise = Promise.all([import("firebase/app"), import("firebase/firestore")]).then(
      ([{ initializeApp, getApps }, { getFirestore }]) =>
        getFirestore(getApps()[0] ?? initializeApp(firebaseConfig))
    );
  }
  return dbPromise;
};

const TIMEOUT_MS = 12000;

/**
 * Saves an iOS pre-registration: iosPreRegistration/{autoId} = { name, email, createdAt }.
 * Firestore resolves writes only after the server acknowledges them (it would wait forever
 * while offline), so this rejects after TIMEOUT_MS instead of leaving the form spinning.
 */
export async function savePreRegistration({ name, email }) {
  const db = await getDb();
  const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");

  const write = addDoc(collection(db, "iosPreRegistration"), {
    name,
    email,
    createdAt: serverTimestamp(),
  });
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("timeout")), TIMEOUT_MS)
  );
  return Promise.race([write, timeout]);
}
