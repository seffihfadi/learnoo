import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"


export default function CourseLearners() {
  return (
    <section>
      <h1 className="text-3xl my-8">Learners <span className="text-xl">(JavaScript Programing and React Full Course)</span></h1>

      <Table className="">
        <TableHeader >
          <TableRow>
            <TableHead>Learner</TableHead>
            <TableHead>Lecture</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead>Questions</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Review</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="p-5">
            <TableCell>
              <div className="flex items-center">
                <div className="rounded-full w-8 h-8 overflow-hidden flex-shrink-0">
                  <Image className="w-full h-full object-cover" width={50} height={50} src="/imgs/learn (5).jpg" alt="" />
                </div>
                <p className="font-semibold text-sm mx-2">Seffih Fadi</p>
              </div>
            </TableCell>
            <TableCell>#12</TableCell>
            <TableCell>88%</TableCell>
            <TableCell><span className="text-red-500 font-semibold">(1)</span></TableCell>
            <TableCell>learning</TableCell>
            <TableCell className="text-right">--</TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </section>
  )
}
