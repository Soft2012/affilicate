import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ReferralType {
  id: String;
  amount: Number;
  affiliate: String;
  reference: String;
  description: String;
  type: String;
  date: Date;
  actions: String;
  status: Boolean;
}

export default function ReferralTable({ data }: { data: ReferralType[] }) {
  return (
    <Table className="rounded-md overflow-hidden">
      <TableHeader className="bg-gray-50 shadow-md">
        <TableRow>
          <TableHead>Referral ID</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Affiliate</TableHead>
          <TableHead>Referrals</TableHead>
          <TableHead>Generated by</TableHead>
          <TableHead>Referral method</TableHead>
          <TableHead>Referral account</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row: ReferralType, i: number) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{row.id}</TableCell>
            <TableCell>{row.amount.toString()}</TableCell>
            <TableCell>{row.affiliate}</TableCell>
            <TableCell>{row.reference}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell>{row.date.toISOString().slice(0, 10)}</TableCell>
            <TableCell>{row.actions}</TableCell>
            <TableCell>{row.status ? "Active" : "Deactivate"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
