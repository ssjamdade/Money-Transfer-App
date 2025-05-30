import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const SendMoney = () => {
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")
    const name = searchParams.get("name")
    const [amount, setAmount] = useState(0)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const apiUrl = import.meta.env.VITE_API_URL

    const sendTransfer = async () => {
        setLoading(true)
        try {
            const res = await axios.post(`${apiUrl}/api/v1/account/transfer`, {
                to: id,
                amount: amount
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            alert(res.data.message)
            navigate("/dashboard")
        }
        catch (err) {
            if (err.response.status === 400) {
                alert("Bad request")
            } else if (err.response.status === 401) {
                alert("Invalid credentials")
            } else if (err.response.status === 403) {
                alert("Insufficient balance")
            } else {
                alert("Something went wrong")
            }
            navigate("/dashboard")
        }
        finally {
            setLoading(false)
        }

    }

    return <div className="flex justify-center h-screen bg-gray-100">
        <div className="h-full flex flex-col justify-center">
            <div
                className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg"
            >
                <div className="flex flex-col space-y-1.5 p-6 mb-2">
                    <h2 className="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                            <span className="text-2xl text-white">{name[0]}</span>
                        </div>
                        <h3 className="text-2xl font-semibold">{name}</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="amount"
                            >
                                Amount (in Rs)
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="amount"
                                placeholder="Enter amount"
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <button
                            onClick={sendTransfer}
                            disabled={loading}
                            className={`justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full ${loading
                                    ? "bg-green-300 cursor-not-allowed"
                                    : "bg-green-500 hover:bg-green-600"
                                } text-white`}
                        >
                            {loading ? "Processing..." : "Initiate Transfer"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SendMoney
