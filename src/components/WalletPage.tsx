import { useState } from "react";
import { ArrowLeft, FileText, ShoppingCart, CreditCard, X, Plus, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import cashIcon from './assets/cash-back.png';


const WalletPage = () => {
  const [activeTab, setActiveTab] = useState<"recharge" | "withdraw">("recharge");
  const [selectedAmount, setSelectedAmount] = useState<number>(200);
  const [selectedMethod, setSelectedMethod] = useState<string>("Fpay");
  const [isBindBankOpen, setIsBindBankOpen] = useState(false);

  const amounts = [200, 300, 500, 1000, 2000, 5000, 10000, 50000,];
  const withdrawalAmounts = [100, 400, 600, 800, 1000, 2000, 5000, 10000];
  const paymentMethods = ["Fpay", "LGpay", "Other"];

  const banks = ["Abhyudaya Cooperative Bank",
    "Allahabad Bank",
    "Andhra Pradesh Grameena Vikas Bank",
    "Andhra Pragathi Grameena Bank",
    "Andhra Pradesh State Cooperative Bank",
    "Andhra Pragathi Cooperative Bank",
    "AU Small Finance Bank",
    "Airtel Payments Bank",
    "Axis Bank",
    "Bandhan Bank",
    "Bank of Baroda",
    "Bank of India",
    "Bank of Maharashtra",
    "Baroda Gujarat Gramin Bank",
    "Baroda Rajasthan Kshetriya Gramin Bank",
    "Baroda UP Bank",
    "Canara Bank",
    "Capital Small Finance Bank",
    "Catholic Syrian Bank (CSB Bank)",
    "Central Bank of India",
    "Chhattisgarh Rajya Gramin Bank",
    "City Union Bank",
    "Corporation Bank",
    "DCB Bank",
    "Dena Bank",
    "Dhanlaxmi Bank",
    "ESAF Small Finance Bank",
    "Equitas Small Finance Bank",
    "Federal Bank",
    "Fincare Small Finance Bank",
    "Fino Payments Bank",
    "HDFC Bank",
    "ICICI Bank",
    "IDBI Bank",
    "IDFC FIRST Bank",
    "Indian Bank",
    "Indian Overseas Bank",
    "India Post Payments Bank",
    "IndusInd Bank",
    "Jammu & Kashmir Bank",
    "Jana Small Finance Bank",
    "Jharkhand Rajya Gramin Bank",
    "Jio Payments Bank",
    "Karnataka Bank",
    "Karnataka Gramin Bank",
    "Karnataka Vikas Grameena Bank",
    "Karur Vysya Bank",
    "Kerala Gramin Bank",
    "Kotak Mahindra Bank",
    "Lakshmi Vilas Bank",
    "Madhya Pradesh Gramin Bank",
    "Maharashtra Gramin Bank",
    "Manipur Rural Bank",
    "Meghalaya Rural Bank",
    "Mizoram Rural Bank",
    "Nagaland Rural Bank",
    "North East Small Finance Bank",
    "Nutan Nagarik Sahakari Bank",
    "Odisha Gramya Bank",
    "Paschim Banga Gramin Bank",
    "Paytm Payments Bank",
    "Prathama UP Gramin Bank",
    "Punjab & Sind Bank",
    "Punjab Gramin Bank",
    "Punjab National Bank",
    "Rajasthan Marudhara Gramin Bank",
    "RBL Bank",
    "Sarva UP Gramin Bank",
    "Saptagiri Gramin Bank",
    "Shivalik Small Finance Bank",
    "South Indian Bank",
    "State Bank of India",
    "Suryoday Small Finance Bank",
    "Syndicate Bank",
    "Tamil Nadu Grama Bank",
    "Tamilnad Mercantile Bank",
    "Tripura Gramin Bank",
    "UCO Bank",
    "Union Bank of India",
    "United Bank of India",
    "Unity Small Finance Bank",
    "Ujjivan Small Finance Bank",
    "Utkal Grameen Bank",
    "Varanasi Kshetriya Gramin Bank",
    "Vidharbha Konkan Gramin Bank",
    "Yes Bank"
  ];
  const [cashbackSelected, setCashbackSelected] = useState<"apply" | "later">("later"); 

  const BankBindingForm = () => (
    <Dialog open={isBindBankOpen} onOpenChange={setIsBindBankOpen}>
      <DialogContent className="bg-card/50 backdrop-blur-sm bg-[#2b0d0d] bg-opacity-50 rounded-xl border-border w-80 max-w-md mx-auto">
        <DialogHeader className="relative">
          <DialogTitle className=" text-center text-foreground">Bind Bank Card</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <Select>
              <SelectTrigger className=" bg-input border-border text-foreground h-10">
                <SelectValue placeholder="Please Select a Bank" />
              </SelectTrigger>
              <SelectContent className="w-60 bg-popover border-border">
                {banks.map((bank) => (
                  <SelectItem key={bank} value={bank} className="text-popover-foreground">
                    {bank}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Input
              placeholder=" Enter Your Name"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground h-10"
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Enter Account  Number"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground h-10"
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Enter  IFSC Code"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground h-10"
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Please Enter  Email"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground h-10"
            />
          </div>
          <div className="text-center text-primary text-sm py-4">
            Please fill in the withdrawal bank information correctly, otherwise you will be responsible for the withdrawal loss!
          </div>
          {/* Confirm Button */}
          <div className="flex justify-center relative">
            <Button
              className="bg-gradient-to-b from-yellow-300 via-golden to-yellow-600 text-black font-bold py-4 px-16 rounded-full text-base hover:from-yellow-400 hover:via-golden hover:to-yellow-700 transition-all duration-300 shadow-lg border border-yellow-400 relative overflow-hidden"
              size="lg"
              data-testid="button-withdraw"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-full"></div>
              <div className="absolute top-1 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
              <span className="relative z-10 tracking-wide">Confirm</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen bg-[#2b0d0d] bg-background text-foreground">
      {/* Header */}
      <div className="bg-[#450b00] flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">₹</span>
          </div>
          <span className="text-lg font-semibold text-primary">200</span>
        </div>
        <div className="flex items-center gap-3">
          <Plus className="rotate-45 w-6 h-7 text-muted-foreground" />
          <FileText className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-card m-2 rounded-lg gap-2 bg-[#2b0d0d]">
  <button
    onClick={() => setActiveTab("recharge")}
    className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl transition-all text-black font-bold bg-gradient-to-b from-yellow-300 via-golden to-yellow-600 border border-yellow-400 shadow-lg relative overflow-hidden ${
      activeTab === "recharge"
        ? "hover:from-yellow-400 hover:via-golden hover:to-yellow-700 border-b-2 border-yellow-300"
        : "hover:from-yellow-400 hover:via-golden hover:to-yellow-700 text-black"
    }`}
  >
    <ShoppingCart className="w-4 h-4" />
    Recharge
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-full pointer-events-none"></div>
    <div className="absolute top-1 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full pointer-events-none"></div>
  </button>

  <button
    onClick={() => setActiveTab("withdraw")}
    className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-xl transition-all text-black font-bold bg-gradient-to-b from-yellow-300 via-golden to-yellow-600 border border-yellow-400 shadow-lg relative overflow-hidden ${
      activeTab === "withdraw"
        ? "hover:from-yellow-400 hover:via-golden hover:to-yellow-700 border-b-2 border-yellow-300"
        : "hover:from-yellow-400 hover:via-golden hover:to-yellow-700 text-black"
    }`}
  >
    <CreditCard className="w-4 h-4" />
    Withdraw
    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-full pointer-events-none"></div>
    <div className="absolute top-1 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full pointer-events-none"></div>
  </button>
</div>

      <div className="px-4 space-y-6">
        {activeTab === "recharge" ? (
          <>
            <div>
              <div className=" flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Recharge Method
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {selectedMethod}
                </Badge>
              </div>
              <div className=" grid grid-cols-3 gap-2">
                {paymentMethods.map((method) => {
                  const isActive = selectedMethod === method;
                  return (
                    <Button
                      key={method}
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedMethod(method)}
                      className={
                        ` rounded-lg
              h-9 relative px-2
              ${isActive ? "border-[1px] border-[#ffe032] bg-yellow-300/30" : ""}
            `
                      }
                      style={isActive ? { borderColor: "#FFD700" } : {}}
                    >
                      {method}
                      {isActive && (
                        <span
                          className="bg bg-yellow-600 absolute bottom-0 right-0 rounded-sm flex items-center justify-center"
                          style={{
                            width: "15px",
                            height: "15px",
                            border: "1.5px solid #FFD700",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M5 11L9 15L15 7"
                              stroke="#FFD700"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                            />
                          </svg>
                        </span>
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Amount Selection */}
            <div >
              <h3 className=" text-sm font-medium text-muted-foreground mb-3">Deposit Amount</h3>
              <div className="grid grid-cols-4 gap-2">
                {amounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedAmount(amount)}
                    className={` h-12 ${selectedAmount === amount
                        ? " bg-wallet-amount-button-selected border-wallet-amount-button-selected text-background"
                        : "bg-wallet-amount-button border-border text-foreground hover:bg-muted"
                      }`}
                  >
                    ₹ {amount.toLocaleString("en-IN")}
                  </Button>
                ))}
              </div>
            </div>

           <div>
      <h3 className="text-sm font-medium text-muted-foreground mb-3">Recharge Cashback</h3>
      <div className="grid grid-cols-2 gap-3">
        {/* Apply Cashback Card */}
        <Card
          className={`bg-card border-border transition-colors cursor-pointer border-x-0 ${
            cashbackSelected === "apply"
              ? "border-yellow-500 bg-yellow-500 bg-opacity-30"
              : ""
          }`}
          onClick={() => setCashbackSelected("apply")}
        >
          <div className="grid grid-cols-2 items-center text-center">
            <span className="grid grid-cols-2 items-center justify-center text-sm font-medium">
              <img src={cashIcon} alt="Share" className="m-3 ml-7 h-8" />
            </span>
            <span className="mr-7">Apply</span>
          </div>
        </Card>

        {/* Later Card */}
        <Card
          className={`bg-card border-border transition-colors cursor-pointer border-x-0 ${
            cashbackSelected === "later"
              ? "border-yellow-500 bg-yellow-500 bg-opacity-30"
              : ""
          }`}
          onClick={() => setCashbackSelected("later")}
        >
          <div className="flex items-center justify-center mt-4">Later</div>
        </Card>
      </div>

      {/* Conditionally render Amount Summary if Apply selected */}
      {cashbackSelected === "apply" && (
        <Card className="rounded-lg overflow-hidden border border-[#f0c46c] p-0 shadow-sm bg-gradient-to-r from-[#3d040b] to-[#381c1f] mt-4">
          <div className="flex items-center justify-between bg-gradient-to-b from-[#ffe36d] to-[#ffc947] px-3 py-0.5">
            <div className="text-[14px] font-medium text-[#000000]">Deposit Amount</div>
            <div className="text-[14px] font-medium text-[#000000]">Cashback amount</div>
          </div>
          <div className="flex items-center justify-between bg-gradient-to-r from-[#641c06] to-[#300509] px-4 py-2">
            <div className="flex flex-col items-start">
              <div className="text-[17px] font-semibold text-[#ffe36d] drop-shadow-sm">₹{selectedAmount}</div>
            </div>
            <div className="text-[26px] font-bold text-[#ffe36d] mx-2">+</div>
            <div className="flex flex-col items-end">
              <div className="text-[17px] font-semibold text-[#ffe36d] drop-shadow-sm">₹{Math.floor(selectedAmount * 0.1)}</div>
            </div>
          </div>
        </Card>
      )}
    </div>



            {/* pay Button */}
            <div className="flex justify-center relative">
              <Button
                className="bg-gradient-to-b from-yellow-300 via-golden to-yellow-600 text-black font-bold py-4 px-16 rounded-full text-base hover:from-yellow-400 hover:via-golden hover:to-yellow-700 transition-all duration-300 shadow-lg border border-yellow-400 relative overflow-hidden"
                size="lg"
                data-testid="button-withdraw"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-full"></div>
                <div className="absolute top-1 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
                <span className="relative z-10 tracking-wide">Pay</span>
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Bind Bank Card Section */}
            <Card
              className="p-4 bg-card border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => setIsBindBankOpen(true)}
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Plus className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-medium underline text-sm">Bind Bank Card</span>
              </div>
            </Card>

            {/* Withdrawal Information */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Withdrawal Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Maximum Withdrawable Amount:</span>
                  <span className="text-foreground">₹ 0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Currently Selected Amount:</span>
                  <span className="text-foreground">₹ 100</span>
                </div>
                <div className="text-foreground text-center py-2">
                  The Current Withdrawal Amount Exceeds the Maximum Withdrawable Amount
                </div>
              </div>
            </div>

            {/* Withdrawal Amount Selection */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Withdrawal Amount</h3>
              <div className="grid grid-cols-4 gap-2">
                {withdrawalAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedAmount(amount)}
                    className={`h-10 ${selectedAmount === amount
                        ? "bg-wallet-amount-button-selected border-wallet-amount-button-selected text-background"
                        : "bg-wallet-amount-button border-border text-foreground hover:bg-muted"
                      }`}
                  >
                    ₹ {amount}
                  </Button>
                ))}
              </div>
            </div>
            {/* Withdraw Button */}
            <div className="flex justify-center relative">
              <Button
                className="bg-gradient-to-b from-yellow-300 via-golden to-yellow-600 text-black font-bold py-4 px-12 rounded-full text-base hover:from-yellow-400 hover:via-golden hover:to-yellow-700 transition-all duration-300 shadow-lg border border-yellow-400 relative overflow-hidden"
                size="lg"
                data-testid="button-withdraw"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-full"></div>
                <div className="absolute top-1 left-4 right-4 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
                <span className="relative z-10 tracking-wide">Withdraw</span>
              </Button>
            </div>

            {/* VIP Info */}
            <div className="text-center text-primary text-sm">
              Withdrawal money after becoming a VIP player
            </div>
          </>
        )}
      </div>

      <BankBindingForm />
    </div>
  );
};

export default WalletPage;
