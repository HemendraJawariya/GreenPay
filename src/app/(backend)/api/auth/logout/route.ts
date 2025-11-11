import { response } from "@/lib/response";

export async function DELETE() {
  try {
    const res = response(200, " Logout successful");

    res.cookies.delete("auth_token");

    return res;
  } catch (error) {
    console.error("Logout error:", error);
    return response(500, "An error occurred during logout");
  }
}
