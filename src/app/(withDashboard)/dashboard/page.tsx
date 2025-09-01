import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
     { session?.user &&
      <div className="mx-auto">
        <Image
          className="mx-auto mt-4 bg-gradient-to-r from-red-400 to-blue-300  p-1 rounded-lg"
          src={session?.user?.image as string}
          alt="image"
          height={200}
          width={200}
        />
        <h1 className="text-4xl text-center mt-10">
          Welcome {session?.user?.name}
          <br />
          Logged-in user email: {session?.user?.email}
        </h1>
      </div>
}
    </>
  );
};

export default DashboardPage;
