'use client'
import React, { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import TextField from '@mui/material/TextField';
import EmergencyIcon from '@mui/icons-material/Emergency';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece]

interface Invoice {
    name: string;
    date: Date;
    status: string;
    invNumber: string;
    amount: number;
}

export default function Form() {
    const [isEditInvoice, setEditInvoice] = useState(false);
    const [name, setName] = useState('');
    const [date, setDate] = useState<Value>();
    const [status, setStatus] = useState('');
    const [invNumber, setInvNumber] = useState('');
    const [amount, setAmount] = useState(0);
    const [statusRequest, setStatusRequest] = useState(false);
    const [statusRequestError, setStatusRequestError] = useState(false);

    const handleChangeStatus = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    }

    const handleSubmitInvoice = async (e: any) => {
        e.preventDefault();

        // if (!date) {
        //     console.error("Error: Date is undefined");
        //     return;
        // }

        if (!name || !date || !status || !invNumber || amount === null || amount === undefined) {
            console.error("Error: Missing required fields");
            setStatusRequestError(true);

            setTimeout(() => {
                setStatusRequestError(false);
            }, 5000);
            return;
        }

        let formatDate: string;

        if (date instanceof Date) {
            formatDate = date.toISOString();
        } else if (Array.isArray(date) && date[0] instanceof Date) {
            formatDate = date[0].toISOString();
        } else {
            console.error("Invalid date format:", date);
            return;
        }

        const newInvoice: Invoice = {
            name,
            date: new Date(formatDate),
            status,
            invNumber,
            amount,
        };

        const method = isEditInvoice ? "PATCH" : "POST";
        try {
            const response = await fetch('/api/invoice', {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newInvoice)
            });

            if (!response.ok) throw new Error("Failed to submit invoice");
            setStatusRequest(true);

            setTimeout(() => {
                setStatusRequest(false);
            }, 5000);
        } catch (error) {
            console.error("Error submitting invoice:", error);
            setStatusRequestError(true)
            setTimeout(() => {
                setStatusRequestError(false);
            }, 5000);
        }
    }
    return (
        <div>
            <h2 className='pb-[38px] text-[26px] font-semibold w-full max-w-[1024px] mx-auto text-left'>
                Add Invoice
            </h2>
            <div className='bg-white w-full max-w-[1024px] mx-auto border border-[#E2E8F0]'>
                <h3 className='font-semibold gap-1 w-full px-[26px] py-[15px] border-b border-b-[#E2E8F0]'>Invoice Form</h3>
                <form onSubmit={handleSubmitInvoice} className='px-[26px] py-[15px]'>
                    <div className='flex flex-row flex-wrap justify-between items-start gap-x-[35px] gap-y-[18px]'>
                        <label className='font-semibold gap-1 flex flex-row flex-wrap content-center items-center w-full lg:max-w-[47%]'>
                            Name <span className='my-auto'>
                                <EmergencyIcon sx={{ fontSize: 8, color: "#f22f31" }} />
                            </span>
                            <TextField onChange={(e) => setName(e.target.value)} placeholder='Enter your invoice name' type="text" className='w-full border border-inputBorderColor rounded-md mt-[12px]' id="inv-name" label="" variant="outlined" />
                        </label>

                        <label className='font-semibold gap-1 flex flex-row flex-wrap content-center items-center w-full lg:max-w-[47%]'>
                            Number <span className='my-auto'>
                                <EmergencyIcon sx={{ fontSize: 8, color: "#f22f31" }} />
                            </span>
                            <TextField onChange={(e) => setInvNumber(e.target.value)} placeholder='Enter your invoice number' type="number" className='w-full border border-inputBorderColor rounded-md mt-[12px]' id="inv-number" label="" variant="outlined" />
                        </label>

                        <label className='font-semibold gap-1 flex flex-row flex-wrap content-center items-center w-full lg:max-w-[47%]'>
                            Due Date <span className='my-auto'>
                                <EmergencyIcon sx={{ fontSize: 8, color: "#f22f31" }} />
                            </span>
                            <DatePicker format='dd/MM/yyyy' dayPlaceholder="DD" monthPlaceholder="MM" yearPlaceholder="YYYY" className="w-full mt-[12px]" onChange={setDate} value={date} />
                        </label>

                        <label className='font-semibold gap-1 amount-input flex flex-row flex-wrap content-center items-center w-full lg:max-w-[47%]'>
                            Amount <span className='my-auto'>
                                <EmergencyIcon sx={{ fontSize: 8, color: "#f22f31" }} />
                            </span>
                            <TextField onChange={(e) => setAmount(Number(e.target.value))} placeholder='Enter your invoice amount' type="number" className='w-full border border-inputBorderColor rounded-md mt-[12px]' id="inv-amount" label="" variant="outlined" />
                        </label>

                        <div className='flex flex-row flex-wrap content-center items-center w-full lg:max-w-[47%]'>
                            <label htmlFor="status" className='font-semibold gap-1 my-auto'>Status <span className='my-auto'>
                                <EmergencyIcon sx={{ fontSize: 8, color: "#f22f31" }} /></span></label>
                            <FormControl className='w-full mt-[12px] add-invoice_status' sx={{ m: 0, minWidth: 120 }}>
                                <Select
                                    value={status}
                                    onChange={handleChangeStatus}
                                    displayEmpty
                                    className='pl-[10px] h-[50px]'
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    IconComponent={KeyboardArrowDownIcon}
                                >
                                    <MenuItem className='' style={{ fontSize: '12px' }} disabled value="">
                                        <em className='opacity-50'>Choose the status</em>
                                    </MenuItem>
                                    <MenuItem className='' style={{ fontSize: '12px' }} value={"paid"}>Paid</MenuItem>
                                    <MenuItem className='' style={{ fontSize: '12px' }} value={"unpaid"}>Unpaid</MenuItem>
                                    <MenuItem className='' style={{ fontSize: '12px' }} value={"pending"}>Pending</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <Button loading={statusRequest || statusRequestError ? true : false} loadingPosition="end" type='submit' className='bg-buttonPrimaryColor px-[78px] py-[13px] mt-[58px] mb-[36px] ml-auto mr-0 my-auto flex justify-end font-semibold capitalize' variant="contained" startIcon={<AddIcon />}>Add Invoice</Button>

                </form>
            </div>

            {statusRequest || statusRequestError ?
                <div className='w-full max-w-[1024px] mx-auto px-0 py-16'>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        {statusRequest ?
                            <Alert className='success-alert relative' severity="success">
                                <AlertTitle>Success</AlertTitle>
                                You can view and manage your invoice in the 'My Invoices' section.
                            </Alert>
                            : <></>
                        }
                        {statusRequestError ?
                            <Alert className='warning-alert relative' severity="error">
                                <AlertTitle>Failed</AlertTitle>
                                Someting happend while add new invoice
                            </Alert>
                            : <></>
                        }
                    </Stack>
                </div> 
             : <></>
            }
        </div>
    )
}
