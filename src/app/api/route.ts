import { hello } from "@callumtest/edge-light-test-package";
import { NextResponse, type NextRequest } from "next/server.js";

export const runtime = "edge";

export async function GET(request: NextRequest): Promise<NextResponse<any>> {
  hello();
  return NextResponse.json({ hello: 1 });
}
