'use client'
import {data2} from "@/data2"
import { useState, useEffect } from "react"

export default function SecondTable() {
    const [xdata, setxData] = useState([data2])

    useEffect(() => {
        setxData(data2);
    }, []);
    
    return (
        <div className="overflow-x-auto hidden-scrollx-sidebar">
            <div className="min-w-full inline-block">
                <table className="min-w-full">
                <thead>
                    <tr className="text-left text-xs bg-neutral-100">
                        <th scope="col" className="px-4 py-3 font-semibold">Order ID</th>
                        <th scope="col" className="px-4 py-3 font-semibold text-right">Amount</th>
                    </tr>
                </thead>
                <tbody className="">

                {xdata.map((x) => (
                <tr key={String(x.id)} className="border-t border-neutral-300">
                    <td className="px-4 py-4 whitespace-nowrap text-xs">
                        <div className="flex items-center gap-x-2">
                            <div className="">
                                <p className="font-semibold">PO{x.up1}</p>
                                <p className="xss text-graytext">{x.down1}</p>
                            </div>
                        </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-xs">
                        <div className="flex items-center gap-x-2">
                            <div className="flex-grow text-right">
                                <p className="font-semibold">${(Number(x.up2).toFixed(2))}</p>
                                <p className="xss text-graytext">Overdue by {x.down2} days</p>
                            </div>
                        </div>
                    </td>    
                </tr>                                 
                ))} 
                    
                </tbody>
                </table>
            </div>
        </div>
    )
}