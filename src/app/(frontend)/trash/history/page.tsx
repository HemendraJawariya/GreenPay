"use client";

import Footer from "@/components/Footer";
import RootLayout from "@/components/layouts/RootLayout";
import Pagination from "@/components/Pagination";
import SimpleNavbar from "@/components/SimpleNavbar";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { withAuth } from "@/hoc/withAuth";
import { withSuspense } from "@/hoc/withSuspense";
import { usePagination } from "@/hooks/usePagination";
import { useAuthUser } from "@/stores/auth-store";
import { TrashHistoryData } from "@/types";
import * as React from "react";

export default withAuth(withSuspense(TrashHistoryPage), undefined, [
  "USER",
  "PETUGAS",
]);

function TrashHistoryPage() {
  const { data, pagination, handlePageChange } =
    usePagination<TrashHistoryData>({
      apiEndpoint: "/api/trash/history",
    });

  const user = useAuthUser();

  return (
    <RootLayout
      header={
        <SimpleNavbar
          backTo={
            user?.role === "PETUGAS" ? "/petugas/dashboard" : "/dashboard"
          }
        />
      }
      footer={<Footer />}
    >
      <section className="grid space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">Transaction History</h3>
          <p className="text-muted-foreground text-sm">
            All your waste exchange activities are recorded here. Check the type of waste, the points you&apos;ve earned, and the verification status from the staff.
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>
                  {user?.role === "PETUGAS" ? "User" : "Staff"}
                </TableHead>
                <TableHead>Waste Type</TableHead>
                <TableHead>Weight (Kg)</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data && data.length > 0 ? (
                data.map((tx) => {
                  const totalWeight = tx.items.reduce(
                    (sum, item) => sum + item.weight,
                    0
                  );
                  const totalPoints = tx.items.reduce(
                    (sum, item) => sum + item.points,
                    0
                  );
                  const wasteTypes = tx.items
                    .map((item) => item.trashType)
                    .join(", ");

                  return (
                    <TableRow key={tx.id}>
                      <TableCell>
                        <span className="block max-w-20 truncate overflow-hidden text-ellipsis whitespace-nowrap">
                          {tx.id}
                        </span>
                      </TableCell>
                      <TableCell>
                        {user?.role === "PETUGAS"
                          ? tx.user.name
                          : tx.petugas?.name ?? "-"}
                      </TableCell>
                      <TableCell>{wasteTypes}</TableCell>
                      <TableCell>{totalWeight.toFixed(2)}</TableCell>
                      <TableCell>{totalPoints}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            tx.status === "APPROVED" ? "default" : "destructive"
                          }
                        >
                          {tx.status === "APPROVED" ? "Approved" : "Rejected"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(tx.createdAt).toLocaleString("en-US", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="text-muted-foreground p-6 text-center"
                  >
                    No History Available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-center">
          <Pagination
            currentPage={pagination?.page || 1}
            totalPages={pagination?.totalPages || 1}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </RootLayout>
  );
}
