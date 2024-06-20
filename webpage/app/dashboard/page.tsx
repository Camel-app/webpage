import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import HeaderLoggedOut from "@/components/HeaderLoggedOut";

import Link from "next/link";

export default async function PrivatePage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  console.log("error private page", !data?.user);



  if (error || !data?.user) {
    return redirect("/error");
  }else{
    console.log("email user", data?.user?.email);

    // get data from the database
    const { data: studies } = await supabase.from("studies").select();

    return (
      <main className="w-full max-w-6xl text-xl animate-in">
        {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        <table className="table-auto text-left text-xl mx-auto">
        <thead>
          <tr className="text-2xl">
            <th className="border border-gray-300 px-2 py-2">Name Study</th>
            <th className="border border-gray-300 px-2 py-2">Date of Creation</th>
            <th className="border border-gray-300 px-2 py-2">CAMs collected</th>
            <th className="border border-gray-300 px-2 py-2">Link for Participants</th>
            <th className="border border-gray-300 px-2 py-2">Enter Experiment</th>
          </tr>
        </thead>
        <tbody>
          {studies?.map((study, index) => (
            <tr
              key={study.namestudy}
              className={`hover:bg-gray-500 border-y-4 border-black ${
                index % 2 === 0 ? "bg-gray-200" : "bg-white"
              }`}
            >
              <td className="py-5">{study.creation_date}</td>
              <td>{"Placeholder" + index}</td>
              <td>{"Placeholder" + index}</td>
              <td>
                {" "}
                <Link
                  href={"/expermiment?id=" + index}
                  className="px-1 text-blue-500 hover:underline"
                >
                  Enter Experiment
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </main>
    );
  }
}
