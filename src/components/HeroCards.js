import HeroCard from "./HeroCard";

const dummyUsers = [
  {
    name: "Aanya",
    age: 24,
    gender: "Female",
    religion: "Hindu",
    swipes: 128,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    interests: ["🎧 Music", "☕ Coffee", "✈️ Travel"],
  },
  {
    name: "Rohan",
    age: 26,
    gender: "Male",
    religion: "Hindu",
    swipes: 94,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    interests: ["🏋️ Gym", "🎮 Gaming", "🍔 Food"],
  },
  {
    name: "Meera",
    age: 23,
    gender: "Female",
    religion: "Christian",
    swipes: 142,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    interests: ["📸 Photography", "🌿 Nature"],
  },
];

const HeroCards = () => {
  return (
    <div
      style={{
        position: "relative",
        width: 260, // 👈 CHANGE THIS (was 340)
        height: 480,
      }}
    >
      {dummyUsers.map((user, i) => (
        <HeroCard key={i} user={user} index={i} />
      ))}
    </div>
  );
};

export default HeroCards;
