import { NextResponse } from "next/server";

import prisma from "@/app/lib/prisma";

//FOR CHANGE BIGINT TYPE OF CREATEDAT TO NUMBER
function serializeBigInt(obj: unknown) {
  return JSON.parse(
    JSON.stringify(obj, (_, value) =>
      typeof value === "bigint" ? Number(value) : value,
    ),
  );
}
export async function GET() {
  try {
    const data = await prisma.project.findMany();

    if (!data) {
      throw new Error("Database connection not established");
    }

    const safeData = serializeBigInt(data);

    return NextResponse.json({
      success: true,
      safeData,
      count: safeData.length,
    });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch projects",
        message:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}
