import { NextResponse } from "next/server";
import { prisma } from "@/utils/db";
import { error } from "console";

export async function GET(){
    try{
        const invoices = await prisma.invoice.findMany();
        return NextResponse.json(invoices, {status: 200});
    }catch(err: any){
        return NextResponse.json({error: err.message },{status: 500});
    }
}

export async function POST(req: Request){
    try{
    const body = await req.json();
    const addInvoice = await prisma.invoice.create({
        data: {
            name :  body.name,
            dueDate :  body.date,
            status:  body.status,
            invNumber: `inv-${body.invNumber}`,
            amount: body.amount,
        }
    });

    return NextResponse.json(addInvoice, {status: 200});
    }catch(err: any){
        return NextResponse.json({error: err.message},{status: 500})
    }
}

export async function PATCH(req: Request) {
    try {
      const body = await req.json();
      const { id, name, date, status, amount } = body;
  
      const updatedInvoice = await prisma.invoice.update({
        where: { id },
        data: {
            name :  name,
            dueDate :  date,
            status:  status,
            amount: amount,
        }
      });
  
      return NextResponse.json(updatedInvoice, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  
  export async function DELETE(req: Request) {
    try {
      const body = await req.json();
      const { id } = body;
  
      await prisma.invoice.delete({
        where: { invNumber: id }, // Ensure it matches the correct column
      });
  
      return NextResponse.json({ message: "Invoice deleted" }, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  