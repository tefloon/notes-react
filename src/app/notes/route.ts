import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

const notes = [
  {
    id: 1,
    title: "pierwszaab note",
    body: "Siema 0 Cillum ex labore sunt do nulla elit amet eiusmod commodo exercitation magna nulla consequat in. Pariatur cupidatat velit qui excepteur minim do Lorem anim ea cupidatat fugiat do adipisicing occaecat. Eiusmod voluptate do officia ut officia sit ea ipsum culpa. Consectetur amet ipsum dolore tempor sint sint ex et deserunt ex velit cupidatat nisi sint. Id cupidatat cupidatat magna mollit nostrud commodo excepteur anim non officia adipisicing nulla ex officia. Culpa labore dolor pariatur adipisicing.",
  },
  {
    id: 2,
    title: "Second note",
    body: "Siema 1 Cillum ex labore sunt do nulla elit amet eiusmod commodo exercitation magna nulla consequat in. Pariatur cupidatat velit qui excepteur minim do Lorem anim ea cupidatat fugiat do adipisicing occaecat. Eiusmod voluptate do officia ut officia sit ea ipsum culpa. Consectetur amet ipsum dolore tempor sint sint ex et deserunt ex velit cupidatat nisi sint. Id cupidatat cupidatat magna mollit nostrud commodo excepteur anim non officia adipisicing nulla ex officia. Culpa labore dolor pariatur adipisicing.",
  },
];

// Handles GET requests to /api/notes
export async function GET() {
  return NextResponse.json(notes);
}
