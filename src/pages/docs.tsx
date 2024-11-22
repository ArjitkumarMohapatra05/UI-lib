import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";

export default function DocsPage() {
  return (
    <DefaultLayout>
      
        <div className=" max-w-full text-center jstify-center">
        <Table aria-label="Example empty table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>Gender</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
    </Table>
        </div>
      
    </DefaultLayout>
  );
}
