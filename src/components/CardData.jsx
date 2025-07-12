export const CardData = ({
    orderId,
    status,
    transactionId, 
    refundDate,
    orderAmount
}) => {
    return (
        <div className="grid grid-cols-10  mt-2 p-2 rounded-lg">

            <div className="text-blue-900 col-span-2">{orderId}</div>

            {status === "Successful" ? (
                    <div className=" flex col-span-2 ">
                <div className="rounded-full bg-green-500 w-3 h-3 m-2"></div>
                <div>{status}</div>
                </div>
                ):(<div className=" flex  col-span-2">
                    <div className="rounded-full bg-gray-400 w-3 h-3 m-2"></div>
                <div>{status}</div>
                </div>)} 

            <div className="col-span-2  ">{transactionId}</div>
            <div className="col-span-3 ">{refundDate}</div>
            <div className="col-span-1 ">{orderAmount}</div>

        </div>
    )
}