import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();

    // Adding the access key from environment variables
    const web3formsData = {
      access_key: process.env.WEB3FORMS_ACCESS_KEY,
      ...body,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(web3formsData),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      console.error("Web3Forms API Error:", result);
      return NextResponse.json(
        { success: false, message: result.message || "Failed to submit form" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error connecting to Web3Forms" },
      { status: 500 }
    );
  }
}
