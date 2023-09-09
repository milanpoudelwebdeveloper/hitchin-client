import AccountProfile from "@/components/forms/AccountProfile";
import { useUser } from "@clerk/nextjs";

const Onboarding = () => {
  const { user, isLoaded } = useUser();

  const userInfo = {};
  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName + " " + user?.lastName,
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <main className="flex flex-col justify-start max-w-3xl px-10 py-20 mx-auto">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now to use Threads
      </p>
      <section className="p-10 mt-9 bg-dark-2">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
};

export default Onboarding;
