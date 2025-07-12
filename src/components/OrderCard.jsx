import { CardData } from "./CardData"

export const OrderCard = ()=>{
    return (
    <div className="bg-white rounded shadow-md p-4 m-6">
        <div className="flex justify-between items-center">
            <div>
                <input type="text" placeholder ="Order ID or Transaction ID" 
                className="p-2 w-80 border-2 border-gray-200 border-solid ml-6 rounded-lg"></input>
                </div>
                <div className="flex justify-right">
                    <div className="flex justify-between border-2 border-gray-200 border-solid rounded-lg pl-2 pr-2 mr-6 text-lg">
                        
                        <button className="flex p-2 ">Sort
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
</svg>

                        </button>
                    </div>
                    <div className="hidden md:block">
                        <button className=" border-2 border-gray-200 border-solid rounded-lg  p-2 text-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>

                        </button>
                    </div>
                </div>
        </div>
      <div className="overflow-x-auto mt-4">  
        <div className="min-w-[800px]">
            <div className= "flex justify-between mt-4 bg-gray-200 p-2 rounded-lg">
                <div className="text-lg font-medium ">Order ID</div>
                <div className="text-lg font-medium ">Status</div>
                <div className="text-lg font-medium ">Transaction ID</div>
                <div className="text-lg font-medium ">Refund Date</div>
                <div className="text-lg font-medium ">Order Amount</div>   
            </div>
        <div className="flex flex-col justify-around mt-2">
            <CardData orderId={"#2812091"} status={"Successful"} transactionId={"TRX123456"} refundDate={"Tomorrow,8.45 PM"} orderAmount={"₹1125.00"} ></CardData>
            <CardData orderId={"#2812092"} status={"Processing"} transactionId={"TRX123457"} refundDate={"Today,9.00 PM"} orderAmount={"₹1500.00"} ></CardData>
            <CardData orderId={"#2812093"} status={"Processing"} transactionId={"TRX123458"} refundDate={"Yesterday,7.30 PM"} orderAmount={"₹800.00"} ></CardData>
            <CardData orderId={"#2812094"} status={"Successful"} transactionId={"TRX123459"} refundDate={"Tomorrow,10.00 AM"} orderAmount={"₹2000.00"} ></CardData>
            <CardData orderId={"#2812095"} status={"Processing"} transactionId={"TRX123460"} refundDate={"Today,11.00 AM"} orderAmount={"₹1750.00"} ></CardData>
            <CardData orderId={"#2812096"} status={"Successful"} transactionId={"TRX123461"} refundDate={"Yesterday,6.00 PM"} orderAmount={"₹950.00"} ></CardData>
            <CardData orderId={"#2812097"} status={"Successful"} transactionId={"TRX123462"} refundDate={"Tomorrow,9.30 AM"} orderAmount={"₹1200.00"} ></CardData>
            <CardData orderId={"#2812098"} status={"Processing"} transactionId={"TRX123463"} refundDate={"Today,8.15 PM"} orderAmount={"₹1350.00"} ></CardData>
            <CardData orderId={"#2812099"} status={"Successful"} transactionId={"TRX123464"} refundDate={"Yesterday,5.45 PM"} orderAmount={"₹1100.00"} ></CardData>
            <CardData orderId={"#2812100"} status={"Processing"} transactionId={"TRX123465"} refundDate={"Tomorrow,10.30 AM"} orderAmount={"₹1600.00"} ></CardData>
            <CardData orderId={"#2812101"} status={"Successful"} transactionId={"TRX123466"} refundDate={"Today,9.15 PM"} orderAmount={"₹1400.00"} ></CardData>
            <CardData orderId={"#2812102"} status={"Processing"} transactionId={"TRX123467"} refundDate={"Yesterday,8.00 PM"} orderAmount={"₹1250.00"} ></CardData>
            <CardData orderId={"#2812103"} status={"Successful"} transactionId={"TRX123468"} refundDate={"Tomorrow,11.00 AM"} orderAmount={"₹1800.00"} ></CardData>
                </div>
            </div>
        </div>
      </div>
    )
}