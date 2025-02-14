'use client'
import React, { useEffect, useMemo, useState } from 'react'
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AlertTitle from '@mui/material/AlertTitle';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { string } from 'zod';

interface Invioce {
  name: string;
  date: Date;
  status: string;
  invNumber: string;
  amount: number;
}

export default function Table() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [invoices, setInvoices] = useState<Invioce[]>([]);
  const [isAction, setAction] = useState(false);
  const [isDeleteSubmit, setDeleteSubmit] = useState(false);
      const [requestDeleteFailed, setRequestDeleteFailed] = useState(false);
      const [requestDeleteSuccess, setRequestDeleteSuccess] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  }

  const formatDateEn = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: "numeric"
    }).format(date);
  }

  const formatToIDR = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this invoice?");
    if (!confirmed) return;

    try {
      const res = await fetch('/api/invoice', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setInvoices((prev) => prev.filter((invoice) => invoice.invNumber !== id));
        setDeleteSubmit(false);
        setRequestDeleteSuccess(true)

        setTimeout(() => {
          setRequestDeleteSuccess(false);
      }, 5000);
      } else {
        const errorData = await res.json();
        alert(`Error: ${errorData.error}`);
        setDeleteSubmit(false);
        
        setRequestDeleteFailed(true)

        setTimeout(() => {
          setRequestDeleteFailed(false);
      }, 5000);
      }

    } catch (error) {
      setDeleteSubmit(false);
      console.error("Failed to delete invoice:", error);
    }
  };

  useEffect(() => {
    fetch('/api/invoice')
      .then((res) => res.json())
      .then((response) => {
        setInvoices(response)
      })
  }, [])

  const filteredInvoices = useMemo(() => {
    return invoices.filter((invoice) =>
      invoice.name.toLowerCase().includes(search.toLowerCase()) &&
      (status === 'all' || invoice.status === status)
    );
  }, [search, status, invoices]);

  return (
    <div>
      <div className='flex justify-between items-center w-full pb-[38px] max-w-[1024px] mx-auto'>
        <h2 className='text-[26px] font-semibold w-full text-left'>
          Add Invoice
        </h2>
        <div className='grid grid-cols-[216px_auto] w-full max-w-[400px] gap-4 items-center justify-end'>
          <label className='flex flex-row flex-wrap content-center items-center w-full'>
            <TextField
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon className='fill-[#121212]' />
                    </InputAdornment>
                  ),
                },
              }}
              placeholder='Search' type="search" className='bg-white table-navigation rounded-lg w-full' id="table-search" label="" variant="outlined" onChange={(e) => setSearch(String(e.target.value))} />
          </label>

          <div className='table-status-filter w-fit'>
            <FormControl className='rounded-lg table-navigation w-full max-w-fit h-[40px] bg-white' sx={{ m: 0, minWidth: 50 }}>
              <Select
                value={status}
                onChange={handleChange}
                displayEmpty
                defaultValue="all"
                className='pl-[10px] h-[50px]'
                inputProps={{ 'aria-label': 'Without label' }}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem className='opacity-50' style={{ fontSize: '12px' }} value="all">
                  <span className='opacity-50'>All Status</span>
                </MenuItem>
                <MenuItem className='' style={{ fontSize: '12px' }} value="paid">Paid</MenuItem>
                <MenuItem className='' style={{ fontSize: '12px' }} value="unpaid">Unpaid</MenuItem>
                <MenuItem className='' style={{ fontSize: '12px' }} value="pending">Pending</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className='bg-white w-full max-w-[1024px] mx-auto border border-[#E2E8F0] py-[30px] px-[35px]'>
        <div className='grid grid-cols-5 bg-[#F7F9FC] w-full max-w-[920px] mx-auto rounded-md py-[15px] px-[35px]'>
          <p className='font-[600] text-tableHeadingTextColor text-left'>invoice</p>
          <p className='font-[600] text-tableHeadingTextColor text-center'>due date</p>
          <p className='font-[600] text-tableHeadingTextColor text-center'>status</p>
          <p className='font-[600] text-tableHeadingTextColor text-center'>amount</p>
          <p className='font-[600] text-tableHeadingTextColor text-right'>actions</p>
        </div>

        {invoices.length > 0 ?
          filteredInvoices.length > 0 ?
          filteredInvoices.map((item, idx) => (
            <div key={idx} className='grid grid-cols-5 items-center justify-center w-full max-w-[920px] mx-auto py-[15px] px-[35px] border-b border-b-secondaryColor'>
              <div className='text-left'>
                <p className='text-tableHeadingTextColor'>{item.name}</p>
                <p className='text-tableSubHeadingTextColor'>{item.invNumber}</p>
              </div>
              <div className='w-full flex justify-center items-center py-2 px-4'>
                <p className='text-tableHeadingTextColor'>{formatDateEn(item.date)}</p>

              </div>
              <div className='w-full flex justify-center items-center py-2 px-4'>
                <p className={`
                            paid 
                            ${item.status == "unpaid" ? "!bg-[#D3405314] !text-[#D34053]" : ""}
                            ${item.status == "pending" ? "!bg-[#FFA70B14] !text-[#FFA70B]" : ""}
                            `}>{item.status}</p>
              </div>
              <div className='w-full flex justify-center items-center py-2 px-4'>
                <p className='text-tableHeadingTextColor'>{formatToIDR(item.amount)}</p>
              </div>
              <div className='cursor-pointer relative w-full flex justify-end items-center py-2 px-4'>
                <button onClick={() => setAction(true)} type='button'>
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#7E7E7E" />
                  </svg>
                </button>
                {isAction ?
                  <div className='flex justify-center items-center gap-1 absolute top-[-0.25rem] right-[-3.5rem]'>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                      <Button className='text-[12px]' startIcon={<EditIcon />} color="success">Edit</Button>
                      <Button
                        className='text-[12px]'
                        startIcon={<DeleteIcon />}
                        color="error"
                        loadingPosition="end"
                        loading={isDeleteSubmit ? true : false}
                        onClick={() => {
                          handleDelete(item.invNumber)
                          setDeleteSubmit(true)
                        }
                        }>
                        {/* loadingPosition="end" color="error"> */}
                        Delete
                      </Button>
                    </ButtonGroup>
                    <button onClick={() => setAction(false)} type='button' className='text-[12px] font-semibold'>
                      <CloseIcon sx={{ fontSize: 16, color: "#7E7E7E" }} />
                    </button>
                  </div>
                  : <></>}
              </div>
            </div>
          )) 
          : <h2 className='w-full text-center max-w-72 mx-auto font-semibold py-8 px-4'>No invoice record with {status} status and {search}</h2>
          :
          <h2 className='w-full text-center max-w-72 mx-auto font-semibold py-8 px-4'>You don't have any invoice record, please add your Invoice <span><Link className='italic font-semibold underline' href='/invoices/add'>Here</Link></span></h2>
        }
      </div>

      {requestDeleteSuccess ?
                <div className='w-full max-w-[1024px] mx-auto px-0 py-16'>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        {requestDeleteSuccess ?
                            <Alert className='success-alert relative' severity="success">
                                <AlertTitle>Success</AlertTitle>
                                Success Delete request
                            </Alert>
                            : <></>
                        }
                        {requestDeleteFailed ?
                            <Alert className='warning-alert relative' severity="error">
                                <AlertTitle>Failed</AlertTitle>
                                Someting happend while delete invoice
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
