import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import HeaderLoggedOut from "@/components/HeaderLoggedOut";

import Link from "next/link";

import ButtonDeleteExperiment from "@/components/Buttons/DeleteExperiment";
import ButtonDownloadExperiment from "@/components/Buttons/DownloadExperiment";

export default async function SingleStudy({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  console.log("error private page", !data?.user);

  if (error || !data?.user) {
    return redirect("/error");
  } else {
    // get data from the database for respective study and researcher
    const { data: collectedCAMs } = await supabase
      .from("collectedcams")
      .select()
      .eq("namestudy", params.id);

    var arrayNumConcepts: number[] = [];
    var arrayAvgValence: number[] = [];
    var arrayDateEnd: Date[] = [];
    collectedCAMs?.forEach((element) => {
      arrayNumConcepts.push(element.numconcepts);
      arrayAvgValence.push(element.avgvalence);
      arrayDateEnd.push(element.dateend);
    });

    const average = (arr: any[]) => arr.reduce((p, c) => p + c, 0) / arr.length;

    if (arrayDateEnd.length != 0) {
      // Convert the date strings to Date objects and find the maximum date
      var latestDate = new Date(
        Math.max(...arrayDateEnd.map((date) => new Date(date).getTime()))
      );

      // Convert the latest Date object back to a string if needed
      var latestDateString = latestDate.toISOString();
    } else {
      var latestDateString = "No data available";
    }

    return (
      <main className="w-full max-w-6xl text-xl animate-in">
        {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        <div className="font-bold text-2xl text-center mb-5">{params.id}</div>

        <div className="flex justify-center space-x-5 flex-row mb-5">
          <div className="flex-col flex w-64">
            <p className="font-bold">{collectedCAMs?.length}</p> participants
            have joined your study
          </div>
          <div className="flex-col flex w-64">
            <p className="font-bold">
              {arrayNumConcepts.length > 0
                ? Math.round(average(arrayNumConcepts) * 100) / 100
                : "No data available"}
            </p>{" "}
            concepts on average have been drawn
          </div>
          <div className="flex-col flex w-64">
            <p className="font-bold">
              {arrayAvgValence.length > 0
                ? Math.round(average(arrayAvgValence) * 100) / 100
                : "No data available"}
            </p>{" "}
            is the mean valence of the drawn concepts
          </div>
          <div className="flex-col flex w-64">
            <p className="font-bold">{latestDateString}</p> was the last time
            you collected a CAM
          </div>
        </div>

        <table className="table-auto text-left text-lg mx-auto w-full">
          <thead>
            <tr className="text-lg">
              <th className="border border-gray-300 px-2 py-2">CAM ID</th>
              <th className="border border-gray-300 px-2 py-2">
                Participant ID
              </th>
              <th className="border border-gray-300 px-2 py-2">Date Start</th>
              <th className="border border-gray-300 px-2 py-2">Date End</th>
              <th className="border border-gray-300 px-2 py-2">
                Duration (in min.)
              </th>
              <th className="border border-gray-300 px-2 py-2">
                Number of drawn concepts
              </th>
              <th className="border border-gray-300 px-2 py-2">
                Number of drawn connections
              </th>
              <th className="border border-gray-300 px-2 py-2">
                Average valence
              </th>
              <th className="border border-gray-300 px-2 py-2">Draw CAM</th>
            </tr>
          </thead>
          <tbody>
            {collectedCAMs?.map((study, index) => (
              <tr
                key={study.camid}
                className={`border-y-4 border-black text-sm h-28 ${
                  index % 2 === 0 ? "bg-gray-200" : "bg-white"
                }`}
              >
                <td className="py-5 border border-gray-300 px-5">
                  {study.camid}
                </td>
                <td className="py-5 border border-gray-300 px-5">
                  {study.participantid}
                </td>
                <td className="py-5 border border-gray-300 px-5 text-sm">
                  {study.datestart}
                </td>
                <td className="py-5 border border-gray-300 px-5 text-sm">
                  {study.dateend}
                </td>
                <td className="py-5 border border-gray-300 px-5 text-center text-lg">
                  {" "}
                  {study.datediff}
                </td>
                <td className="py-5 border border-gray-300 px-5 text-center text-lg">
                  {" "}
                  {study.numconcepts}
                </td>
                <td className="py-5 border border-gray-300 text-center text-lg">
                  {" "}
                  {study.numconnectors}
                </td>
                <td
                  className={`py-5 border border-gray-300 text-center text-lg ${
                    study.avgvalence > 0
                      ? "text-green-500"
                      : study.avgvalence < 0
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {study.avgvalence}
                </td>
                <td className="py-2 border border-gray-300">
                  <Link
                    href={
                      "https://camgalaxy.github.io/?ShowResearcherButtons=true&link=https://camadministrative.vercel.app/api/drawstudy?study=" +
                      params.id +
                      "&participantID=" +
                      study.camid
                    }
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    <button className="px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-900">
                      draw CAM
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center space-x-5 flex-row mt-5">
          <div>
            {" "}
            <ButtonDeleteExperiment />
          </div>
          <div>
            {" "}
            <ButtonDownloadExperiment
              data={collectedCAMs}
              namestudy={params.id}
            />
          </div>
        </div>
      </main>
    );
  }
}
